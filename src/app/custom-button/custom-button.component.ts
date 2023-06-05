import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { NotificationService } from '../toastr.service';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})

export class CustomButtonComponent implements OnChanges {
  isActive: boolean = false;

  constructor(private notify: NotificationService) {}

  @Input() text: string = ""
  @Input() name: string = ""
  @Input() id: string = ""
  @Input() selectedBtn!: string
  
  @Output() wasClicked = new EventEmitter<string>();
  
  handleClick() {
    this.notify.showSuccess(`${this.text} has been clicked`);
    this.wasClicked.emit(this.text)
  }

  ngOnChanges(changes: SimpleChanges) {
    const newSelectedBtn = changes["selectedBtn"].currentValue

    this.isActive = this.text === newSelectedBtn
  }
}
