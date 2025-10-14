import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="p-8 bg-white rounded-2xl shadow-xl w-full max-w-2xl">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">How would you like to search?</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <a [routerLink]="['/find-by-route']"
          class="flex flex-col items-center p-8 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 rounded-xl transition duration-150 transform hover:shadow-lg"
        >
          <span class="text-3xl mb-2">🛣️</span>
          <span class="text-xl font-semibold text-blue-700">Find by Route</span>
          <span class="text-sm text-gray-500 mt-1 text-center">Search using a specific route ID or name.</span>
        </a>
        
        <a [routerLink]="['/find-by-number']"
          class="flex flex-col items-center p-8 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl transition duration-150 transform hover:shadow-lg"
        >
          <span class="text-3xl mb-2">🔢</span>
          <span class="text-xl font-semibold text-green-700">Find by Number</span>
          <span class="text-sm text-gray-500 mt-1 text-center">Search using a numerical identifier.</span>
        </a>
        
      </div>
      
      <button [routerLink]="['/']" class="mt-8 text-sm text-gray-500 hover:text-indigo-600 block mx-auto">
          ← Back to Home Page
      </button>
    </div>
  `
})
export class SearchComponent {}
