import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './review.html',
  styleUrls: ['./review.css']
})
export class ReviewComponent {
  username = '';
  review = '';
  reviews: { username: string; review: string }[] = [];

  addReview() {
    if (this.username && this.review) {
      this.reviews.push({ username: this.username, review: this.review });
      this.username = '';
      this.review = '';
    }
  }
}
