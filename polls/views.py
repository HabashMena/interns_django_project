# when the client click on link, he send http request and i send a response


#لما بدي اعمل فيوز لازم اربطها بال يورلز تبعت التطبيق
# صفحات تقريبا

# views -----> from models.py and templates


from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Question
from django.views.generic import ListView, DetailView
from polls.models import Poll
from django.contrib.auth.mixins import LoginRequiredMixin



# ما في داعي ارجع اكتب كلمة تيمبلت لانه تعرف عالملف خلص
def index(request):
    x={
        'name':'ali',
         'age':7689087654
    }

    return render(request, 'polls/index.html',x)

# Create your views here.

#if i want to create a new page 
# 1-- make a new page in templetes .html
# 2-- make a def for it in views.py
# 3-- make a link to this page in the urls


# اسم الموديل بعدين الاشي الي بدي اعمله
class PostList(ListView):
    model=Poll
    context_object_name = 'all_mypolls'
    ordering=['question']

# in template use object_list     or      Poll_list
# بقدر انا اختار اسم ال context ب اتريبيوت بالموقع 


#mixin
#الفرق انه بضيفله behavior

'''
class PostDetail(LoginRequiredMixin, ListView):
    model=Poll
    context_object_name = 'all_mypolls'
    ordering=['question']

'''


class PostCreate:
    pass

class PostDelete:
    pass




def about(request):
    return render(request, 'polls/about.html')


def detail(request, question_id):
    return HttpResponse(f"You're looking at question {question_id}.")


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


'''

def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    output = ", ".join([q.question_text for q in latest_question_list])
    return HttpResponse(output)


def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    template = loader.get_template("polls/index.html")
    context = {"latest_question_list": latest_question_list}
    return HttpResponse(template.render(context, request))
'''
# Leave the rest of the views (detail, results, vote) unchanged
