import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food'; 
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return[ 
      {
        id: 1,
        name: 'Meatball',
        price: 20,
        tags: ['Slow Food', 'Lunch'],
        favourite: true,
        stars: 4.7,
        imageUrl: '/assets/images/foods/1.jpeg',
        origins: ['Kenya', 'Uganda', 'Zambia'],
        cookTime: '20-30',

      },
      {
        id: 2,
        name: 'Pizza',
        price: 20,
        tags: ['Slow Food', 'Supper'],
        favourite: false,
        stars: 3.1,
        imageUrl: '/assets/images/foods/2.jpeg',
        origins: ['Brazil', 'Usa', 'China'],
        cookTime: '20-40',

      },
      {
        id: 3,
        name: 'Chips',
        price: 50,
        tags: ['Hot Food', 'Lunch'],
        favourite: false,
        stars: 5.0,
        imageUrl: '/assets/images/foods/3.jpeg',
        origins: ['Kenya', 'Uganda', 'Zambia'],
        cookTime: '20-50',

      },
      {
        id: 4,
        name: 'Drumsticks',
        price: 67,
        tags: ['Delicacy', 'Supper'],
        favourite: true,
        stars: 4.1,
        imageUrl: '/assets/images/foods/4.jpeg',
        origins: ['Ghana', 'Moroocco', 'Tanzania'],
        cookTime: '20-45',

      },
      {
        id: 5,
        name: 'Spahaghetti',
        price: 39,
        tags: ['Slow Food', 'Lunch'],
        favourite: false,
        stars: 3.9,
        imageUrl: '/assets/images/foods/5.jpeg',
        origins: ['Kenya', 'Uganda', 'Zambia'],
        cookTime: '25-40',

      },
      {
        id: 6,
        name: 'Roated Potatoes',
        price: 65,
        tags: ['Fast Food', 'Supper'],
        favourite: true,
        stars: 2.7,
        imageUrl: '/assets/images/foods/6.jpeg',
        origins: ['Burundi', 'Rwanda', 'Nigeria'],
        cookTime: '50-60',

      },
      {
        id: 7,
        name: 'Minced Meat',
        price: 105,
        tags: ['Slow Food', 'Lunch'],
        favourite: false,
        stars: 2.0,
        imageUrl: '/assets/images/foods/7.jpeg',
        origins: ['Bosnia'],
        cookTime: '20-60',

      },
      {
        id: 8,
        name: 'Rice',
        price: 55,
        tags: ['Fast Food', 'Lunch'],
        favourite: true,
        stars: 4.7,
        imageUrl: '/assets/images/foods/8.jpeg',
        origins: ['Kenya', 'Uganda', 'Zambia'],
        cookTime: '20-30',

      },
      {
        id: 9,
        name: 'Githeri',
        price: 20,
        tags: ['Fast Food', 'Lunch', 'Soup'],
        favourite: false,
        stars: 4.0,
        imageUrl: '/assets/images/foods/9.jpeg',
        origins: ['Mozambique'],
        cookTime: '60-80',

      },
      {
        id: 10,
        name: 'Roated Meat',
        price: 100,
        tags: ['Hot Food', 'Lunch', 'Pizza'],
        favourite: true,
        stars: 5.0,
        imageUrl: '/assets/images/foods/10.jpeg',
        origins: ['France', 'Germany'],
        cookTime: '20-30',

      },
    ];
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllFoodsByTag(tag: string): Food[]{
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  
  getAllTags(): Tag[]{
    return [
      {name: 'All', count: 10},
      {name: 'Fast Food', count: 4},
      {name: 'Pizza', count: 3},
      {name: 'Slow Food', count: 5},
      {name: 'Soup', count: 2},
      {name: 'Lunch', count: 6},
      {name: 'Hot Food', count: 1}
    ];
  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
}
