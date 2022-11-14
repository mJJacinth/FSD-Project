from django.contrib import admin

# Register your models here.

from . models import Signup, product
admin.site.register(Signup)
admin.site.register(product)


