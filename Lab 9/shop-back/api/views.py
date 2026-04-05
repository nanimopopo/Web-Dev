from symtable import Class

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets

from .models import Product, Category
#Lab9
from rest_framework.viewsets import ModelViewSet
from .serializers import ProductSerializer,CategorySerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self,request,pk=None):
        products=Product.objects.filter(category_id=pk,price__gte=999).order_by('-price')
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def products_list(request):
    products = Product.objects.all()
    data=[]
    for product in products:
        data.append({
            "id":product.id,
            "name":product.name,
            "price":product.price,
            "description":product.description,
            "count":product.count,
            "is_active":product.is_active,
            "category_id":product.category.id
        })
    return JsonResponse(data,safe=False)

def categories_list(request):
    categories = Category.objects.all()
    data=[{
        "id":category.id,
        "name":category.name,
    } for category in categories]
    return JsonResponse(data,safe=False)

def products_detail(request,id):
    try:
        product = Product.objects.get(id=id)
        data = {
            "id":product.id,
            "name":product.name,
            "price":product.price,
            "description":product.description,
            "count":product.count,
            "is_active":product.is_active,
            "category_id":product.category.id
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error":"Product not found"},status=404)

def categories_detail(request,id):
    try:
        category = Category.objects.get(id=id)
        data = {
            "id":category.id,
            "name":category.name,
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({"error":"Category not found"},status=404)

def category_products(request,id):
    try:
        products = Product.objects.filter(category_id=id)
        data=[]
        for product in products:
            data.append({
                "id":product.id,
                "name":product.name,
                "price":product.price,
                "description":product.description,
                "count":product.count,
                "is_active":product.is_active,
            })
        return JsonResponse(data,safe=False)
    except Product.DoesNotExist:
        return JsonResponse({"error":"Product not found"},status=404)


