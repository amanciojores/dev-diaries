import { AfterContentInit, Component, Input, OnInit } from "@angular/core";
import { IGridCols } from "../../../../Interfaces/responsive/grid-cols.interface";
import { gridCols } from "../../../../Configs/defaultValues";

/**
 * Blog Collection
 *
 * Used for containing Blog Cards for organizing
 *
 * @example
 * <blog-collection>
 *   <blog-card></blog-card>
 * </blog-collection>
 *
 */
@Component({
  standalone: true,
  selector: "blog-collection",
  imports: [],
  template: ` <ng-content></ng-content> `,
  host: {
    "[class]": "classNames",
  },
})
export class BlogCollection implements OnInit {
  /**
   * Default value is xl: 4, lg: 3, md: 2, sm:1
   * @type {IGridCols}
   */
  @Input()
  /**
   * Can accept custom class values
   * @example
   * <blog-collection [customClass]="'p-5 rounded-sm'">...</blog-collection>
   */
  @Input()
  customClass: string = "";
  classNames: string = "";

  ngOnInit(): void {
    this.classNames = `grid gap-4 mt-7 ${this.customClass}`;
  }
}