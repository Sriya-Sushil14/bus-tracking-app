import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-by-number',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-xl max-w-lg mx-auto">
      <h2 class="text-3xl font-bold text-green-700 mb-6">Find by Bus Number</h2>

      <input [(ngModel)]="busNumber" placeholder="Enter Bus Number"
        class="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400" />

      <button (click)="showInfo()"
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
        Search
      </button>

      <div *ngIf="infoVisible" class="mt-6 border border-gray-300 rounded-xl w-full h-64 flex items-center justify-center bg-gray-100">
        <p class="text-gray-600">🚌 Displaying route information for bus number <b>{{ busNumber }}</b></p>
      </div>
    </div>
  `
})
export class FindBnComponent {
  busNumber = '';
  infoVisible = false;

  showInfo() {
    if (this.busNumber) {
      this.infoVisible = true;
    }
  }
}
