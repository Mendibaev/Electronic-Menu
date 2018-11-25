import datetime
from django.db import models
from django.utils import timezone

class CustomerManager(models.Manager):
	def for_user(self, user):
		return self.filter(id=user)

MALE = 'M'
FEMALE = 'F'
GENDER_CHOICES = (
    (MALE, 'Male'),
    (FEMALE, 'Female')
)
class Customer(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    gender = models.CharField(
        max_length = 1,
        choices = GENDER_CHOICES,
        default = MALE,
    )
    number = models.IntegerField()
    address = models.CharField(max_length=200)
    created_at = models.DateTimeField('date created')
    objects = CustomerManager()
    def __str__(self):
        return "%s %s" % (name, surname)

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.created_at <= now

    was_published_recently.admin_order_field = 'created_at'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Created recently?'

class Manager(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICES,
        default=MALE,
    )
    number = models.IntegerField()
    created_at = models.DateTimeField('date created')
    def __str__(self):
        return "%s %s" % (name, surname)

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.created_at <= now

    was_published_recently.admin_order_field = 'created_at'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Created recently?'

class Cart(models.Model):
	amount_of_order = models.IntegerField()
	total_price = models.IntegerField()
	total_discount = models.IntegerField()
	ordered_at = models.DateTimeField('date ordered')
	manager_id = models.ForeignKey(Manager, on_delete=models.CASCADE)

	def __str__(self):
		return "Cart #%d" % (self.id)

	def was_published_recently(self):
		now = timezone.now()
		return now - datetime.timedelta(days=1) <= self.ordered_at <= now

	was_published_recently.admin_order_field = 'ordered_at'
	was_published_recently.boolean = True
	was_published_recently.short_description = 'Ordered recently?'

class Category(models.Model):
	class Meta:
		verbose_name = "Category"
		verbose_name_plural = "Categories"
	name = models.CharField(max_length=200)
	created_at = models.DateTimeField('date published')

	def __str__(self):
		return self.name

	def was_published_recently(self):
		now = timezone.now()
		return now - datetime.timedelta(days=1) <= self.created_at <= now

	was_published_recently.admin_order_field = 'created_at'
	was_published_recently.boolean = True
	was_published_recently.short_description = 'Created recently?'

class Product(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	name = models.CharField(max_length=200)
	description = models.CharField(max_length=700)
	image_url = models.CharField(max_length=500)
	weight = models.FloatField(null=True)
	price = models.IntegerField()
	discount = models.IntegerField(null=True)
	created_at = models.DateTimeField('date published')

	def __str__(self):
		return self.name

	def was_published_recently(self):
		now = timezone.now()
		return now - datetime.timedelta(days=1) <= self.created_at <= now

	was_published_recently.admin_order_field = 'created_at'
	was_published_recently.boolean = True
	was_published_recently.short_description = 'Created recently?'

