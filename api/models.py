from django.db import models
from users.models import User

# Create your models here.


class Assignment(models.Model):
    title = models.CharField(max_length=50)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class GradedAssignment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    assignment = models.ForeignKey(
        Assignment, on_delete=models.SET_NULL, blank=True, null=True)
    grade = models.FloatField()

    def __str__(self):
        return self.student.username


class Choice(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=200)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(
        Choice, on_delete=models.CASCADE, related_name='answer')
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question


# assignment
# - title
# - teacher


# gradedassignment
# - student
# - assignment (FK)
# - grade

# question
# - question (title)
# - choices (many)
# - answer (FK)
# - assignment (fk)
# - order


# choice
#  -title
