# api/tests.py
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

# Create your tests here.

class CompanyTests(APITestCase):
    def test_get_companies(self):
        response = self.client.get(reverse('get_companies'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_investors(self):
        response = self.client.get(reverse('get_investors'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_company_investors(self):
        # Assuming you have a company with id 1
        response = self.client.get(reverse('get_company_investors', args=[1]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_company_competitors(self):
        # Assuming you have a company with id 1
        response = self.client.get(reverse('get_company_competitors', args=[1]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_investment_trends(self):
        response = self.client.get(reverse('get_investment_trends'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
