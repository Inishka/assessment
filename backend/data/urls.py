
from django.urls import path
from . import views

urlpatterns = [
    path('companies', views.get_companies, name='get_companies'),
    path('vcs/', views.get_vcs, name='get_vcs'),
    path('competitors/<str:company_name>/', views.get_competitors, name='get_competitors'),
    path('relationships/', views.get_relationships, name='get_relationships'),
    path('insights/', views.get_insights, name='get_insights'),
    path('company/<str:company_id>/', views.get_company_details, name='get_company_details'),
    path('vc/<str:vc_id>/', views.get_vc_details, name='get_vc_details'),
]