import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-find-bn',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="p-8 bg-white rounded-2xl shadow-xl w-full max-w-lg">
      <h2 class="text-3xl font-bold text-green-700 mb-4">Find By Number</h2>
      <p class="text-gray-600 mb-6">This page is active at the URL **'/find-by-number'**.</p>
      <button [routerLink]="['/search']" class="text-sm text-green-500 hover:text-green-700">
        ← Back to Search Options
      </button>
    </div>
  `
})
// CRITICAL FIX: The class MUST be exported so app.routes.ts can import it.
export class FindBnComponent {} 