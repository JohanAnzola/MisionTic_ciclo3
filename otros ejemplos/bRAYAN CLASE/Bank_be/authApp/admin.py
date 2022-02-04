from django.contrib import admin
#from .models.user import User
from .models.account import Account
from .models.transaction import Transaction
#admin.site.register(User)
#admin.site.register(Account)


class AccountAdmin(admin.ModelAdmin):
    list_per_page = 20
    list_display = ('id', 'balance', 'isActive')
    search_fields = ['balance']
    list_filter = ('isActive',)

admin.site.register(Account, AccountAdmin)
# Register your models here.
