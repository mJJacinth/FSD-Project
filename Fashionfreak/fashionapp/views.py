from django.http import HttpResponse,HttpResponseRedirect
from ssl import AlertDescription
from django.shortcuts import redirect, render
from . models import Signup
# import the standard Django Model6
# from built-in library
from django.contrib import auth
from django.http import HttpResponse


 

 
# Create your views here.
def signin(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        # name1 = Signup.objects.get(email=email,password=password)
        # user1 = name1.name
        # print("*"*50)
        # print(name)
        if Signup.objects.filter(email=email).exists():
            if Signup.objects.filter(password=password).exists():
                # context={
                #     "email":email,
                #     "name": name,
                # }
                # request.session["name"] = user1
                return render(request, 'Fashionfreak/fashion.html', {"email":email})
            else:
                return HttpResponse("Wrong password")
        else:
            return HttpResponse("Invalid username")
    else:
        #del request.session['name']
        # if "name" in request.session:
        #     context = {
        #         "name" : request.session["name"]
        #     }

            return render(request, 'Fashionfreak/fashion.html',context)
        else:
            return render(request, 'Fashionfreak/login.html')
       
def signup(request):
    print(request)
    
    if request.method=='POST':
       
        name = request.POST['name']
        Gender=request.POST['Gender1']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']
        date = request.POST['date']
        number=request.POST['number']
        print(name,Gender,email,password,confirm_password,date,number)
        if password == confirm_password:
            if Signup.objects.filter(email=email).exists():
                return HttpResponse("Email is already in use")
            else:
                print("working")
                register = Signup(name=name, Gender1=Gender, email=email, password=password, confirm_password=confirm_password,date=date, number=number)
                register.save()
                context={
                    "name":name,  
                    }              
                return render(request, 'Fashionfreak/register.html', context)
        else:
            return HttpResponse("password do not match")
    else:
        if "name" in request.session:
            return render(request, 'Fashionfreak/fashion.html',{'name':request.session["name"]})
        return render(request, 'Fashionfreak/signup.html')
 
def logged(request):
    return render(request, 'Fashionfreak/logged.html')
def register(request):
    return render(request, 'Fashionfreak/register.html')
def logout(request):
    if "name" in request.session:
        del request.session['name']
    return HttpResponse("you are logged out")

 
   
 
 

