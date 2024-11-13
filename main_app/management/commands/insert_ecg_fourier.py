from django.core.management.base import BaseCommand
import csv
import numpy as np
from main_app.models import EcgFourierTransofrmed

class Command(BaseCommand):
    with open('ecg.csv', newline="") as ecg_files:
        ecgs = csv.reader(ecg_files)
        ecgs_list = []
        for row in ecgs:
            for index,ecg_value in enumerate(row):
                try:
                    ecgs_list[index].append(float(ecg_value))
                except IndexError:
                    ecgs_list.append([])
                    ecgs_list[index].append(float(ecg_value))

        

    for ecg in ecgs_list:
        ecg_fourier_transformed = np.fft.fft(ecg)
        ecg_fourier_transformed_string_list =[str(x) for x in ecg_fourier_transformed]

        ecg_model = EcgFourierTransofrmed()
        ecg_model.ecg_transformed_list = ecg_fourier_transformed_string_list
        ecg_model.save()