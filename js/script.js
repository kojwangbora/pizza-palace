var price, crustprice, toppingprice;
let totalprice=0;
function Getpizza(name, size, crust, topping, total ){
    this.name=name;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.totalprice=totalprice;
}


$(document).ready(function(){

    $("button.proceed").click(function(event){
        let pname= $(".name option:selected").val();
        let psize= $("#size option:selected").val();
        let pcrust=$("#crust option:selected").val();
        let ptopping=[];
        $.each($("input[name= 'toppings']:checked"), function(){
           ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        switch(psize){
            case "0":
                price=0;
            break;
            case "large":
                price= 1400;
                console.log(price);
            break;
            case "medium":
                price= 1000;
                console.log("pay"+price);
            break;
            case "small":
                price=800;
                console.log(price);
        default:
            console.log("error");

        }
        switch(pcrust){
            case "0":
                crustprice=0;
            break;
            case "Stuffed" :
                crustprice= 200;
            break;
            case "Crispy":
                crustprice=100;
            break;
            case "Gluten-free":
                crustprice= 150;
            break;
            default:
                console.log("price?");
        }
        let topping_value=ptopping.lenth*150;
        console.log("toppings value" + topping_value);

            if((psize=="0") && (pcrust=="0")){
                console.log("select options please");
                $("button.proceed").show();
                $("#information").show();
                $("div.choose").hide();
                alert("select crust and pizza flavor");
            }
            else{
                $("button.proceed").hide();
                $("#information").hide();
                $("div.choose").slideRight(1200);
            }
            totalprice = price+crustprice+topping_value;
            console.log(totalprice);
            let Checkouttotal =0;
            CheckoutTotal=CheckoutTotal+totalprice;

            $("#pizzaname").html($(".name option:selected").val());
            $("#pizzasize").html($("#size option:selected").val());
            $("#pizzacrust").html($("#crust option:selected").val());
            $("#pizztopping").html(ptopping.join(" ,"));
            $("#totals").html(totalprice);
// pizza button
        $("button.addPizza").click(function(){
            let pname= $(".name option:selected").val();
            let psize= $("#size option: selected").val();
            let pcrust=$("#crust option: selected").val();
            let ptopping=[];
            $.each($("input[name='toppings']:checked"), function(){
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(","));
            switch(psize){
                case "0":
                    price=0;

                break
                case "large":
                    price= 1400;
                    console.log(price);
                break;
                case "medium":
                    price= 1000;
                    console.log("pay"+price);
                break;
                case "small":
                price=800;
                console.log(price);
              default:
                console.log("error");

            }
            switch(pcrust){
                case "0":
                    crustprice=0;
                break;
                case "Stuffed" :
                    crustprice= 200;
                break;
                case "Crispy":
                    crustprice=100;
                break;
                case "Gluten-free":
                    crustprice= 150;
                break;
              default:
                    console.log("price?");
            }
                let topping_value=ptopping.length*150;
                console.log("toppins value" + topping_value);
                totalprice=price+crustprice+topping_value;
                console.log(totalprice);

                Checkouttotal=Checkouttotal+totalprice;
                console.log(Checkouttotal);
            var newOrder = new Getpizza(pname, psize, pcrust, ptopping, totalprice);
            $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
            console.log(newOrder);    
                
        });
        //Checkout
        $("button.checkout").click(function(){
            $("button#checkout").hide();
            $("button.addPizza").hide();
            $("button.deliver").slideRight(1200);
            $("#addedprice").slideRight(1200);
            console.log("total price amounts to Ksh."+ Checkouttotal);
            $("#pizzatotal").append("your expense is Ksh."+ Checkouttotal);
        });
        //delivery
        $("button.deliver").click(function(){
            $(".pizzatable").hide();
            $(".choose h2").hide();
            $(".delivery").slideDown(1000);
            $("#addedprice").hide();
            $("button.deliver").hide();
            $("#pizzatotal").hide();
            let deliveryamount= checkoutTotal+150;
            console.log("You will pay sh. "+deliceryamount+" on delivery");
            $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
          });
          //clicking the place button

        $("button#final-order").click(function(event){
            event.preventDefault();
            
          $("pizzatotal").hide();
          $(".delivery").hide();
          $("button#final-order").hide();
          let deliveryamount=checkoutTotal+150;
          console.log("pay Ksh."+ deliveryamount);
          let person = $("input#name").val();
          let phone = $("input#phone").val();
          let location = $("input#location").val();
          if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
              $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
              $("#totalbill").hide();
              $("#finallmessage").slideDown(1200);
            }
          else {
              alert("Please fill in the details for delivery!");
              $(".delivery").show();
              $("button#final-order").show();
            }
        });
      event.preventDefault();

    });
});

    