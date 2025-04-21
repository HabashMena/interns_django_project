from django.urls import path
from . import views
app_name="polls"
urlpatterns=[
    path("",views.IndexView.as_view(),name="index"),
    path("<int:pk>/",views.DetailView.as_view(),name="detail"),
    path("<int:pk>/results/",views.ResultsView.as_view(),name="results"),
    path("<int:question_id>/vote/",views.vote,name="vote"),
    path("current_time/",views.current_datetime,name="current_datetime"),
    path("datetime/",views.DateAndTime.as_view(),name="datetime"),
    path("genericDatetime/",views.MyDateTime.as_view(),name="genericDateTime")
]