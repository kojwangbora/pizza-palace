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

    });
});

    