from django.http import HttpResponse,HttpResponseRedirect
from django.db.models import F
from django.shortcuts import render,get_object_or_404
from django.urls import reverse
from django.views import generic,View
from django.views.generic import TemplateView
from .models import Question,Choice
import datetime
class IndexView(generic.ListView):
    template_name="polls/index.html"
    context_object_name="latest_question_list"
    def get_queryset(self):
        """Return the last five published questions. """
        return Question.objects.order_by("-pub_date")[:5]

class DetailView(generic.DetailView):
    model=Question
    template_name="polls/detail.html"

class ResultsView(generic.DetailView):
    model=Question
    template_name="polls/results.html"

def vote(request,question_id):
    question=get_object_or_404(Question,pk=question_id)
    try:
        selected_choice=question.choice_set.get(pk=request.POST["choice"])
    except(KeyError, Choice.DoesNotExist):
        return render(request,"polls/detail.html",{
            "question":question,
            "error_message":"Your didnt select a choice",
        },)
    else:
        selected_choice.votes=F("votes")+1
        selected_choice.save()
    return HttpResponseRedirect(reverse("polls:results",args=(question.id,)))

#Simple function view that returns date and time
def current_datetime(request):
    now=datetime.datetime.now()
    html='<html lang="en"><body style="text-align:center"><h1>it is now %s.</h1></body></html>'%now
    return HttpResponse(html)

#Class-based view
class DateAndTime(View):
    now=datetime.datetime.now()
    def get(self,request):
        html='<html lang="en"><body style="text-align:center"><h1>it is now %s.</h1></body></html>'%self.now
        return HttpResponse(html)

#Generic class-based view    
class MyDateTime(TemplateView):
    template_name='polls/datetime.html'
    def get(self,request):
        data={'now':datetime.datetime.now()}
        return self.render_to_response(data)