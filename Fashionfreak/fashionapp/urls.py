from django.urls import path
from . import views

urlpatterns=[
    path('',views.signin,name="signin"),
    path('signup/',views.signup,name="signup"),
    path('logged/',views.logged,name="logged"),
    path('register/',views.register,name="register"),
    path('logout/',views.log_out,name="logout"),
]