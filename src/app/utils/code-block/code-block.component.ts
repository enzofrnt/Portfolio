import { Component, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-code-block',
  standalone: true,
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  imports: [HighlightModule, HighlightLineNumbers],
})
export class CodeBlockComponent {
  @Input() code = '';
}
