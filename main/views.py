from django.views import generic
from django.shortcuts import redirect
from django.utils import timezone
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from main.serializers import CategoryModelSerializer, ProductModelSerializer
from main.models import Category, Product
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

app_name = 'main'

class IsSuperAdmin(IsAuthenticated):
    def has_permission(self, request, view):
        return request.user and request.user.is_superuser

class IsStaff(IsAuthenticated):
    def has_permission(self, request, view):
        return request.user and request.user.is_staff

class IndexView(generic.ListView):
	template_name = 'main/index.html'
	serializer_class = CategoryModelSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = (IsAuthenticated,)

	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)

	def get_queryset(self):
		return Category.objects.filter(
			created_at__lte=timezone.now(),
		).order_by('-created_at')[:20]

	context_object_name = 'latest_category_list'

class DetailView(generic.DetailView):
	model = Category
	template_name = 'main/products.html'
	serializer_class = ProductModelSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = (IsAuthenticated,)
	paginate_by = 10

@api_view(['POST'])
def login(request):
	username = request.data.get('username')
	password = request.data.get('password')
	user = authenticate(username=username, password=password)
	if user is None:
		return Response({'error': 'Invalid data'})
	token, created = Token.objects.get_or_create(user=user)
	return Response({'token': token.key})

@api_view(['GET', 'POST'])
@csrf_exempt
def category_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        categories_list = Category.objects.all()
        serializer = CategoryModelSerializer(categories_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST' and request.META.get('USERNAME') and request.META.get('HTTP_AUTHORIZATION'):
        data = JSONParser().parse(request)
        serializer = CategoryModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['DELETE', 'PUT', 'GET'])
@csrf_exempt
def category_list_detail(request, pk):
	"""
	Retrieve, update or delete a code snippet.
	"""
	try:
		categories_list = Category.objects.get(pk=pk)
	except Category.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = CategoryModelSerializer(categories_list)
		return JsonResponse(serializer.data)

	elif request.method == 'PUT' and request.META.get('USERNAME') and request.META.get('HTTP_AUTHORIZATION'):
		data = JSONParser().parse(request)
		serializer = CategoryModelSerializer(categories_list, data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data)
		return JsonResponse(serializer.errors, status=400)

	elif request.method == 'DELETE' and request.META.get('USERNAME') and request.META.get('HTTP_AUTHORIZATION'):
		categories_list.delete()
		return HttpResponse(status=204)

@api_view(['GET', 'POST'])
@csrf_exempt
def product_list(request, pk):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        category_list = Category.objects.get(pk=pk)
        products_list = category_list.product_set.all()
        serializer = ProductModelSerializer(products_list, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST' and request.META.get('USERNAME') and request.META.get('HTTP_AUTHORIZATION'):
        data = JSONParser().parse(request)
        serializer = ProductModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['DELETE', 'PUT', 'GET'])
@csrf_exempt
def product_list_detail(request, pk, product_id):
	"""
	Retrieve, update or delete a code snippet.
	"""
	try:
		category_list = Category.objects.get(pk=pk)
		product = category_list.product_set.get(pk=product_id)
	except Product.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = ProductModelSerializer(product)
		return JsonResponse(serializer.data)

	elif request.method == 'PUT' and request.META.get('USERNAME') and request.META.get('HTTP_AUTHORIZATION'):
		data = JSONParser().parse(request)
		serializer = ProductModelSerializer(product, data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data)
		return JsonResponse(serializer.errors, status=400)

	elif request.method == 'DELETE' and request.META.get('USERNAME') and request.META.get('HTTP_AUTHORIZATION'):
		product.delete()
		return HttpResponse(status=204)