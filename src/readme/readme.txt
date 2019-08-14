Readme:
-----------
1) The 'employee-input.component.ts' has a few @Input properties, which should be provided to this component whenever someone is invoking this component.
viz:
  @Input() name: string;
  @Input() age: number;
  @Input() hireDate: string;

2) The 'app.component.html' provides these inputs with the code below:-
<app-employee-input [age]="10" name="ankur" [hireDate]="today"></app-employee-input>


References:
---------------
1) https://matthewdavis.io/angular-components-input-output : THIS LINK IS NOT WORKING ANYMORE - DOWNLOAD PDF WHEN IT IS WORKING
2) https://angularman.wordpress.com/2017/08/10/input-and-output-in-angular/
