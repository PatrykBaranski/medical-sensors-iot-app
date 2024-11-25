from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import matplotlib.pyplot as plt
import numpy as np
from io import BytesIO
from django.http import HttpResponse
from main_app.models import Ecg
import ast

class EcgFourierPlotView(APIView):
    def get(self, request, *args, **kwargs):
        # Get the ecg_id from the request parameters
        ecg_id = request.query_params.get('ecg_id')
        if not ecg_id:
            return Response({"error": "ecg_id parameter is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch the ECG data from the database based on ecg_id
        try:
            ecg_data = Ecg.objects.get(id=ecg_id)
        except Ecg.DoesNotExist:
            return Response({"error": "ECG data not found"}, status=status.HTTP_404_NOT_FOUND)

        # Convert the string representation of the list to an actual list
        ecg_transformed_list = ast.literal_eval(ecg_data.ecg_list)
        ecg_fourier_list = np.fft.fft([float(value) for value in ecg_transformed_list])

        try:
            # Convert the string list back to complex numbers
            ecg_fourier_transformed = np.array([complex(x) for x in ecg_fourier_list])
        except ValueError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # Generate the plot
        plt.figure()
        plt.plot(np.abs(ecg_fourier_transformed))
        plt.title('ECG Fourier Transform')
        plt.xlabel('Frequency')
        plt.ylabel('Amplitude')

        # Save the plot to a BytesIO object
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)

        # Return the image as a response
        return HttpResponse(buffer, content_type='image/png')

# Create your views here.
