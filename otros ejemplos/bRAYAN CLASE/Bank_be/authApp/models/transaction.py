from django.db import models
from .account import Account

class Transaction(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(null=True)
    amount = models.FloatField
    origin_account = models.ForeignKey(Account, related_name='my_transaction', on_delete=models.SET_NULL, null=True) #falta el null
    destination_account = models.ForeignKey(Account,  related_name='transaction', on_delete=models.SET_NULL, null=True)
    transaction_type = models.CharField(max_length=64, choices=(
        ('C', 'Credito'),    #la D idica como se guarde y Debito es como se ve
        ('D', 'Debito')
    ))
    comment = models.TextField(null = True, blank=True) 