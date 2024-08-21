from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
import json
from rest_framework.decorators import api_view
from .data import getAllCompanies, getAllVCs, getCompetitors, get_relationships, get_insights, getCompanyDetails, getVCDetails

# View to get all companies
@api_view(['GET'])
def get_companies(request):
    try:
        companies = getAllCompanies()
        return JsonResponse(companies, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)

# View to get all venture capitalists (VCs)
@api_view(['GET'])
def get_vcs(request):
    try:
        vcs = getAllVCs()
        return JsonResponse(vcs, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)

# View to get competitors for a given company
@api_view(['GET'])
def get_competitors(request, company_name):
    try:
        competitors = getCompetitors(company_name)
        return JsonResponse(competitors, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)

# View to get all relationships between companies and VCs
@api_view(['GET'])
def get_relationships(request):
    try:
        relationships = get_relationships()
        return JsonResponse(relationships, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)

# View to get integrated insights like investment trends
@api_view(['GET'])
def get_insights(request):
    try:
        insights = get_insights()
        return JsonResponse(insights, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)

# View to get details of a specific company
@api_view(['GET'])
def get_company_details(request, company_id):
    try:
        company_details = getCompanyDetails(company_id)
        return JsonResponse(company_details, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)

# View to get details of a specific VC
@api_view(['GET'])
def get_vc_details(request, vc_id):
    try:
        vc_details = getVCDetails(vc_id)
        return JsonResponse(vc_details, safe=False)
    except Exception as e:
        return HttpResponse(str(e), status=500)
