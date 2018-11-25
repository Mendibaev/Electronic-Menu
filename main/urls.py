from django.urls import path
from main import views

app_name = 'main'
urlpatterns = [
	# ex: /pizza_list/
	path('', views.IndexView.as_view(), name='index'),
	# ex: /pizza_list/<int:pk>/
	path('<int:pk>/', views.DetailView.as_view(), name='detail'),
	# ex: /pizza_list/api/
	path('api/', views.category_list),
	# ex: /pizza_list/api/<int:pk>/
	path('api/<int:pk>/', views.category_list_detail),
	# ex: /pizza_list/1/api/
	path('<int:pk>/api/', views.product_list),
	# ex: /pizza_list/1/api/<int:pk>/
	path('<int:pk>/api/<int:product_id>/', views.product_list_detail),
	# ex: /pizza_list/login/
	path('login/', views.login)
];