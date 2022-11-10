from django.http import HttpResponse,HttpResponseRedirect
from ssl import AlertDescription
from django.shortcuts import redirect, render
from . models import Signup
# import the standard Django Model6
# from built-in library
from django.contrib import auth
from django.http import HttpResponse

from django.contrib.auth.forms import AuthenticationForm
 

 
# Create your views here.
def signin(request):
    if request.method == 'POST':
        Username = request.POST.get('user_name')
        password = request.POST.get('password')
        print("hii")
 
        if Signup.objects.filter(user_name=Username).exists():
            print("hello")
            if Signup.objects.filter(password=password).exists():
                print("ok")
                context={
                    "user_name":Username
                }
                return render(request, 'sample/logged.html',context)
            else:
                return HttpResponse("Wrong password")
        else:
            return HttpResponse("Invalid username")
    else:
        return render(request, 'Fashionfreak/login.html')
       
def signup(request):
    print("dharmiii")
    
    if request.method=='POST':
        print("abcd")
        name = request.POST['name']
        print("hai")
        Gender=request.POST['gender']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        date = request.POST['birthday']
        number=request.POST['mobile']
        print(name,Gender,email,password,confirm_password,date,number)
        if password == confirm_password:
            if Signup.objects.filter(email=email).exists():
                return HttpResponse("Email is already in use")
            else:
                print("working")
                register = Signup(name=name, Gender1=Gender, email=email, password=password, confirm_password=confirm_password,date=date, number=number)
                print("456")
                register.save()
                print("123")
                context={
                    "name":name,  
                    }              
                return render(request, 'Fashionfreak/register.html', context)
        else:
            return HttpResponse("password do not match")
    else:
        return render(request, 'Fashionfreak/signup.html')
 
def logged(request):
    return render(request, 'Fashionfreak/logged.html')
def register(request):
    return render(request, 'Fashionfreak/register.html')
 
   
 
 

