from django.db import models
from datetime import datetime, date
 
# Create your models here.
 
class Signup(models.Model):
    name = models.CharField(max_length=30, blank=True)
    Gender1= models.CharField(max_length=30,blank=True)
    date = models.DateField(auto_now=False)
    email = models.CharField(max_length=30, blank=True)
    password = models.CharField(max_length=30, blank=True)
    confirm_password = models.CharField(max_length=30, blank=True)
    number=models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.name

class product(models.Model):
    productid=models.IntegerField(primary_key=True)
    brand=models.CharField(max_length=100,blank=True, default="draftname")
    price=models.IntegerField(blank=True, default=0)
    des=models.CharField(max_length=100,blank=True, default="draftname")
    tag=models.CharField(max_length=100,blank=True, default="draftname")
    img=models.CharField(max_length=100)
 
    # def __str__(self):
    #     return self.name

    def __str__(self):
        return  self.brand 
