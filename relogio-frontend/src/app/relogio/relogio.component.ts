import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relogio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})

export class RelogioComponent implements OnInit {
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private intervalId!: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCountdown(): void {
    const targetDate = new Date('2024-01-01T00:00:00').getTime();

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      this.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
      this.hours = this.formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
  }
}