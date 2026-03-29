from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

# Create your views here.

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

def products_detail(request,pk):
    try:
        product = Product.objects.get(id=pk)
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

def categories_detail(request,pk):
    try:
        category = Category.objects.get(id=pk)
        data = {
            "id":category.id,
            "name":category.name,
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({"error":"Category not found"},status=404)

def category_products(request,pk):
    try:
        product = Product.objects.filter(category_id=pk)
        data=[]
        for product in product:
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