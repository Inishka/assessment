from django.urls import path
from . import views

urlpatterns = [
    path('companies', views.get_companies, name='get_companies')
]