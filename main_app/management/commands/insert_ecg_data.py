from django.core.management.base import BaseCommand
import csv
from main_app.models import Ecg

class Command(BaseCommand):
    with open('ecg.csv', newline="") as ecg_files:
        ecgs = csv.reader(ecg_files)
        ecgs_list = []
        for row in ecgs:
            for index,ecg_value in enumerate(row):
                try:
                    ecgs_list[index].append(ecg_value)
                except IndexError:
                    ecgs_list.append([])
                    ecgs_list[index].append(ecg_value)

        

    for ecg in ecgs_list:
        ecg_model = Ecg()
        ecg_model.ecg_list = ecg
        ecg_model.save()