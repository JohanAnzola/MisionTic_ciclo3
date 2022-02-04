from django.db import models
from django.utils import translation
from rest_framework import serializers
from authApp.models.transaction import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id','amount', 'date']