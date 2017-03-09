var x,y,z,d,m,x0,cal,y_00,d_00,m_00,ymp0,y0;
var check=false;

function check_data() {    

check=true;

x=document.f.x.value;  //x...deg(%)
y=document.f.y.value;  //y...v(km/h)
z=document.f.z.value;  //z...time(min)
d=document.f.d.value;  //d...distance(km)
m=document.f.m.value;  //m...weight(kg)

if (x=="") { x=0 } ;
if (y=="") { y=0 } ;
if (z=="") { z=0 } ;
if (z != "" && z.indexOf(":") != -1) { 
	z = eval(z.substring(0,z.indexOf(":"))) + Math.round(100*eval((z.substring(z.indexOf(":")+1, z.length) / 60 )))/100;
}

if (d=="") { d=0 } ;
if (m=="") { m=0 } ;

x=eval(x);
y=eval(y);
z=eval(z);
d=eval(d);
m=eval(m);

if(x<-0.001){
	alert("Please input the gradient above 0.");
        check=false;
        document.f.x.focus();
	   }
if(y<0){
	alert("Please input the speed above 0.");
        check=false;
        document.f.y.focus();
	   }
if(z<0){
	alert("Please input the running-time(min) above 0.");
        check=false;
        document.f.z.focus();
	   }
if(d<0){
	alert("Please input the running-distance(Mile/Km) above 0.");
        check=false;
        document.f.d.focus();
	   }
if(m<0){
	alert("Please input the weigh(lbs/Kg) above 0.");
        check=false;
        document.f.m.focus();
	   }
if((d != 0)&&(z != 0)&&(y != 0)){
	alert("Speed, Time, and the Distance cannot be specified at the same time.");
        check=false;
        document.f.d.focus();
	   }


       if (check==true) { calc(); }
}

function toPace(x) {
	var y = Math.floor(x);
	var z = Math.round( (x-y)*60 );
	if (z < 10) 
		z = "0"+z;
  if (z == 60)
    {
      y++;
      z = "00";
    }
	return y + ":" + z;
}

function calc(){
//y=jpn :: y_00=eng
if (document.f.y000[0].checked){y_00=y;y=y*1.61;}else{y=y;y_00=y/1.61;}
if (document.f.d000[0].checked){d_00=d;d=d*1.61;}else{d=d;d_00=d/1.61;}
if (document.f.m000[0].checked){m_00=m;m=m*0.454;}else{m=m;m_00=m/0.454;}

if ((y == 0) && (z != 0)){y=d/z*60;y_00=y/1.61;}  //y...v(km/h)
if ((z == 0) && (y != 0)){z=d/y*60;}  //z...time(min)
if (d == 0){d=y*z/60;d_00=d/1.61;}  //d...distance(km)

// pace
p=toPace( eval(60/y) );
p_00=toPace( eval(60/y_00) );

y0=y+y*x*9/200;
ymp0=y_00+y_00*x*9/200;

z0=z;
d0=y0*z/60;
dm0=ymp0*z/60;

cal=(y0*1000/60+17.5)*z*m/1000 ;
fat=cal/7/2;
fatoz=fat/28.3495;
mets=cal/m/z*60;
kj=4.184*cal;
kw=kj/3600;

s100=360/y0;  		//100m for sec

m10k=Math.floor(600/y0);		//10K for min
s10k=((600/y0)-m10k)*60;


m21k=21.095*60/y0;	//Half for min

m21kh=Math.floor(m21k/60);
m21km=Math.floor(m21k-m21kh*60);
m21ks=((m21k-m21kh*60)-m21km)*60;

m42k=42.195*60/y0;	//Full for min
m42kh=Math.floor(m42k/60);
m42km=Math.floor(m42k-m42kh*60);
m42ks=((m42k-m42kh*60)-m42km)*60;

document.f.xx.value=Math.round(x*accuracy)/accuracy;
document.f.yymph.value=Math.round(y_00*accuracy)/accuracy;
document.f.yy.value=Math.round(y*accuracy)/accuracy;
document.f.zz.value=Math.round(z*accuracy)/accuracy;
document.f.ddm.value=Math.round(d_00*accuracy)/accuracy;
document.f.dd.value=Math.round(d*accuracy)/accuracy;
document.f.ymp0.value=Math.round(ymp0*accuracy)/accuracy;
document.f.y0.value=Math.round(y0*accuracy)/accuracy;
document.f.cal.value=Math.round(cal*accuracy)/accuracy;
document.f.z0.value=Math.round(z0*accuracy)/accuracy;
document.f.dm0.value=Math.round(dm0*accuracy)/accuracy;
document.f.d0.value=Math.round(d0*accuracy)/accuracy;
document.f.fatoz.value=Math.round(fatoz*accuracy)/accuracy;
document.f.fat.value=Math.round(fat*accuracy)/accuracy;
document.f.mets.value=Math.round(mets*accuracy)/accuracy;
document.f.vo2.value=Math.round(3.5*mets*accuracy)/accuracy
document.f.kw.value=Math.round(kw*accuracy)/accuracy;

document.f.ppm.value=p_00;
document.f.pp.value=p;
document.f.ppm0.value=toPace( 60/ymp0 );
document.f.pp0.value=toPace( 60/y0 );

document.f.s100.value=Math.round(s100*accuracy)/accuracy;
document.f.m10k.value=m10k;
document.f.s10k.value=Math.round(s10k*accuracy)/accuracy;
document.f.m21kh.value=m21kh;
document.f.m21km.value=m21km;
document.f.m21ks.value=Math.round(m21ks*accuracy)/accuracy;
document.f.m42kh.value=m42kh;
document.f.m42km.value=m42km;
document.f.m42ks.value=Math.round(m42ks*accuracy)/accuracy;
}

function getBGColour(pace)
{
  x = eval(pace.substring(0,1));
  
  if (x < 1)
    return "#c0c0c0"; // 
  if (x < 2)
    return "#ff0000"; // 
  if (x < 3)
    return "#ea9d38"; // 
  if (x < 4)
    return "#ffff00"; // 
  if (x < 5)
    return "#5aa03d"; // 
  if (x < 6)
    return "#657cce"; // 
  if (x < 7)
    return "#c458c4"; // 
  if (x < 8)
    return "#ce5c5c"; // 
  
	else 
    return "#ce5c5c";
}
