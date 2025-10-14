import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-find-br',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="p-8 bg-white rounded-2xl shadow-xl w-full max-w-lg border-l-4 border-blue-500">
      <h2 class="text-3xl font-bold text-blue-700 mb-4">Find By Route</h2>
      <p class="text-gray-600 mb-6">
        **TODO:** Implement the search form and display results here. 
        This page is successfully routed at **/find-by-route**.
      </p>
      
      <button [routerLink]="['/search']" class="text-sm text-blue-500 hover:text-blue-700 font-medium">
        ← Back to Search Options
      </button>
    </div>
  `
})
export class FindBrComponent {}