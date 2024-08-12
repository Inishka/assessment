from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .data import getAllCompanies

# Create your views here.

def get_companies(request):
    if request.method == 'GET':
        companies = getAllCompanies()
        return JsonResponse(companies)
    
    return HttpResponse(status=405)