import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-findbr',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-xl max-w-lg mx-auto">
      <h2 class="text-3xl font-bold text-blue-700 mb-6">Find by Route</h2>

      <input [(ngModel)]="from" placeholder="Enter starting location"
        class="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />

      <input [(ngModel)]="to" placeholder="Enter destination"
        class="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />

      <button (click)="showMap()"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
        Search
      </button>

      <div *ngIf="mapVisible" class="mt-6 border border-gray-300 rounded-xl w-full h-64 flex items-center justify-center bg-gray-100">
        <p class="text-gray-600">🗺️ Showing route from <b>{{ from }}</b> to <b>{{ to }}</b></p>
      </div>
    </div>
  `
})
export class FindBrComponent {
  from = '';
  to = '';
  mapVisible = false;

  showMap() {
    if (this.from && this.to) {
      this.mapVisible = true;
    }
  }
}
