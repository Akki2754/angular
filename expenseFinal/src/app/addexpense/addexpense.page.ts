import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpensehistoryPage } from '../expensehistory/expensehistory';
import { ExpenseProvider } from '../../providers/expense/expense';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';


@IonicPage()
@Component({
  selector: 'page-addexpense',
  templateUrl: 'addexpense.html',
})
export class AddexpensePage {
  spendCate: any;
  addExpenseForm: FormGroup;
  public errorMessage: string; 

  constructor(public navCtrl: NavController,fb:FormBuilder,public navParams: NavParams ,public expenseProvider: ExpenseProvider) {
    this.addExpenseForm = fb.group({
      date: [
        "",
        Validators.compose([Validators.required])
      ],
      amount: [
        "",
        Validators.compose([Validators.required,Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")])
      ],
      category: [
        "",
        Validators.compose([Validators.required])
      ],
      desc: [
        "",
        Validators.compose([Validators.required])
      ],
      remark: [
        "",
        
      ]
        });

  }

  formatdmy(date) {

    date = new Date(date);

    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return day + '-' + month + '-' + year;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddexpensePage');
  }
  goToViewExpense(){
    this.navCtrl.setRoot(ExpensehistoryPage);
  }
  goToDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }
  goToExpenseHistory(){
    this.navCtrl.setRoot(ExpensehistoryPage);
  }
  createExpense(
    spendDate: string,
    spentAmt: number,
    spendDesc:string,
    spendRemark:string, 
    ):void {
      if(!this.addExpenseForm.valid){
        console.log("Invalid value ");
      }
      console.log("desc is " + spendDesc);
      if(spendDesc == null){
        spendDesc ="";
      }
      if(spendRemark == null){
        spendRemark = "";
      }
    
      spendDate = this.formatdmy(spendDate);
      this.expenseProvider
      .createExpense(spendDate,spentAmt,spendDesc,spendRemark,this.spendCate)
      .then(newExpense =>{
        this.goToViewExpense()
      });
    
  }

}