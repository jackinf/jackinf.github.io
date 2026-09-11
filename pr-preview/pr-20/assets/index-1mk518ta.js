import{i,l,d}from"./index-fkp5y4tc.js";var Ah="184";var Rh=0,Vo=1,Ch=2;var Pi=1,Ih=2,Ms=3,pi=0,Vt=1,Kt=2,un=0,pr=1,Li=2,Wo=3,Xo=4,Ph=5;var Ss=100,Lh=101,Nh=102,Dh=103,Uh=104,Fh=200,Oh=201,Bh=202,zh=203,kh=204,Hh=205,Gh=206,Vh=207,Wh=208,Xh=209,qh=210,Yh=211,Zh=212,Kh=213,Jh=214,$h=0,jh=1,Qh=2,qo=3,eu=4,tu=5,nu=6,iu=7,su=0,ru=1,au=2,bn=0,mr=1,gr=2,_r=3,Ni=4,xr=5,vr=6,yr=7;var bs=301,Di=302,Ts=303,Ea=304,Mr=306,mi=1000,Es=1001,wa=1002,Jt=1003,Aa=1004;var Ui=1005;var Dt=1006,ws=1007;var In=1008;var Tn=1009,ou=1010,lu=1011,Sr=1012,Yo=1013,gi=1014,Zn=1015,Yt=1016,Zo=1017,Ko=1018,As=1020,cu=35902,hu=35899,uu=1021,du=1022,Pn=1023,Fi=1026,Oi=1027,fu=1028,Jo=1029,Bi=1030,$o=1031;var jo=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,Qo=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37488,ol=37489,La=37490,ll=37491,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Ml=37820,Sl=37821,bl=36492,Tl=36494,El=36495,wl=36283,Al=36284,Na=36285,Rl=36286;var Cl=2300,Da=2301;var Il=0,br=1,Rs=2;var Pl=0,pu=1,zi="",$t="srgb",rn="srgb-linear",Ll="linear",at="srgb";var mu=512,gu=513,_u=514,Ua=515,xu=516,vu=517,Fa=518,yu=519;var Nl="300 es",Dl=2000;function yf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Mf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Mu(){let e=vs("canvas");return e.style.display="block",e}var Vc={},ys=null;function fr(...e){let t="THREE."+e.shift();if(ys)ys("log",t,...e);else console.log(t,...e)}function Su(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ee(...e){e=Su(e);let t="THREE."+e.shift();if(ys)ys("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function De(...e){e=Su(e);let t="THREE."+e.shift();if(ys)ys("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function Sa(...e){let t=e.join(" ");if(t in Vc)return;Vc[t]=!0,Ee(...e)}function bu(e,t,n){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:s()}}setTimeout(a,n)})}var Tu={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Kn{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);if(r!==-1)s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}var Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,ur=Math.PI/180,Ci=180/Math.PI;function Sn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ht[e&255]+Ht[e>>8&255]+Ht[e>>16&255]+Ht[e>>24&255]+"-"+Ht[t&255]+Ht[t>>8&255]+"-"+Ht[t>>16&15|64]+Ht[t>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]).toLowerCase()}function Je(e,t,n){return Math.max(t,Math.min(n,e))}function Ul(e,t){return(e%t+t)%t}function Sf(e,t,n,s,r){return s+(e-t)*(r-s)/(n-t)}function bf(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function dr(e,t,n){return(1-n)*e+n*t}function Tf(e,t,n,s){return dr(e,t,1-Math.exp(-n*s))}function Ef(e,t=1){return t-Math.abs(Ul(e,t*2)-t)}function wf(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function Af(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function Rf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Cf(e,t){return e+Math.random()*(t-e)}function If(e){return e*(0.5-Math.random())}function Pf(e){if(e!==void 0)Wc=e;let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lf(e){return e*ur}function Nf(e){return e*Ci}function Df(e){return(e&e-1)===0&&e!==0}function Uf(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Ff(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Of(e,t,n,s,r){let{cos:a,sin:o}=Math,c=a(n/2),h=o(n/2),u=a((t+s)/2),f=o((t+s)/2),m=a((t-s)/2),p=o((t-s)/2),_=a((s-t)/2),v=o((s-t)/2);switch(r){case"XYX":e.set(c*f,h*m,h*p,c*u);break;case"YZY":e.set(h*p,c*f,h*m,c*u);break;case"ZXZ":e.set(h*m,h*p,c*f,c*u);break;case"XZX":e.set(c*f,h*v,h*_,c*u);break;case"YXY":e.set(h*_,c*f,h*v,c*u);break;case"ZYZ":e.set(h*v,h*_,c*f,c*u);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("Invalid component type.")}}var Cs={DEG2RAD:ur,RAD2DEG:Ci,generateUUID:Sn,clamp:Je,euclideanModulo:Ul,mapLinear:Sf,inverseLerp:bf,lerp:dr,damp:Tf,pingpong:Ef,smoothstep:wf,smootherstep:Af,randInt:Rf,randFloat:Cf,randFloatSpread:If,seededRandom:Pf,degToRad:Lf,radToDeg:Nf,isPowerOfTwo:Df,ceilPowerOfTwo:Uf,floorPowerOfTwo:Ff,setQuaternionFromProperEuler:Of,normalize:rt,denormalize:Mn};class Se{static{Se.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],m=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(f!==v||c!==m||h!==p||u!==_){let M=c*m+h*p+u*_+f*v;if(M<0)m=-m,p=-p,_=-_,v=-v,M=-M;let g=1-o;if(M<0.9995){let x=Math.acos(M),T=Math.sin(x);g=Math.sin(g*x)/T,o=Math.sin(o*x)/T,c=c*g+m*o,h=h*g+p*o,u=u*g+_*o,f=f*g+v*o}else{c=c*g+m*o,h=h*g+p*o,u=u*g+_*o,f=f*g+v*o;let x=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=x,h*=x,u*=x,f*=x}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a],m=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+c*p-h*m,e[t+1]=c*_+u*m+h*f-o*p,e[t+2]=h*_+u*p+o*m-c*f,e[t+3]=u*_-o*f-c*m-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:s,_z:r,_order:a}=e,{cos:o,sin:c}=Math,h=o(n/2),u=o(s/2),f=o(r/2),m=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=m*u*f+h*p*_,this._y=h*p*f-m*u*_,this._z=h*u*_+m*p*f,this._w=h*u*f-m*p*_;break;case"YXZ":this._x=m*u*f+h*p*_,this._y=h*p*f-m*u*_,this._z=h*u*_-m*p*f,this._w=h*u*f+m*p*_;break;case"ZXY":this._x=m*u*f-h*p*_,this._y=h*p*f+m*u*_,this._z=h*u*_+m*p*f,this._w=h*u*f-m*p*_;break;case"ZYX":this._x=m*u*f-h*p*_,this._y=h*p*f+m*u*_,this._z=h*u*_-m*p*f,this._w=h*u*f+m*p*_;break;case"YZX":this._x=m*u*f+h*p*_,this._y=h*p*f+m*u*_,this._z=h*u*_-m*p*f,this._w=h*u*f-m*p*_;break;case"XZY":this._x=m*u*f-h*p*_,this._y=h*p*f-m*u*_,this._z=h*u*_+m*p*f,this._w=h*u*f+m*p*_;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],f=t[10],m=n+o+f;if(m>0){let p=0.5/Math.sqrt(m+1);this._w=0.25/p,this._x=(u-c)*p,this._y=(r-h)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=0.25*p,this._y=(s+a)/p,this._z=(r+h)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-h)/p,this._x=(s+a)/p,this._y=0.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+h)/p,this._y=(c+u)/p,this._z=0.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:s,_z:r,_w:a}=e,{_x:o,_y:c,_z:h,_w:u}=t;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:s,_z:r,_w:a}=e,o=this.dot(e);if(o<0)n=-n,s=-s,r=-r,a=-a,o=-o;let c=1-t;if(o<0.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,t=Math.sin(t*h)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{static{N.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,{x:r,y:a,z:o,w:c}=e,h=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*h+a*f-o*u,this.y=n+c*u+o*h-r*f,this.z=s+c*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:s,z:r}=e,{x:a,y:o,z:c}=t;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var mo=new N,Xc=new dn;class Fe{static{Fe.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,h){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],f=n[7],m=n[2],p=n[5],_=n[8],v=s[0],M=s[3],g=s[6],x=s[1],T=s[4],E=s[7],w=s[2],L=s[5],I=s[8];return r[0]=a*v+o*x+c*w,r[3]=a*M+o*T+c*L,r[6]=a*g+o*E+c*I,r[1]=h*v+u*x+f*w,r[4]=h*M+u*T+f*L,r[7]=h*g+u*E+f*I,r[2]=m*v+p*x+_*w,r[5]=m*M+p*T+_*L,r[8]=m*g+p*E+_*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=u*a-o*h,m=o*c-u*r,p=h*r-a*c,_=t*f+n*m+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=f*v,e[1]=(s*h-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=m*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-h*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var go=new Fe,qc=new Fe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Yc=new Fe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Bf(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,a,o){if(this.enabled===!1||a===o||!a||!o)return r;if(this.spaces[a].transfer==="srgb")r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b);if(this.spaces[a].primaries!==this.spaces[o].primaries)r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b);return r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){if(r==="")return"linear";return this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],s=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:s,transfer:"linear",toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:s,transfer:"srgb",toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var Ge=Bf();function Wn(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function xs(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var es;class Fl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(es===void 0)es=vs("canvas");es.width=e.width,es.height=e.height;let s=es.getContext("2d");if(e instanceof ImageData)s.putImageData(e,0,0);else s.drawImage(e,0,0,e.width,e.height);n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(Wn(t[n]/255)*255);else t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var zf=0;class Tr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)if(s[a].isDataTexture)r.push(_o(s[a].image));else r.push(_o(s[a]))}else r=_o(s);n.url=r}if(!t)e.images[this.uuid]=n;return n}}function _o(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Fl.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return Ee("Texture: Unable to serialize Texture."),{}}var kf=0,xo=new N;class bt extends Kn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,c=1009,h=bt.DEFAULT_ANISOTROPY,u=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Sn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}if(s&&n&&(s.isVector2&&n.isVector2))s.copy(n);else if(s&&n&&(s.isVector3&&n.isVector3))s.copy(n);else if(s&&n&&(s.isMatrix3&&n.isMatrix3))s.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=300;bt.DEFAULT_ANISOTROPY=1;class ct{static{ct.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,a=0.01,o=0.1,c=e.elements,h=c[0],u=c[4],f=c[8],m=c[1],p=c[5],_=c[9],v=c[2],M=c[6],g=c[10];if(Math.abs(u-m)<0.01&&Math.abs(f-v)<0.01&&Math.abs(_-M)<0.01){if(Math.abs(u+m)<0.1&&Math.abs(f+v)<0.1&&Math.abs(_+M)<0.1&&Math.abs(h+p+g-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(h+1)/2,E=(p+1)/2,w=(g+1)/2,L=(u+m)/4,I=(f+v)/4,P=(_+M)/4;if(T>E&&T>w)if(T<0.01)n=0,s=0.707106781,r=0.707106781;else n=Math.sqrt(T),s=L/n,r=I/n;else if(E>w)if(E<0.01)n=0.707106781,s=0,r=0.707106781;else s=Math.sqrt(E),n=L/s,r=P/s;else if(w<0.01)n=0.707106781,s=0.707106781,r=0;else r=Math.sqrt(w),n=I/r,s=P/r;return this.set(n,s,r,t),this}let x=Math.sqrt((M-_)*(M-_)+(f-v)*(f-v)+(m-u)*(m-u));if(Math.abs(x)<0.001)x=1;return this.x=(M-_)/x,this.y=(f-v)/x,this.z=(m-u)/x,this.w=Math.acos((h+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ol extends Kn{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new bt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(e!==null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)if(this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0)this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null)this.depthTexture=e.depthTexture.clone();return this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ut extends Ol{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class Oa extends bt{constructor(e=null,t=1,n=1,s=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bl extends bt{constructor(e=null,t=1,n=1,s=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{static{Oe.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,h,u,f,m,p,_,v,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,s,r,a,o,c,h,u,f,m,p,_,v,M)}set(e,t,n,s,r,a,o,c,h,u,f,m,p,_,v,M){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=h,g[6]=u,g[10]=f,g[14]=m,g[3]=p,g[7]=_,g[11]=v,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinant()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:s,z:r}=e,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=a*u,p=a*f,_=o*u,v=o*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=p+_*h,t[5]=m-v*h,t[9]=-o*c,t[2]=v-m*h,t[6]=_+p*h,t[10]=a*c}else if(e.order==="YXZ"){let m=c*u,p=c*f,_=h*u,v=h*f;t[0]=m+v*o,t[4]=_*o-p,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+m*o,t[10]=a*c}else if(e.order==="ZXY"){let m=c*u,p=c*f,_=h*u,v=h*f;t[0]=m-v*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-m*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let m=a*u,p=a*f,_=o*u,v=o*f;t[0]=c*u,t[4]=_*h-p,t[8]=m*h+v,t[1]=c*f,t[5]=v*h+m,t[9]=p*h-_,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let m=a*c,p=a*h,_=o*c,v=o*h;t[0]=c*u,t[4]=v-m*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=p*f+_,t[10]=m-v*f}else if(e.order==="XZY"){let m=a*c,p=a*h,_=o*c,v=o*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=m*f+v,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=v*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Gf)}lookAt(e,t,n){let s=this.elements;if(tn.subVectors(e,t),tn.lengthSq()===0)tn.z=1;if(tn.normalize(),oi.crossVectors(n,tn),oi.lengthSq()===0){if(Math.abs(n.z)===1)tn.x+=0.0001;else tn.z+=0.0001;tn.normalize(),oi.crossVectors(n,tn)}return oi.normalize(),Yr.crossVectors(tn,oi),s[0]=oi.x,s[4]=Yr.x,s[8]=tn.x,s[1]=oi.y,s[5]=Yr.y,s[9]=tn.y,s[2]=oi.z,s[6]=Yr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],f=n[5],m=n[9],p=n[13],_=n[2],v=n[6],M=n[10],g=n[14],x=n[3],T=n[7],E=n[11],w=n[15],L=s[0],I=s[4],P=s[8],S=s[12],R=s[1],H=s[5],C=s[9],W=s[13],Z=s[2],O=s[6],q=s[10],G=s[14],X=s[3],ee=s[7],re=s[11],_e=s[15];return r[0]=a*L+o*R+c*Z+h*X,r[4]=a*I+o*H+c*O+h*ee,r[8]=a*P+o*C+c*q+h*re,r[12]=a*S+o*W+c*G+h*_e,r[1]=u*L+f*R+m*Z+p*X,r[5]=u*I+f*H+m*O+p*ee,r[9]=u*P+f*C+m*q+p*re,r[13]=u*S+f*W+m*G+p*_e,r[2]=_*L+v*R+M*Z+g*X,r[6]=_*I+v*H+M*O+g*ee,r[10]=_*P+v*C+M*q+g*re,r[14]=_*S+v*W+M*G+g*_e,r[3]=x*L+T*R+E*Z+w*X,r[7]=x*I+T*H+E*O+w*ee,r[11]=x*P+T*C+E*q+w*re,r[15]=x*S+T*W+E*G+w*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],f=e[6],m=e[10],p=e[14],_=e[3],v=e[7],M=e[11],g=e[15],x=c*p-h*m,T=o*p-h*f,E=o*m-c*f,w=a*p-h*u,L=a*m-c*u,I=a*f-o*u;return t*(v*x-M*T+g*E)-n*(_*x-M*w+g*L)+s*(_*T-v*w+g*I)-r*(_*E-v*L+M*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;if(e.isVector3)s[12]=e.x,s[13]=e.y,s[14]=e.z;else s[12]=e,s[13]=t,s[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=e[9],m=e[10],p=e[11],_=e[12],v=e[13],M=e[14],g=e[15],x=t*o-n*a,T=t*c-s*a,E=t*h-r*a,w=n*c-s*o,L=n*h-r*o,I=s*h-r*c,P=u*v-f*_,S=u*M-m*_,R=u*g-p*_,H=f*M-m*v,C=f*g-p*v,W=m*g-p*M,Z=x*W-T*C+E*H+w*R-L*S+I*P;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/Z;return e[0]=(o*W-c*C+h*H)*O,e[1]=(s*C-n*W-r*H)*O,e[2]=(v*I-M*L+g*w)*O,e[3]=(m*L-f*I-p*w)*O,e[4]=(c*R-a*W-h*S)*O,e[5]=(t*W-s*R+r*S)*O,e[6]=(M*E-_*I-g*T)*O,e[7]=(u*I-m*E+p*T)*O,e[8]=(a*C-o*R+h*P)*O,e[9]=(n*R-t*C-r*P)*O,e[10]=(_*L-v*E+g*x)*O,e[11]=(f*E-u*L-p*x)*O,e[12]=(o*S-a*H-c*P)*O,e[13]=(t*H-n*S+s*P)*O,e[14]=(v*T-_*w-M*x)*O,e[15]=(u*w-f*T+m*x)*O,this}scale(e){let t=this.elements,{x:n,y:s,z:r}=e;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,{x:a,y:o,z:c}=e,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,{_x:r,_y:a,_z:o,_w:c}=t,h=r+r,u=a+a,f=o+o,m=r*h,p=r*u,_=r*f,v=a*u,M=a*f,g=o*f,x=c*h,T=c*u,E=c*f,{x:w,y:L,z:I}=n;return s[0]=(1-(v+g))*w,s[1]=(p+E)*w,s[2]=(_-T)*w,s[3]=0,s[4]=(p-E)*L,s[5]=(1-(m+g))*L,s[6]=(M+x)*L,s[7]=0,s[8]=(_+T)*I,s[9]=(M-x)*I,s[10]=(1-(m+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),c=ts.set(s[8],s[9],s[10]).length();if(r<0)a=-a;xn.copy(this);let h=1/a,u=1/o,f=1/c;return xn.elements[0]*=h,xn.elements[1]*=h,xn.elements[2]*=h,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=2000,c=!1){let h=this.elements,u=2*r/(t-e),f=2*r/(n-s),m=(t+e)/(t-e),p=(n+s)/(n-s),_,v;if(c)_=r/(a-r),v=a*r/(a-r);else if(o===2000)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===2001)_=-a/(a-r),v=-a*r/(a-r);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=f,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=2000,c=!1){let h=this.elements,u=2/(t-e),f=2/(n-s),m=-(t+e)/(t-e),p=-(n+s)/(n-s),_,v;if(c)_=1/(a-r),v=a/(a-r);else if(o===2000)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===2001)_=-1/(a-r),v=-r/(a-r);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=f,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=_,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var ts=new N,xn=new Oe,Hf=new N(0,0,0),Gf=new N(1,1,1),oi=new N,Yr=new N,tn=new N,Zc=new Oe,Kc=new dn;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":if(this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r);else this._x=Math.atan2(m,h),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(o,p),this._z=Math.atan2(c,h);else this._y=Math.atan2(-f,r),this._z=0;break;case"ZXY":if(this._x=Math.asin(Je(m,-1,1)),Math.abs(m)<0.9999999)this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,h);else this._y=0,this._z=Math.atan2(c,r);break;case"ZYX":if(this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<0.9999999)this._x=Math.atan2(m,p),this._z=Math.atan2(c,r);else this._x=0,this._z=Math.atan2(-a,h);break;case"YZX":if(this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<0.9999999)this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r);else this._x=0,this._y=Math.atan2(o,p);break;case"XZY":if(this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(m,h),this._y=Math.atan2(o,r);else this._x=Math.atan2(-u,p),this._y=0;break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var Vf=0,Jc=new N,ns=new dn,On=new Oe,Zr=new N,er=new N,Wf=new N,Xf=new dn,$c=new N(1,0,0),jc=new N(0,1,0),Qc=new N(0,0,1),eh={type:"added"},qf={type:"removed"},is={type:"childadded",child:null},vo={type:"childremoved",child:null};class pt extends Kn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();let e=new N,t=new Xn,n=new dn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Fe}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Jc.copy(e).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Zr.copy(e);else Zr.set(e,t,n);let s=this.parent;if(this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)On.lookAt(er,Zr,this.up);else On.lookAt(Zr,er,this.up);if(this.quaternion.setFromRotationMatrix(On),s)On.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(On),this.quaternion.premultiply(ns.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return De("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),is.child=e,this.dispatchEvent(is),is.child=null;else De("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),vo.child=e,this.dispatchEvent(vo),vo.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld);return e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:s}=e,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let s={};if(s.uuid=this.uuid,s.type=this.type,this.name!=="")s.name=this.name;if(this.castShadow===!0)s.castShadow=!0;if(this.receiveShadow===!0)s.receiveShadow=!0;if(this.visible===!1)s.visible=!1;if(this.frustumCulled===!1)s.frustumCulled=!1;if(this.renderOrder!==0)s.renderOrder=this.renderOrder;if(this.static!==!1)s.static=this.static;if(Object.keys(this.userData).length>0)s.userData=this.userData;if(s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null)s.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)s.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)s.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)s.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map((o)=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)s.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)s.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)s.boundingBox=this.boundingBox.toJSON()}function r(o,c){if(o[c.uuid]===void 0)o[c.uuid]=c.toJSON(e);return c.uuid}if(this.isScene){if(this.background){if(this.background.isColor)s.background=this.background.toJSON();else if(this.background.isTexture)s.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)s.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh){if(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),m=a(e.skeletons),p=a(e.animations),_=a(e.nodes);if(o.length>0)n.geometries=o;if(c.length>0)n.materials=c;if(h.length>0)n.textures=h;if(u.length>0)n.images=u;if(f.length>0)n.shapes=f;if(m.length>0)n.skeletons=m;if(p.length>0)n.animations=p;if(_.length>0)n.nodes=_}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vt extends pt{constructor(){super();this.isGroup=!0,this.type="Group"}}var Yf={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let v of e.hand.values()){let M=t.getJointPose(v,n),g=this._getHandJoint(h,v);if(M!==null)g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius;g.visible=M!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=u.position.distanceTo(f.position),p=0.02,_=0.005;if(h.inputState.pinching&&m>p+_)h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!h.inputState.pinching&&m<=p-_)h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(c!==null&&e.gripSpace){if(r=t.getPose(e.gripSpace,n),r!==null){if(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity)c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity);else c.hasLinearVelocity=!1;if(r.angularVelocity)c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity);else c.hasAngularVelocity=!1;if(c.eventsEnabled)c.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null)s=r;if(s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(Yf)}}}if(o!==null)o.visible=s!==null;if(c!==null)c.visible=r!==null;if(h!==null)h.visible=a!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function yo(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;if(s&&s.isColor)this.copy(s);else if(typeof s==="number")this.setHex(s);else if(typeof s==="string")this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=Ul(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=0.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yo(a,r,e+0.3333333333333333),this.g=yo(a,r,e),this.b=yo(a,r,e-0.3333333333333333)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t="srgb"){function n(r){if(r===void 0)return;if(parseFloat(r)<1)Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);else if(a===6)return this.setHex(parseInt(r,16),t);else Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=Eu[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else Ee("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Ge.workingToColorSpace(Gt.copy(this),e),Math.round(Je(Gt.r*255,0,255))*65536+Math.round(Je(Gt.g*255,0,255))*256+Math.round(Je(Gt.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Gt.copy(this),t);let{r:n,g:s,b:r}=Gt,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let f=a-o;switch(h=u<=0.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e="srgb"){Ge.workingToColorSpace(Gt.copy(this),e);let{r:t,g:n,b:s}=Gt;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Kr);let n=dr(li.h,Kr.h,t),s=dr(li.s,Kr.s,t),r=dr(li.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Gt=new we;we.NAMES=Eu;class wr{constructor(e,t=1,n=1000){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new wr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class za extends pt{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)t.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)t.object.backgroundIntensity=this.backgroundIntensity;if(t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)t.object.environmentIntensity=this.environmentIntensity;return t.object.environmentRotation=this.environmentRotation.toArray(),t}}var vn=new N,Bn=new N,Mo=new N,zn=new N,ss=new N,rs=new N,th=new N,So=new N,bo=new N,To=new N,Eo=new ct,wo=new ct,Ao=new ct;class sn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();if(r>0)return s.multiplyScalar(1/Math.sqrt(r));return s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vn.subVectors(s,t),Bn.subVectors(n,t),Mo.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(Bn),c=vn.dot(Mo),h=Bn.dot(Bn),u=Bn.dot(Mo),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let m=1/f,p=(h*c-o*u)*m,_=(a*u-o*c)*m;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){if(this.getBarycoord(e,t,n,s,zn)===null)return!1;return zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){if(this.getBarycoord(e,t,n,s,zn)===null){if(c.x=0,c.y=0,"z"in c)c.z=0;if("w"in c)c.w=0;return null}return c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c}static getInterpolatedAttribute(e,t,n,s,r,a){return Eo.setScalar(0),wo.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(wo,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),Bn.subVectors(e,t),vn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ss.subVectors(s,n),rs.subVectors(r,n),So.subVectors(e,n);let c=ss.dot(So),h=rs.dot(So);if(c<=0&&h<=0)return t.copy(n);bo.subVectors(e,s);let u=ss.dot(bo),f=rs.dot(bo);if(u>=0&&f<=u)return t.copy(s);let m=c*f-u*h;if(m<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ss,a);To.subVectors(e,r);let p=ss.dot(To),_=rs.dot(To);if(_>=0&&p<=_)return t.copy(r);let v=p*h-c*_;if(v<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(n).addScaledVector(rs,o);let M=u*_-p*f;if(M<=0&&f-u>=0&&p-_>=0)return th.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(th,o);let g=1/(M+v+m);return a=v*g,o=m*g,t.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ft{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++){if(e.isMesh===!0)e.getVertexPosition(a,yn);else yn.fromBufferAttribute(r,a);yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Jr.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Jr.copy(n.boundingBox)}Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),$r.subVectors(this.max,tr),as.subVectors(e.a,tr),os.subVectors(e.b,tr),ls.subVectors(e.c,tr),ci.subVectors(os,as),hi.subVectors(ls,os),Ei.subVectors(as,ls);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ei.y,Ei.x,0];if(!Ro(t,as,os,ls,$r))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Ro(t,as,os,ls,$r))return!1;return jr.crossVectors(ci,hi),t=[jr.x,jr.y,jr.z],Ro(t,as,os,ls,$r)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(yn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var kn=[new N,new N,new N,new N,new N,new N,new N,new N],yn=new N,Jr=new Ft,as=new N,os=new N,ls=new N,ci=new N,hi=new N,Ei=new N,tr=new N,$r=new N,jr=new N,wi=new N;function Ro(e,t,n,s,r){for(let a=0,o=e.length-3;a<=o;a+=3){wi.fromArray(e,a);let c=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),h=t.dot(wi),u=n.dot(wi),f=s.dot(wi);if(Math.max(-Math.max(h,u,f),Math.min(h,u,f))>c)return!1}return!0}var Rt=new N,Qr=new Se,Zf=0;class Tt extends Kn{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=Mn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=rt(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=Mn(t,this.array);return t}setX(e,t){if(this.normalized)t=rt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=Mn(t,this.array);return t}setY(e,t){if(this.normalized)t=rt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=Mn(t,this.array);return t}setZ(e,t){if(this.normalized)t=rt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=Mn(t,this.array);return t}setW(e,t){if(this.normalized)t=rt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=rt(t,this.array),n=rt(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){if(e*=this.itemSize,this.normalized)t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){if(e*=this.itemSize,this.normalized)t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")e.name=this.name;if(this.usage!==35044)e.usage=this.usage;return e}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ha extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Kf=new Ft,nr=new N,Co=new N;class an{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Kf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*0.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Co)),this.expandByPoint(nr.copy(e.center).sub(Co));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Jf=0,hn=new Oe,Io=new pt,cs=new N,nn=new Ft,ir=new Ft,Nt=new N;class _t extends Kn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((yf(e))?Ha:ka)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;if(s!==void 0)s.transformDirection(e),s.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}if(e.length>t.count)Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Ft;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];if(nn.setFromBufferAttribute(r),this.morphTargetsRelative)Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt);else this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new an;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];if(ir.setFromBufferAttribute(o),this.morphTargetsRelative)Nt.addVectors(nn.min,ir.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,ir.max),nn.expandByPoint(Nt);else nn.expandByPoint(ir.min),nn.expandByPoint(ir.max)}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++){if(Nt.fromBufferAttribute(o,h),c)cs.fromBufferAttribute(e,h),Nt.add(cs);s=Math.max(s,n.distanceToSquared(Nt))}}if(this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius))De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:s,uv:r}=t;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;let h=new N,u=new N,f=new N,m=new Se,p=new Se,_=new Se,v=new N,M=new N;function g(P,S,R){h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,R),m.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,R),u.sub(h),f.sub(h),p.sub(m),_.sub(m);let H=1/(p.x*_.y-_.x*p.y);if(!isFinite(H))return;v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(H),M.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(H),o[P].add(v),o[S].add(v),o[R].add(v),c[P].add(M),c[S].add(M),c[R].add(M)}let x=this.groups;if(x.length===0)x=[{start:0,count:e.count}];for(let P=0,S=x.length;P<S;++P){let R=x[P],{start:H,count:C}=R;for(let W=H,Z=H+C;W<Z;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let T=new N,E=new N,w=new N,L=new N;function I(P){w.fromBufferAttribute(s,P),L.copy(w);let S=o[P];T.copy(S),T.sub(w.multiplyScalar(w.dot(S))).normalize(),E.crossVectors(L,S);let H=E.dot(c[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,H)}for(let P=0,S=x.length;P<S;++P){let R=x[P],{start:H,count:C}=R;for(let W=H,Z=H+C;W<Z;W+=3)I(e.getX(W+0)),I(e.getX(W+1)),I(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,h=new N,u=new N,f=new N;if(e)for(let m=0,p=e.count;m<p;m+=3){let _=e.getX(m+0),v=e.getX(m+1),M=e.getX(m+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,M),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),o.add(u),c.add(u),h.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(M,h.x,h.y,h.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let{array:h,itemSize:u,normalized:f}=o,m=new h.constructor(c.length*u),p=0,_=0;for(let v=0,M=c.length;v<M;v++){if(o.isInterleavedBufferAttribute)p=c[v]*o.data.stride+o.offset;else p=c[v]*u;for(let g=0;g<u;g++)m[_++]=h[p++]}return new Tt(m,u,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new _t,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let m=h[u],p=e(m,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!=="")e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0){let c=this.parameters;for(let h in c)if(c[h]!==void 0)e[h]=c[h];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let f=0,m=h.length;f<m;f++){let p=h[f];u.push(p.toJSON(e.data))}if(u.length>0)s[c]=u,r=!0}if(r)e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;if(a.length>0)e.data.groups=JSON.parse(JSON.stringify(a));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],f=r[h];for(let m=0,p=f.length;m<p;m++)u.push(f[m].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let c=e.boundingSphere;if(c!==null)this.boundingSphere=c.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Sn();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Sn();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var qt=new N;class fi{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=Mn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=rt(n,this.array);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=rt(t,this.array);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=rt(t,this.array);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=rt(t,this.array);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=rt(t,this.array);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=Mn(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=Mn(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=Mn(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=Mn(t,this.array);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=rt(t,this.array),n=rt(n,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){if(e=e*this.data.stride+this.offset,this.normalized)t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){if(e=e*this.data.stride+this.offset,this.normalized)t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new fi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var $f=0;class jt extends Kn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(s&&s.isColor)s.set(n);else if(s&&s.isVector3&&(n&&n.isVector3))s.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.allowOverride===!1)n.allowOverride=!1;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);if(r.length>0)n.textures=r;if(a.length>0)n.images=a}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class ki extends jt{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var hs,sr=new N,us=new N,ds=new N,fs=new Se,rr=new Se,wu=new Oe,ea=new N,ar=new N,ta=new N,nh=new Se,Po=new Se,ih=new Se;class Ps extends pt{constructor(e=new ki){super();if(this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new _t;let t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Is(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new fi(n,3,0,!1)),hs.setAttribute("uv",new fi(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new Se(0.5,0.5),this.count=1}raycast(e,t){if(e.camera===null)De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(us.setFromMatrixScale(this.matrixWorld),wu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)us.multiplyScalar(-ds.z);let n=this.material.rotation,s,r;if(n!==0)r=Math.cos(n),s=Math.sin(n);let a=this.center;na(ea.set(-0.5,-0.5,0),ds,a,us,s,r),na(ar.set(0.5,-0.5,0),ds,a,us,s,r),na(ta.set(0.5,0.5,0),ds,a,us,s,r),nh.set(0,0),Po.set(1,0),ih.set(1,1);let o=e.ray.intersectTriangle(ea,ar,ta,!1,sr);if(o===null){if(na(ar.set(-0.5,0.5,0),ds,a,us,s,r),Po.set(0,1),o=e.ray.intersectTriangle(ea,ta,ar,!1,sr),o===null)return}let c=e.ray.origin.distanceTo(sr);if(c<e.near||c>e.far)return;t.push({distance:c,point:sr.clone(),uv:sn.getInterpolation(sr,ea,ar,ta,nh,Po,ih,new Se),face:null,object:this})}copy(e,t){if(super.copy(e,t),e.center!==void 0)this.center.copy(e.center);return this.material=e.material,this}}function na(e,t,n,s,r,a){if(fs.subVectors(e,n).addScalar(0.5).multiply(s),r!==void 0)rr.x=a*fs.x-r*fs.y,rr.y=r*fs.x+a*fs.y;else rr.copy(fs);e.copy(t),e.x+=rr.x,e.y+=rr.y,e.applyMatrix4(wu)}var Hn=new N,Lo=new N,ia=new N,ui=new N,No=new N,sa=new N,Do=new N;class Ls{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e)}distanceSqToSegment(e,t,n,s){Lo.copy(e).add(t).multiplyScalar(0.5),ia.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Lo);let r=e.distanceTo(t)*0.5,a=-this.direction.dot(ia),o=ui.dot(this.direction),c=-ui.dot(ia),h=ui.lengthSq(),u=Math.abs(1-a*a),f,m,p,_;if(u>0)if(f=a*c-o,m=a*o-c,_=r*u,f>=0)if(m>=-_)if(m<=_){let v=1/u;f*=v,m*=v,p=f*(f+a*m+2*o)+m*(a*f+m+2*c)+h}else m=r,f=Math.max(0,-(a*m+o)),p=-f*f+m*(m+2*c)+h;else m=-r,f=Math.max(0,-(a*m+o)),p=-f*f+m*(m+2*c)+h;else if(m<=-_)f=Math.max(0,-(-a*r+o)),m=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+m*(m+2*c)+h;else if(m<=_)f=0,m=Math.min(Math.max(-r,-c),r),p=m*(m+2*c)+h;else f=Math.max(0,-(a*r+o)),m=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+m*(m+2*c)+h;else m=a>0?-r:r,f=Math.max(0,-(a*m+o)),p=-f*f+m*(m+2*c)+h;if(n)n.copy(this.origin).addScaledVector(this.direction,f);if(s)s.copy(Lo).addScaledVector(ia,m);return p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;if(c<0)return null;if(o<0)return this.at(c,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;if(h>=0)n=(e.min.x-m.x)*h,s=(e.max.x-m.x)*h;else n=(e.max.x-m.x)*h,s=(e.min.x-m.x)*h;if(u>=0)r=(e.min.y-m.y)*u,a=(e.max.y-m.y)*u;else r=(e.max.y-m.y)*u,a=(e.min.y-m.y)*u;if(n>a||r>s)return null;if(r>n||isNaN(n))n=r;if(a<s||isNaN(s))s=a;if(f>=0)o=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f;else o=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f;if(n>c||o>s)return null;if(o>n||n!==n)n=o;if(c<s||s!==s)s=c;if(s<0)return null;return this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){No.subVectors(t,e),sa.subVectors(n,e),Do.crossVectors(No,sa);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,e);let c=o*this.direction.dot(sa.crossVectors(ui,sa));if(c<0)return null;let h=o*this.direction.dot(No.cross(ui));if(h<0)return null;if(c+h>a)return null;let u=-o*ui.dot(Do);if(u<0)return null;return this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt extends jt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var sh=new Oe,Ai=new Ls,ra=new an,rh=new N,aa=new N,oa=new N,la=new N,Uo=new N,ca=new N,ah=new N,ha=new N;class Be extends pt{constructor(e=new _t,t=new Bt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],f=r[c];if(u===0)continue;if(Uo.fromBufferAttribute(f,e),a)ca.addScaledVector(Uo,u);else ca.addScaledVector(Uo.sub(t),u)}t.add(ca)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(ra.copy(n.boundingSphere),ra.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),ra.containsPoint(Ai.origin)===!1){if(Ai.intersectSphere(ra,rh)===null)return;if(Ai.origin.distanceToSquared(rh)>(e.far-e.near)**2)return}if(sh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(sh),n.boundingBox!==null){if(Ai.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Ai)}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,{groups:m,drawRange:p}=r;if(o!==null)if(Array.isArray(a))for(let _=0,v=m.length;_<v;_++){let M=m[_],g=a[M.materialIndex],x=Math.max(M.start,p.start),T=Math.min(o.count,Math.min(M.start+M.count,p.start+p.count));for(let E=x,w=T;E<w;E+=3){let L=o.getX(E),I=o.getX(E+1),P=o.getX(E+2);if(s=ua(this,g,e,n,h,u,f,L,I,P),s)s.faceIndex=Math.floor(E/3),s.face.materialIndex=M.materialIndex,t.push(s)}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let M=_,g=v;M<g;M+=3){let x=o.getX(M),T=o.getX(M+1),E=o.getX(M+2);if(s=ua(this,a,e,n,h,u,f,x,T,E),s)s.faceIndex=Math.floor(M/3),t.push(s)}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=m.length;_<v;_++){let M=m[_],g=a[M.materialIndex],x=Math.max(M.start,p.start),T=Math.min(c.count,Math.min(M.start+M.count,p.start+p.count));for(let E=x,w=T;E<w;E+=3){let L=E,I=E+1,P=E+2;if(s=ua(this,g,e,n,h,u,f,L,I,P),s)s.faceIndex=Math.floor(E/3),s.face.materialIndex=M.materialIndex,t.push(s)}}else{let _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let M=_,g=v;M<g;M+=3){let x=M,T=M+1,E=M+2;if(s=ua(this,a,e,n,h,u,f,x,T,E),s)s.faceIndex=Math.floor(M/3),t.push(s)}}}}function jf(e,t,n,s,r,a,o,c){let h;if(t.side===1)h=s.intersectTriangle(o,a,r,!0,c);else h=s.intersectTriangle(r,a,o,t.side===0,c);if(h===null)return null;ha.copy(c),ha.applyMatrix4(e.matrixWorld);let u=n.ray.origin.distanceTo(ha);if(u<n.near||u>n.far)return null;return{distance:u,point:ha.clone(),object:e}}function ua(e,t,n,s,r,a,o,c,h,u){e.getVertexPosition(c,aa),e.getVertexPosition(h,oa),e.getVertexPosition(u,la);let f=jf(e,t,n,s,aa,oa,la,ah);if(f){let m=new N;if(sn.getBarycoord(ah,aa,oa,la,m),r)f.uv=sn.getInterpolatedAttribute(r,c,h,u,m,new Se);if(a)f.uv1=sn.getInterpolatedAttribute(a,c,h,u,m,new Se);if(o){if(f.normal=sn.getInterpolatedAttribute(o,c,h,u,m,new N),f.normal.dot(s.direction)>0)f.normal.multiplyScalar(-1)}let p={a:c,b:h,c:u,normal:new N,materialIndex:0};sn.getNormal(aa,oa,la,p.normal),f.face=p,f.barycoord=m}return f}var or=new ct,oh=new ct,lh=new ct,Qf=new ct,ch=new Oe,da=new N,Fo=new an,hh=new Oe,Oo=new Ls;class Ga extends Be{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new Ft;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new an;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){if(super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}raycast(e,t){let n=this.material,s=this.matrixWorld;if(n===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Fo.copy(this.boundingSphere),Fo.applyMatrix4(s),e.ray.intersectsSphere(Fo)===!1)return;if(hh.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(hh),this.boundingBox!==null){if(Oo.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,Oo)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();if(r!==1/0)e.multiplyScalar(r);else e.set(1,0,0,0);t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;if(oh.fromBufferAttribute(s.attributes.skinIndex,e),lh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4)or.copy(t),t.set(0,0,0,0);else or.set(...t,1),t.set(0,0,0);or.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=lh.getComponent(r);if(a!==0){let o=oh.getComponent(r);ch.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qf.copy(or).applyMatrix4(ch),a)}}if(t.isVector4)t.w=or.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Ar extends pt{constructor(){super();this.isBone=!0,this.type="Bone"}}class Rr extends bt{constructor(e=null,t=1,n=1,s,r,a,o,c,h=1003,u=1003,f,m){super(null,a,o,c,h,u,s,r,f,m);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var uh=new Oe,ep=new Oe;class Cr{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Oe;if(this.bones[e])n.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];if(n)n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];if(n){if(n.parent&&n.parent.isBone)n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld);else n.matrix.copy(n.matrixWorld);n.matrix.decompose(n.position,n.quaternion,n.scale)}}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ep;uh.multiplyMatrices(o,t[r]),uh.toArray(n,r*16)}if(s!==null)s.needsUpdate=!0}clone(){return new Cr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rr(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];if(a===void 0)Ee("Skeleton: No bone found with UUID:",r),a=new Ar;this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}}class Ii extends Tt{constructor(e,t,n,s=1){super(e,t,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var ps=new Oe,dh=new Oe,fa=[],fh=new Ft,tp=new Oe,lr=new Be,cr=new an;class Va extends Be{constructor(e,t,n){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tp)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new Ft;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),fh.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(fh)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new an;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),cr.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(cr)}copy(e,t){if(super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null)this.previousInstanceMatrix=e.previousInstanceMatrix.clone();if(e.morphTexture!==null)this.morphTexture=e.morphTexture.clone();if(e.instanceColor!==null)this.instanceColor=e.instanceColor.clone();if(this.count=e.count,e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)===!1)return;for(let r=0;r<s;r++){this.getMatrixAt(r,ps),dh.multiplyMatrices(n,ps),lr.matrixWorld=dh,lr.raycast(e,fa);for(let a=0,o=fa.length;a<o;a++){let c=fa[a];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;if(this.morphTexture===null)this.morphTexture=new Rr(new Float32Array(s*this.count),s,this.count,1028,1015);let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Bo=new N,np=new N,ip=new Fe;class Vn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bo.subVectors(n,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Bo),r=this.normal.dot(s);if(r===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let a=-(e.start.dot(this.normal)+this.constant)/r;if(n===!0&&(a<0||a>1))return null;return t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ip.getNormalMatrix(e),s=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Ri=new an,sp=new Se(0.5,0.5),pa=new N;class Ir{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],f=r[5],m=r[6],p=r[7],_=r[8],v=r[9],M=r[10],g=r[11],x=r[12],T=r[13],E=r[14],w=r[15];if(s[0].setComponents(h-a,p-u,g-_,w-x).normalize(),s[1].setComponents(h+a,p+u,g+_,w+x).normalize(),s[2].setComponents(h+o,p+f,g+v,w+T).normalize(),s[3].setComponents(h-o,p-f,g-v,w-T).normalize(),n)s[4].setComponents(c,m,M,E).normalize(),s[5].setComponents(h-c,p-m,g-M,w-E).normalize();else if(s[4].setComponents(h-c,p-m,g-M,w-E).normalize(),t===2000)s[5].setComponents(h+c,p+m,g+M,w+E).normalize();else if(t===2001)s[5].setComponents(c,m,M,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=sp.distanceTo(e.center);return Ri.radius=0.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pr extends jt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var ba=new N,Ta=new N,ph=new Oe,hr=new Ls,ma=new an,zo=new N,mh=new N;class Ns extends pt{constructor(e=new _t,t=new Pr){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ba.fromBufferAttribute(t,s-1),Ta.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ba.distanceTo(Ta);e.setAttribute("lineDistance",new tt(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;ph.copy(s).invert(),hr.copy(e.ray).applyMatrix4(ph);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,m=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,M=_-1;v<M;v+=h){let g=u.getX(v),x=u.getX(v+1),T=ga(this,e,hr,c,g,x,v);if(T)t.push(T)}if(this.isLineLoop){let v=u.getX(_-1),M=u.getX(p),g=ga(this,e,hr,c,v,M,_-1);if(g)t.push(g)}}else{let p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let v=p,M=_-1;v<M;v+=h){let g=ga(this,e,hr,c,v,v+1,v);if(g)t.push(g)}if(this.isLineLoop){let v=ga(this,e,hr,c,_-1,p,_-1);if(v)t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ga(e,t,n,s,r,a,o){let c=e.geometry.attributes.position;if(ba.fromBufferAttribute(c,r),Ta.fromBufferAttribute(c,a),n.distanceSqToSegment(ba,Ta,zo,mh)>s)return;zo.applyMatrix4(e.matrixWorld);let u=t.ray.origin.distanceTo(zo);if(u<t.near||u>t.far)return;return{distance:u,point:mh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var gh=new N,_h=new N;class Wa extends Ns{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gh.fromBufferAttribute(t,s),_h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gh.distanceTo(_h);e.setAttribute("lineDistance",new tt(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xa extends Ns{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Hi extends jt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var xh=new Oe,Go=new Ls,_a=new an,xa=new N;class Ds extends pt{constructor(e=new _t,t=new Hi){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;xh.copy(s).invert(),Go.copy(e.ray).applyMatrix4(xh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=m,v=p;_<v;_++){let M=h.getX(_);xa.fromBufferAttribute(f,M),vh(xa,M,c,s,e,t,this)}}else{let m=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=m,v=p;_<v;_++)xa.fromBufferAttribute(f,_),vh(xa,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vh(e,t,n,s,r,a,o){let c=Go.distanceSqToPoint(e);if(c<n){let h=new N;Go.closestPointToPoint(e,h),h.applyMatrix4(s);let u=r.ray.origin.distanceTo(h);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class qa extends bt{constructor(e=[],t=301,n,s,r,a,o,c,h,u){super(e,t,n,s,r,a,o,c,h,u);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Us extends bt{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h);this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i extends bt{constructor(e,t,n=1014,s,r,a,o=1003,c=1003,h,u=1026,f=1){if(u!==1026&&u!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:f};super(m,s,r,a,o,c,u,n,h);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);if(this.compareFunction!==null)t.compareFunction=this.compareFunction;return t}}class zl extends _i{constructor(e,t=1014,n=301,s,r,a=1003,o=1003,c,h=1026){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,h);this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ya extends bt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jn extends _t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],f=[],m=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function _(v,M,g,x,T,E,w,L,I,P,S){let R=E/I,H=w/P,C=E/2,W=w/2,Z=L/2,O=I+1,q=P+1,G=0,X=0,ee=new N;for(let re=0;re<q;re++){let _e=re*H-W;for(let Pe=0;Pe<O;Pe++){let be=Pe*R-C;ee[v]=be*x,ee[M]=_e*T,ee[g]=Z,h.push(ee.x,ee.y,ee.z),ee[v]=0,ee[M]=0,ee[g]=L>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Pe/I),f.push(1-re/P),G+=1}}for(let re=0;re<P;re++)for(let _e=0;_e<I;_e++){let Pe=m+_e+O*re,be=m+_e+O*(re+1),st=m+(_e+1)+O*(re+1),Ke=m+(_e+1)+O*re;c.push(Pe,be,Ke),c.push(be,st,Ke),X+=6}o.addGroup(p,X,S),p+=X,m+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fs extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],h=new N,u=new Se;a.push(0,0,0),o.push(0,0,1),c.push(0.5,0.5);for(let f=0,m=3;f<=t;f++,m+=3){let p=n+f/t*s;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[m]/e+1)/2,u.y=(a[m+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zt extends _t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],m=[],p=[],_=0,v=[],M=n/2,g=0;if(x(),a===!1){if(e>0)T(!0);if(t>0)T(!1)}this.setIndex(u),this.setAttribute("position",new tt(f,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(p,2));function x(){let E=new N,w=new N,L=0,I=(t-e)/n;for(let P=0;P<=r;P++){let S=[],R=P/r,H=R*(t-e)+e;for(let C=0;C<=s;C++){let W=C/s,Z=W*c+o,O=Math.sin(Z),q=Math.cos(Z);w.x=H*O,w.y=-R*n+M,w.z=H*q,f.push(w.x,w.y,w.z),E.set(O,I,q).normalize(),m.push(E.x,E.y,E.z),p.push(W,1-R),S.push(_++)}v.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let R=v[S][P],H=v[S+1][P],C=v[S+1][P+1],W=v[S][P+1];if(e>0||S!==0)u.push(R,H,W),L+=3;if(t>0||S!==r-1)u.push(H,C,W),L+=3}h.addGroup(g,L,0),g+=L}function T(E){let w=_,L=new Se,I=new N,P=0,S=E===!0?e:t,R=E===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,M*R,0),m.push(0,R,0),p.push(0.5,0.5),_++;let H=_;for(let C=0;C<=s;C++){let Z=C/s*c+o,O=Math.cos(Z),q=Math.sin(Z);I.x=S*q,I.y=M*R,I.z=S*O,f.push(I.x,I.y,I.z),m.push(0,R,0),L.x=O*0.5+0.5,L.y=q*0.5*R+0.5,p.push(L.x,L.y),_++}for(let C=0;C<s;C++){let W=w+C,Z=H+C;if(E===!0)u.push(Z,Z+1,W);else u.push(Z+1,Z,W);P+=3}h.addGroup(g,P,E===!0?1:2),g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lr extends Zt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gi extends _t{constructor(e=1,t=1,n=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,f=e/o,m=t/c,p=[],_=[],v=[],M=[];for(let g=0;g<u;g++){let x=g*m-a;for(let T=0;T<h;T++){let E=T*f-r;_.push(E,-x,0),v.push(0,0,1),M.push(T/o),M.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<o;x++){let T=x+h*g,E=x+h*(g+1),w=x+1+h*(g+1),L=x+1+h*g;p.push(T,E,L),p.push(E,w,L)}this.setIndex(p),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nr extends _t{constructor(e=0.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],f=e,m=(t-e)/s,p=new N,_=new Se;for(let v=0;v<=s;v++){for(let M=0;M<=n;M++){let g=r+M/n*a;p.x=f*Math.cos(g),p.y=f*Math.sin(g),c.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}f+=m}for(let v=0;v<s;v++){let M=v*(n+1);for(let g=0;g<n;g++){let x=g+M,T=x,E=x+n+1,w=x+n+2,L=x+1;o.push(T,E,L),o.push(E,w,L)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class En extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],f=new N,m=new N,p=[],_=[],v=[],M=[];for(let g=0;g<=n;g++){let x=[],T=g/n,E=0;if(g===0&&a===0)E=0.5/t;else if(g===n&&c===Math.PI)E=-0.5/t;for(let w=0;w<=t;w++){let L=w/t;f.x=-e*Math.cos(s+L*r)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(s+L*r)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),m.copy(f).normalize(),v.push(m.x,m.y,m.z),M.push(L+E,1-T),x.push(h++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let T=u[g][x+1],E=u[g][x],w=u[g+1][x],L=u[g+1][x+1];if(g!==0||a>0)p.push(T,E,L);if(g!==n-1||c<Math.PI)p.push(E,w,L)}this.setIndex(p),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends _t{constructor(e=1,t=0.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],u=[],f=[],m=new N,p=new N,_=new N;for(let v=0;v<=n;v++){let M=a+v/n*o;for(let g=0;g<=s;g++){let x=g/s*r;p.x=(e+t*Math.cos(M))*Math.cos(x),p.y=(e+t*Math.cos(M))*Math.sin(x),p.z=t*Math.sin(M),h.push(p.x,p.y,p.z),m.x=e*Math.cos(x),m.y=e*Math.sin(x),_.subVectors(p,m).normalize(),u.push(_.x,_.y,_.z),f.push(g/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let M=1;M<=s;M++){let g=(s+1)*v+M-1,x=(s+1)*(v-1)+M-1,T=(s+1)*(v-1)+M,E=(s+1)*v+M;c.push(g,x,E),c.push(x,T,E)}this.setIndex(c),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Wi(e){let t={};for(let n in e){t[n]={};for(let s in e[n]){let r=e[n][s];if(yh(r))if(r.isRenderTargetTexture)Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null;else t[n][s]=r.clone();else if(Array.isArray(r))if(yh(r[0])){let a=[];for(let o=0,c=r.length;o<c;o++)a[o]=r[o].clone();t[n][s]=a}else t[n][s]=r.slice();else t[n][s]=r}}return t}function Wt(e){let t={};for(let n=0;n<e.length;n++){let s=Wi(e[n]);for(let r in s)t[r]=s[r]}return t}function yh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rp(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function kl(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Ge.workingColorSpace}var $n={clone:Wi,merge:Wt},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends jt{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;if(a&&a.isTexture)t.uniforms[s]={type:"t",value:a.toJSON(e).uuid};else if(a&&a.isColor)t.uniforms[s]={type:"c",value:a.getHex()};else if(a&&a.isVector2)t.uniforms[s]={type:"v2",value:a.toArray()};else if(a&&a.isVector3)t.uniforms[s]={type:"v3",value:a.toArray()};else if(a&&a.isVector4)t.uniforms[s]={type:"v4",value:a.toArray()};else if(a&&a.isMatrix3)t.uniforms[s]={type:"m3",value:a.toArray()};else if(a&&a.isMatrix4)t.uniforms[s]={type:"m4",value:a.toArray()};else t.uniforms[s]={value:a}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)if(this.extensions[s]===!0)n[s]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}}class Dr extends Ct{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gt extends jt{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class on extends gt{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hl extends jt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gl extends jt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function va(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function lp(e){function t(r,a){return e[r]-e[a]}let n=e.length,s=Array(n);for(let r=0;r!==n;++r)s[r]=r;return s.sort(t),s}function Mh(e,t,n){let s=e.length,r=new e.constructor(s);for(let a=0,o=0;o!==s;++a){let c=n[a]*t;for(let h=0;h!==t;++h)r[o++]=e[c+h]}return r}function Au(e,t,n,s){let r=1,a=e[0];while(a!==void 0&&a[s]===void 0)a=e[r++];if(a===void 0)return;let o=a[s];if(o===void 0)return;if(Array.isArray(o))do{if(o=a[s],o!==void 0)t.push(a.time),n.push(...o);a=e[r++]}while(a!==void 0);else if(o.toArray!==void 0)do{if(o=a[s],o!==void 0)t.push(a.time),o.toArray(n,n.length);a=e[r++]}while(a!==void 0);else do{if(o=a[s],o!==void 0)t.push(a.time),n.push(o);a=e[r++]}while(a!==void 0)}class jn{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];if(e<o)n=2,r=o;for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}while(n<a){let o=n+a>>>1;if(e<t[o])a=o;else n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Vl extends jn{constructor(e,t,n,s){super(e,t,n,s);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,o=2*t-n;break;case 2402:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,c=2*n-t;break;case 2402:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let h=(n-t)*0.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,M=v*_,g=-m*M+2*m*v-m*_,x=(1+m)*M+(-1.5-2*m)*v+(-0.5+m)*_+1,T=(-1-p)*M+(1.5+p)*v+0.5*_,E=p*M-p*v;for(let w=0;w!==o;++w)r[w]=g*a[u+w]+x*a[h+w]+T*a[c+w]+E*a[f+w];return r}}class Wl extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(s-t),f=1-u;for(let m=0;m!==o;++m)r[m]=a[h+m]*f+a[c+m]*u;return r}}class Xl extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ql extends jn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this.settings||this.DefaultSettings_,{inTangents:f,outTangents:m}=u;if(!f||!m){let v=(n-t)/(s-t),M=1-v;for(let g=0;g!==o;++g)r[g]=a[h+g]*M+a[c+g]*v;return r}let p=o*2,_=e-1;for(let v=0;v!==o;++v){let M=a[h+v],g=a[c+v],x=_*p+v*2,T=m[x],E=m[x+1],w=e*p+v*2,L=f[w],I=f[w+1],P=(n-t)/(s-t),S,R,H,C,W;for(let Z=0;Z<8;Z++){S=P*P,R=S*P,H=1-P,C=H*H,W=C*H;let q=W*t+3*C*P*T+3*H*S*L+R*s-n;if(Math.abs(q)<0.0000000001)break;let G=3*C*(T-t)+6*H*P*(L-T)+3*S*(s-L);if(Math.abs(G)<0.0000000001)break;P=P-q/G,P=Math.max(0,Math.min(1,P))}r[v]=W*M+3*C*P*E+3*H*S*I+R*g}return r}}class ln{constructor(e,t,n,s){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let s=e.getInterpolation();if(s!==e.DefaultInterpolation)n.interpolation=s}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ql(this.times,this.values,this.getValueSize(),e);if(this.settings)t.settings=this.settings;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;while(r!==s&&n[r]<e)++r;while(a!==-1&&n[a]>t)--a;if(++a,r!==0||a!==s){if(r>=a)a=Math.max(a,1),r=a-1;let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)De("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,s=this.values,r=n.length;if(r===0)De("KeyframeTrack: Track is empty.",this),e=!1;let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c==="number"&&isNaN(c)){De("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){De("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0){if(Mf(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){De("KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(!s){let f=o*n,m=f-n,p=f+n;for(let _=0;_!==n;++_){let v=t[f+_];if(v!==t[m+_]||v!==t[p+_]){c=!0;break}}}else c=!0;if(c){if(o!==a){e[a]=e[o];let f=o*n,m=a*n;for(let p=0;p!==n;++p)t[m+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}if(a!==e.length)this.times=e.slice(0,a),this.values=t.slice(0,a*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),s=new this.constructor(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=2301;class xi extends ln{constructor(e,t,n){super(e,t,n)}}xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=2300;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Za extends ln{constructor(e,t,n,s){super(e,t,n,s)}}Za.prototype.ValueTypeName="color";class qn extends ln{constructor(e,t,n,s){super(e,t,n,s)}}qn.prototype.ValueTypeName="number";class Yl extends jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)dn.slerpFlat(r,0,a,h-o,a,h,c);return r}}class Qn extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}}Qn.prototype.ValueTypeName="quaternion";Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class vi extends ln{constructor(e,t,n){super(e,t,n)}}vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=2300;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Yn extends ln{constructor(e,t,n,s){super(e,t,n,s)}}Yn.prototype.ValueTypeName="vector";class Ka{constructor(e="",t=-1,n=[],s=2500){if(this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Sn(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hp(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);let u=lp(c);if(c=Mh(c,1,u),h=Mh(h,1,u),!s&&c[0]===0)c.push(r),h.push(h[0]);a.push(new qn(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let h=e[o],u=h.name.match(r);if(u&&u.length>1){let f=u[1],m=s[f];if(!m)s[f]=m=[];m.push(h)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return De("AnimationClip: No animation in JSONLoader data."),null;let n=function(f,m,p,_,v){if(p.length!==0){let M=[],g=[];if(Au(p,M,g,_),M.length!==0)v.push(new f(m,M,g))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,h=e.hierarchy||[];for(let f=0;f<h.length;f++){let m=h[f].keys;if(!m||m.length===0)continue;if(m[0].morphTargets){let p={},_;for(_=0;_<m.length;_++)if(m[_].morphTargets)for(let v=0;v<m[_].morphTargets.length;v++)p[m[_].morphTargets[v]]=-1;for(let v in p){let M=[],g=[];for(let x=0;x!==m[_].morphTargets.length;++x){let T=m[_];M.push(T.time),g.push(T.morphTarget===v?1:0)}s.push(new qn(".morphTargetInfluence["+v+"]",M,g))}c=p.length*a}else{let p=".bones["+t[f].name+"]";n(Yn,p+".position",m,"pos",s),n(Qn,p+".quaternion",m,"rot",s),n(Yn,p+".scale",m,"scl",s)}}if(s.length===0)return null;return new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cp(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qn;case"vector":case"vector2":case"vector3":case"vector4":return Yn;case"color":return Za;case"quaternion":return Qn;case"bool":case"boolean":return xi;case"string":return vi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function hp(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=cp(e.type);if(e.times===void 0){let n=[],s=[];Au(e.keys,n,s,"value"),e.times=n,e.values=s}if(t.parse!==void 0)return t.parse(e);else return new t(e.name,e.times,e.values,e.interpolation)}var Cn={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Sh(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Sh(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Sh(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Zl{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c=void 0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){if(o++,r===!1){if(s.onStart!==void 0)s.onStart(u,a,o)}r=!0},this.itemEnd=function(u){if(a++,s.onProgress!==void 0)s.onProgress(u,a,o);if(a===o){if(r=!1,s.onLoad!==void 0)s.onLoad()}},this.itemError=function(u){if(s.onError!==void 0)s.onError(u)},this.resolveURL=function(u){if(c)return c(u);return u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);if(f!==-1)h.splice(f,2);return this},this.getHandler=function(u){for(let f=0,m=h.length;f<m;f+=2){let p=h[f],_=h[f+1];if(p.global)p.lastIndex=0;if(p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Ru=new Zl;class ei{constructor(e){if(this.manager=e!==void 0?e:Ru,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gn={};class Cu extends Error{constructor(e,t){super(e);this.response=t}}class Ur extends ei{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=Cn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(r);this.manager.itemEnd(e)},0);return}if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:s});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then((h)=>{if(h.status===200||h.status===0){if(h.status===0)Ee("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let u=Gn[e],f=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=m?parseInt(m):0,_=p!==0,v=0,M=new ReadableStream({start(g){x();function x(){f.read().then(({done:T,value:E})=>{if(T)g.close();else{v+=E.byteLength;let w=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let L=0,I=u.length;L<I;L++){let P=u[L];if(P.onProgress)P.onProgress(w)}g.enqueue(E),x()}},(T)=>{g.error(T)})}}});return new Response(M)}else throw new Cu(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then((h)=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then((u)=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o==="")return h.text();else{let f=/charset="?([^;"\s]*)"?/i.exec(o),m=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(m);return h.arrayBuffer().then((_)=>p.decode(_))}}}).then((h)=>{Cn.add(`file:${e}`,h);let u=Gn[e];delete Gn[e];for(let f=0,m=u.length;f<m;f++){let p=u[f];if(p.onLoad)p.onLoad(h)}}).catch((h)=>{let u=Gn[e];if(u===void 0)throw this.manager.itemError(e),h;delete Gn[e];for(let f=0,m=u.length;f<m;f++){let p=u[f];if(p.onError)p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ms=new WeakMap;class Kl extends ei{constructor(e){super(e)}load(e,t,n,s){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=Cn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);else{let f=ms.get(a);if(f===void 0)f=[],ms.set(a,f);f.push({onLoad:t,onError:s})}return a}let o=vs("img");function c(){if(u(),t)t(this);let f=ms.get(this)||[];for(let m=0;m<f.length;m++){let p=f[m];if(p.onLoad)p.onLoad(this)}ms.delete(this),r.manager.itemEnd(e)}function h(f){if(u(),s)s(f);Cn.remove(`image:${e}`);let m=ms.get(this)||[];for(let p=0;p<m.length;p++){let _=m[p];if(_.onError)_.onError(f)}ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}if(o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Cn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Os extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new bt,a=new Kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){if(r.image=o,r.needsUpdate=!0,t!==void 0)t(r)},n,s),r}}class Bs extends pt{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ja extends Bs{constructor(e,t,n){super(e,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var ko=new Oe,bh=new N,Th=new N;class $a{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;if(bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth)n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};if(this.intensity!==1)e.intensity=this.intensity;if(this.bias!==0)e.bias=this.bias;if(this.normalBias!==0)e.normalBias=this.normalBias;if(this.radius!==1)e.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)e.mapSize=this.mapSize.toArray();return e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var ya=new N,Ma=new dn,Rn=new N;class ja extends pt{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(ya,Ma,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ya,Ma,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t){if(super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ya,Ma,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ya,Ma,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var di=new N,Eh=new Se,wh=new Se;class It extends ja{constructor(e=50,t=1,n=0.1,s=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ur*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Ci*2*Math.atan(Math.tan(ur*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,wh),t.subVectors(wh,Eh)}setViewOffset(e,t,n,s,r,a){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ur*0.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-0.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:c,fullHeight:h}=a;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;if(o!==0)r+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Iu extends $a{constructor(){super(new It(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ci*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;if(n!==t.fov||s!==t.aspect||r!==t.far)t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qa extends Bs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Iu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class Pu extends $a{constructor(){super(new It(90,1,0.5,500));this.isPointLightShadow=!0}}class zs extends Bs{constructor(e,t,n=0,s=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ti extends ja{constructor(e=-1,t=1,n=1,s=-1,r=0.1,a=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Lu extends $a{constructor(){super(new ti(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class ks extends Bs{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Lu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class yi{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}var Ho=new WeakMap;class eo extends ei{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")Ee("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")Ee("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let r=this,a=Cn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then((h)=>{if(Ho.has(a)===!0){if(s)s(Ho.get(a));r.manager.itemError(e),r.manager.itemEnd(e)}else{if(t)t(h);r.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(a);r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){if(Cn.add(`image-bitmap:${e}`,h),t)t(h);r.manager.itemEnd(e)}).catch(function(h){if(s)s(h);Ho.set(c,h),Cn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Cn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var gs=-90,_s=1;class Jl extends pt{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(gs,_s,e,t);s.layers=this.layers,this.add(s);let r=new It(gs,_s,e,t);r.layers=this.layers,this.add(r);let a=new It(gs,_s,e,t);a.layers=this.layers,this.add(a);let o=new It(gs,_s,e,t);o.layers=this.layers,this.add(o);let c=new It(gs,_s,e,t);c.layers=this.layers,this.add(c);let h=new It(gs,_s,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[r,a,o,c,h,u]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;if(e.isWebGLRenderer===!0)M=e.state.buffers.depth.getReversed();else M=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,s),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,1,s),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,2,s),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,3,s),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,c),e.setRenderTarget(n,4,s),M&&e.autoClear===!1)e.clearDepth();if(e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),M&&e.autoClear===!1)e.clearDepth();e.render(t,u),e.setRenderTarget(f,m,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class $l extends It{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hs{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=up.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function up(){if(this._document.hidden===!1)this.reset()}var jl="\\[\\]\\.:\\/",dp=new RegExp("["+jl+"]","g"),Ql="[^"+jl+"]",fp="[^"+jl.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",Ql),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),xp=new RegExp("^"+pp+mp+gp+_p+"$"),vp=["material","materials","bones","map"];class Nu{constructor(e,t,n){let s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];if(s!==void 0)s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new it(e,t,n);else return new it.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(e){let t=xp.exec(e);if(t===null)throw Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);if(vp.indexOf(r)!==-1)n.nodeName=n.nodeName.substring(0,s),n.objectName=r}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:s,propertyIndex:r}=t;if(!e)e=it.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;De("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[r]!==void 0)r=e.morphTargetDictionary[r]}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else if(a.fromArray!==void 0&&a.toArray!==void 0)c=this.BindingType.HasFromToArray,this.resolvedProperty=a;else if(Array.isArray(a))c=this.BindingType.EntireArray,this.resolvedProperty=a;else this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Nu;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zx=new Float32Array(1);class ec{static{ec.prototype.isMatrix2=!0}constructor(e,t,n,s){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function tc(e,t,n,s){let r=yp(s);switch(n){case 1021:return e*t;case 1028:return e*t/r.components*r.byteLength;case 1029:return e*t/r.components*r.byteLength;case 1030:return e*t*2/r.components*r.byteLength;case 1031:return e*t*2/r.components*r.byteLength;case 1022:return e*t*3/r.components*r.byteLength;case 1023:return e*t*4/r.components*r.byteLength;case 1033:return e*t*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function yp(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));if(typeof window<"u")if(window.__THREE__)Ee("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="184";function nd(){let e=null,t=!1,n=null,s=null;function r(a,o){n(a,o),s=e.requestAnimationFrame(r)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;s=e.requestAnimationFrame(r),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(s);t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Mp(e){let t=new WeakMap;function n(c,h){let{array:u,usage:f}=c,m=u.byteLength,p=e.createBuffer();e.bindBuffer(h,p),e.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)_=e.HALF_FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)_=e.HALF_FLOAT;else _=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=e.SHORT;else if(u instanceof Uint32Array)_=e.UNSIGNED_INT;else if(u instanceof Int32Array)_=e.INT;else if(u instanceof Int8Array)_=e.BYTE;else if(u instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){let{array:f,updateRanges:m}=h;if(e.bindBuffer(u,c),m.length===0)e.bufferSubData(u,0,f);else{m.sort((_,v)=>_.start-v.start);let p=0;for(let _=1;_<m.length;_++){let v=m[p],M=m[_];if(M.start<=v.start+v.count+1)v.count=Math.max(v.count,M.start+M.count-v.start);else++p,m[p]=M}m.length=p+1;for(let _=0,v=m.length;_<v;_++){let M=m[_];e.bufferSubData(u,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(c){if(c.isInterleavedBufferAttribute)c=c.data;return t.get(c)}function a(c){if(c.isInterleavedBufferAttribute)c=c.data;let h=t.get(c);if(h)e.deleteBuffer(h.buffer),t.delete(c)}function o(c,h){if(c.isInterleavedBufferAttribute)c=c.data;if(c.isGLBufferAttribute){let f=t.get(c);if(!f||f.version<c.version)t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let u=t.get(c);if(u===void 0)t.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:r,remove:a,update:o}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`;var Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Tp,alphamap_pars_fragment:Ep,alphatest_fragment:wp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Ip,batching_vertex:Pp,begin_vertex:Lp,beginnormal_vertex:Np,bsdfs:Dp,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Gp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:Jp,emissivemap_pars_fragment:$p,colorspace_fragment:jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:am,fog_fragment:om,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:bm,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Im,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Um,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:zm,normal_fragment_begin:km,normal_fragment_maps:Hm,normal_pars_fragment:Gm,normal_pars_vertex:Vm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Km,opaque_fragment:Jm,packing:$m,premultiplied_alpha_fragment:jm,project_vertex:Qm,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:sg,shadowmap_pars_vertex:rg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:hg,skinnormal_vertex:ug,specularmap_fragment:dg,specularmap_pars_fragment:fg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:gg,transmission_pars_fragment:_g,uv_pars_fragment:xg,uv_pars_vertex:vg,uv_vertex:yg,worldpos_vertex:Mg,background_vert:Sg,background_frag:bg,backgroundCube_vert:Tg,backgroundCube_frag:Eg,cube_vert:wg,cube_frag:Ag,depth_vert:Rg,depth_frag:Cg,distance_vert:Ig,distance_frag:Pg,equirect_vert:Lg,equirect_frag:Ng,linedashed_vert:Dg,linedashed_frag:Ug,meshbasic_vert:Fg,meshbasic_frag:Og,meshlambert_vert:Bg,meshlambert_frag:zg,meshmatcap_vert:kg,meshmatcap_frag:Hg,meshnormal_vert:Gg,meshnormal_frag:Vg,meshphong_vert:Wg,meshphong_frag:Xg,meshphysical_vert:qg,meshphysical_frag:Yg,meshtoon_vert:Zg,meshtoon_frag:Kg,points_vert:Jg,points_frag:$g,shadow_vert:jg,shadow_frag:Qg,sprite_vert:e0,sprite_frag:t0},ue={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Se(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Nn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Nn.physical={uniforms:Wt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var to={r:0,b:0,g:0},n0=new Oe,id=new Fe;id.set(-1,0,0,0,1,0,0,0,1);function i0(e,t,n,s,r,a){let o=new we(0),c=r===!0?0:1,h,u,f=null,m=0,p=null;function _(T){let E=T.isScene===!0?T.background:null;if(E&&E.isTexture){let w=T.backgroundBlurriness>0;E=t.get(E,w)}return E}function v(T){let E=!1,w=_(T);if(w===null)g(o,c);else if(w&&w.isColor)g(w,1),E=!0;let L=e.xr.getEnvironmentBlendMode();if(L==="additive")n.buffers.color.setClear(0,0,0,1,a);else if(L==="alpha-blend")n.buffers.color.setClear(0,0,0,0,a);if(e.autoClear||E)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function M(T,E){let w=_(E);if(w&&(w.isCubeTexture||w.mapping===Mr)){if(u===void 0)u=new Be(new Jn(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Wi(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u);if(u.material.uniforms.envMap.value=w,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)u.material.uniforms.backgroundRotation.value.premultiply(id);if(u.material.toneMapped=Ge.getTransfer(w.colorSpace)!==at,f!==w||m!==w.version||p!==e.toneMapping)u.material.needsUpdate=!0,f=w,m=w.version,p=e.toneMapping;u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)}else if(w&&w.isTexture){if(h===void 0)h=new Be(new Gi(2,2),new Ct({name:"BackgroundMaterial",uniforms:Wi(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h);if(h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=Ge.getTransfer(w.colorSpace)!==at,w.matrixAutoUpdate===!0)w.updateMatrix();if(h.material.uniforms.uvTransform.value.copy(w.matrix),f!==w||m!==w.version||p!==e.toneMapping)h.material.needsUpdate=!0,f=w,m=w.version,p=e.toneMapping;h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)}}function g(T,E){T.getRGB(to,kl(e)),n.buffers.color.setClear(to.r,to.g,to.b,E,a)}function x(){if(u!==void 0)u.geometry.dispose(),u.material.dispose(),u=void 0;if(h!==void 0)h.geometry.dispose(),h.material.dispose(),h=void 0}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,g(o,c)},render:v,addToRenderList:M,dispose:x}}function s0(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=p(null),a=r,o=!1;function c(C,W,Z,O,q){let G=!1,X=m(C,O,Z,W);if(a!==X)a=X,u(a.object);if(G=_(C,O,Z,q),G)v(C,O,Z,q);if(q!==null)t.update(q,e.ELEMENT_ARRAY_BUFFER);if(G||o){if(o=!1,w(C,W,Z,O),q!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer)}}function h(){return e.createVertexArray()}function u(C){return e.bindVertexArray(C)}function f(C){return e.deleteVertexArray(C)}function m(C,W,Z,O){let q=O.wireframe===!0,G=s[W.id];if(G===void 0)G={},s[W.id]=G;let X=C.isInstancedMesh===!0?C.id:0,ee=G[X];if(ee===void 0)ee={},G[X]=ee;let re=ee[Z.id];if(re===void 0)re={},ee[Z.id]=re;let _e=re[q];if(_e===void 0)_e=p(h()),re[q]=_e;return _e}function p(C){let W=[],Z=[],O=[];for(let q=0;q<n;q++)W[q]=0,Z[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:O,object:C,attributes:{},index:null}}function _(C,W,Z,O){let q=a.attributes,G=W.attributes,X=0,ee=Z.getAttributes();for(let re in ee)if(ee[re].location>=0){let Pe=q[re],be=G[re];if(be===void 0){if(re==="instanceMatrix"&&C.instanceMatrix)be=C.instanceMatrix;if(re==="instanceColor"&&C.instanceColor)be=C.instanceColor}if(Pe===void 0)return!0;if(Pe.attribute!==be)return!0;if(be&&Pe.data!==be.data)return!0;X++}if(a.attributesNum!==X)return!0;if(a.index!==O)return!0;return!1}function v(C,W,Z,O){let q={},G=W.attributes,X=0,ee=Z.getAttributes();for(let re in ee)if(ee[re].location>=0){let Pe=G[re];if(Pe===void 0){if(re==="instanceMatrix"&&C.instanceMatrix)Pe=C.instanceMatrix;if(re==="instanceColor"&&C.instanceColor)Pe=C.instanceColor}let be={};if(be.attribute=Pe,Pe&&Pe.data)be.data=Pe.data;q[re]=be,X++}a.attributes=q,a.attributesNum=X,a.index=O}function M(){let C=a.newAttributes;for(let W=0,Z=C.length;W<Z;W++)C[W]=0}function g(C){x(C,0)}function x(C,W){let Z=a.newAttributes,O=a.enabledAttributes,q=a.attributeDivisors;if(Z[C]=1,O[C]===0)e.enableVertexAttribArray(C),O[C]=1;if(q[C]!==W)e.vertexAttribDivisor(C,W),q[C]=W}function T(){let C=a.newAttributes,W=a.enabledAttributes;for(let Z=0,O=W.length;Z<O;Z++)if(W[Z]!==C[Z])e.disableVertexAttribArray(Z),W[Z]=0}function E(C,W,Z,O,q,G,X){if(X===!0)e.vertexAttribIPointer(C,W,Z,q,G);else e.vertexAttribPointer(C,W,Z,O,q,G)}function w(C,W,Z,O){M();let q=O.attributes,G=Z.getAttributes(),X=W.defaultAttributeValues;for(let ee in G){let re=G[ee];if(re.location>=0){let _e=q[ee];if(_e===void 0){if(ee==="instanceMatrix"&&C.instanceMatrix)_e=C.instanceMatrix;if(ee==="instanceColor"&&C.instanceColor)_e=C.instanceColor}if(_e!==void 0){let Pe=_e.normalized,be=_e.itemSize,st=t.get(_e);if(st===void 0)continue;let{buffer:Ke,type:J,bytesPerElement:me}=st,Ae=J===e.INT||J===e.UNSIGNED_INT||_e.gpuType===Yo;if(_e.isInterleavedBufferAttribute){let ge=_e.data,Le=ge.stride,nt=_e.offset;if(ge.isInstancedInterleavedBuffer){for(let Xe=0;Xe<re.locationSize;Xe++)x(re.location+Xe,ge.meshPerAttribute);if(C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0)O._maxInstanceCount=ge.meshPerAttribute*ge.count}else for(let Xe=0;Xe<re.locationSize;Xe++)g(re.location+Xe);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let Xe=0;Xe<re.locationSize;Xe++)E(re.location+Xe,be/re.locationSize,J,Pe,Le*me,(nt+be/re.locationSize*Xe)*me,Ae)}else{if(_e.isInstancedBufferAttribute){for(let ge=0;ge<re.locationSize;ge++)x(re.location+ge,_e.meshPerAttribute);if(C.isInstancedMesh!==!0&&O._maxInstanceCount===void 0)O._maxInstanceCount=_e.meshPerAttribute*_e.count}else for(let ge=0;ge<re.locationSize;ge++)g(re.location+ge);e.bindBuffer(e.ARRAY_BUFFER,Ke);for(let ge=0;ge<re.locationSize;ge++)E(re.location+ge,be/re.locationSize,J,Pe,be*me,be/re.locationSize*ge*me,Ae)}}else if(X!==void 0){let Pe=X[ee];if(Pe!==void 0)switch(Pe.length){case 2:e.vertexAttrib2fv(re.location,Pe);break;case 3:e.vertexAttrib3fv(re.location,Pe);break;case 4:e.vertexAttrib4fv(re.location,Pe);break;default:e.vertexAttrib1fv(re.location,Pe)}}}}T()}function L(){R();for(let C in s){let W=s[C];for(let Z in W){let O=W[Z];for(let q in O){let G=O[q];for(let X in G)f(G[X].object),delete G[X];delete O[q]}}delete s[C]}}function I(C){if(s[C.id]===void 0)return;let W=s[C.id];for(let Z in W){let O=W[Z];for(let q in O){let G=O[q];for(let X in G)f(G[X].object),delete G[X];delete O[q]}}delete s[C.id]}function P(C){for(let W in s){let Z=s[W];for(let O in Z){let q=Z[O];if(q[C.id]===void 0)continue;let G=q[C.id];for(let X in G)f(G[X].object),delete G[X];delete q[C.id]}}}function S(C){for(let W in s){let Z=s[W],O=C.isInstancedMesh===!0?C.id:0,q=Z[O];if(q===void 0)continue;for(let G in q){let X=q[G];for(let ee in X)f(X[ee].object),delete X[ee];delete q[G]}if(delete Z[O],Object.keys(Z).length===0)delete s[W]}}function R(){if(H(),o=!0,a===r)return;a=r,u(a.object)}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:R,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:T}}function r0(e,t,n){let s;function r(h){s=h}function a(h,u){e.drawArrays(s,h,u),n.update(u,s,1)}function o(h,u,f){if(f===0)return;e.drawArraysInstanced(s,h,u,f),n.update(u,s,f)}function c(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,s,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c}function a0(e,t,n,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){if(P!==Pn&&s.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function c(P){let S=P===Yt&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(P!==Tn&&s.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zn&&!S)return!1;return!0}function h(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let u=n.precision!==void 0?n.precision:"highp",f=h(u);if(f!==u)Ee("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f;let m=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&p===!1)Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),w=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),L=e.getParameter(e.MAX_SAMPLES),I=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:w,maxSamples:L,samples:I}}function o0(e){let t=this,n=null,s=0,r=!1,a=!1,o=new Vn,c=new Fe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let _=m.length!==0||p||s!==0||r;return r=p,s=m.length,_},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,p){n=f(m,p,0)},this.setState=function(m,p,_){let{clippingPlanes:v,clipIntersection:M,clipShadows:g}=m,x=e.get(m);if(!r||v===null||v.length===0||a&&!g)if(a)f(null);else u();else{let T=a?0:s,E=T*4,w=x.clippingState||null;h.value=w,w=f(v,p,E,_);for(let L=0;L!==E;++L)w[L]=n[L];x.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function u(){if(h.value!==n)h.value=n,h.needsUpdate=s>0;t.numPlanes=s,t.numIntersection=0}function f(m,p,_,v){let M=m!==null?m.length:0,g=null;if(M!==0){if(g=h.value,v!==!0||g===null){let x=_+M*4,T=p.matrixWorldInverse;if(c.getNormalMatrix(T),g===null||g.length<x)g=new Float32Array(x);for(let E=0,w=_;E!==M;++E,w+=4)o.copy(m[E]).applyMatrix4(T,c),o.normal.toArray(g,w),g[w+3]=o.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Mi=4,Du=[0.125,0.215,0.35,0.446,0.526,0.582],Xi=20,l0=256,Fr=new ti,Uu=new we,nc=null,ic=0,sc=0,rc=!1,c0=new N;class lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=0.1,s=100,r={}){let{size:a=256,position:o=c0}=r;nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();if(c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0)this._blur(c,0,0,t);return this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,sc),this._renderer.xr.enabled=rc,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===bs||e.mapping===Di)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Yt,format:Pn,colorSpace:rn,depthBuffer:!1},s=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Fu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=h0(r)),this._blurMaterial=d0(r,e,t),this._ggxMaterial=u0(r,e,t)}return s}_compileMaterial(e){let t=new Be(new _t,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,s,r){let c=new It(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,{autoClear:m,toneMapping:p}=f;if(f.getClearColor(Uu),f.toneMapping=bn,f.autoClear=!1,f.state.buffers.depth.getReversed())f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Be(new Jn,new Bt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}));let v=this._backgroundBox,M=v.material,g=!1,x=e.background;if(x){if(x.isColor)M.color.copy(x),e.background=null,g=!0}else M.color.copy(Uu),g=!0;for(let T=0;T<6;T++){let E=T%3;if(E===0)c.up.set(0,h[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z);else if(E===1)c.up.set(0,0,h[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z);else c.up.set(0,h[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]);let w=this._cubeSize;if(Gs(s,E*w,T>2?w:0,w,w),f.setRenderTarget(s),g)f.render(v,c);f.render(e,c)}f.toneMapping=p,f.autoClear=m,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===Di;if(s){if(this._cubemapMaterial===null)this._cubemapMaterial=Bu();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Ou();let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Gs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(h*h-u*u),m=0+h*1.25,p=f*m,{_lodMax:_}=this,v=this._sizeLods[n],M=3*v*(n>_-Mi?n-_+Mi:0),g=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,Gs(r,M,g,3*v,2*v),s.setRenderTarget(r),s.render(o,Fr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Gs(e,M,g,3*v,2*v),s.setRenderTarget(e),s.render(o,Fr)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;if(a!=="latitudinal"&&a!=="longitudinal")De("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[s];f.material=h;let m=h.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),v=r/_,M=isFinite(r)?1+Math.floor(u*v):Xi;if(M>Xi)Ee(`sigmaRadians, ${r}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Xi}`);let g=[],x=0;for(let I=0;I<Xi;++I){let P=I/v,S=Math.exp(-P*P/2);if(g.push(S),I===0)x+=S;else if(I<M)x+=2*S}for(let I=0;I<g.length;I++)g[I]=g[I]/x;if(m.envMap.value=e.texture,m.samples.value=M,m.weights.value=g,m.latitudinal.value=a==="latitudinal",o)m.poleAxis.value=o;let{_lodMax:T}=this;m.dTheta.value=_,m.mipInt.value=T-n;let E=this._sizeLods[s],w=3*E*(s>T-Mi?s-T+Mi:0),L=4*(this._cubeSize-E);Gs(t,w,L,3*E,2*E),c.setRenderTarget(t),c.render(f,Fr)}}function h0(e){let t=[],n=[],s=[],r=e,a=e-Mi+1+Du.length;for(let o=0;o<a;o++){let c=Math.pow(2,r);t.push(c);let h=1/c;if(o>e-Mi)h=Du[o-e+Mi-1];else if(o===0)h=0;n.push(h);let u=1/(c-2),f=-u,m=1+u,p=[f,f,m,f,m,m,f,f,m,m,f,m],_=6,v=6,M=3,g=2,x=1,T=new Float32Array(M*v*_),E=new Float32Array(g*v*_),w=new Float32Array(x*v*_);for(let I=0;I<_;I++){let P=I%3*2/3-1,S=I>2?0:-1,R=[P,S,0,P+0.6666666666666666,S,0,P+0.6666666666666666,S+1,0,P,S,0,P+0.6666666666666666,S+1,0,P,S+1,0];T.set(R,M*v*I),E.set(p,g*v*I);let H=[I,I,I,I,I,I];w.set(H,x*v*I)}let L=new _t;if(L.setAttribute("position",new Tt(T,M)),L.setAttribute("uv",new Tt(E,g)),L.setAttribute("faceIndex",new Tt(w,x)),s.push(new Be(L,null)),r>Mi)r--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function Fu(e,t,n){let s=new Ut(e,t,n);return s.texture.mapping=Mr,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gs(e,t,n,s,r){e.viewport.set(t,n,s,r),e.scissor.set(t,n,s,r)}function u0(e,t,n){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:io(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function d0(e,t,n){let s=new Float32Array(Xi),r=new N(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ou(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Bu(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class uc extends Ut{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jn(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:un});r.uniforms.tEquirect.value=t;let a=new Be(s,r),o=t.minFilter;if(t.minFilter===In)t.minFilter=Dt;return new Jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function f0(e){let t=new WeakMap,n=new WeakMap,s=null;function r(p,_=!1){if(p===null||p===void 0)return null;if(_)return o(p);return a(p)}function a(p){if(p&&p.isTexture){let _=p.mapping;if(_===Ts||_===Ea)if(t.has(p)){let v=t.get(p).texture;return c(v,p.mapping)}else{let v=p.image;if(v&&v.height>0){let M=new uc(v.height);return M.fromEquirectangularTexture(e,p),t.set(p,M),p.addEventListener("dispose",u),c(M.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let _=p.mapping,v=_===Ts||_===Ea,M=_===bs||_===Di;if(v||M){let g=n.get(p),x=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x){if(s===null)s=new lc(e);return g=v?s.fromEquirectangular(p,g):s.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,n.set(p,g),g.texture}else if(g!==void 0)return g.texture;else{let T=p.image;if(v&&T&&T.height>0||M&&T&&h(T)){if(s===null)s=new lc(e);return g=v?s.fromEquirectangular(p):s.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,n.set(p,g),p.addEventListener("dispose",f),g.texture}else return null}}}return p}function c(p,_){if(_===Ts)p.mapping=bs;else if(_===Ea)p.mapping=Di;return p}function h(p){let _=0,v=6;for(let M=0;M<v;M++)if(p[M]!==void 0)_++;return _===v}function u(p){let _=p.target;_.removeEventListener("dispose",u);let v=t.get(_);if(v!==void 0)t.delete(_),v.dispose()}function f(p){let _=p.target;_.removeEventListener("dispose",f);let v=n.get(_);if(v!==void 0)n.delete(_),v.dispose()}function m(){if(t=new WeakMap,n=new WeakMap,s!==null)s.dispose(),s=null}return{get:r,dispose:m}}function p0(e){let t={};function n(s){if(t[s]!==void 0)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){let r=n(s);if(r===null)Sa("WebGLRenderer: "+s+" extension not supported.");return r}}}function m0(e,t,n,s){let r={},a=new WeakMap;function o(m){let p=m.target;if(p.index!==null)t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete r[p.id];let _=a.get(p);if(_)t.remove(_),a.delete(p);if(s.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0)delete p._maxInstanceCount;n.memory.geometries--}function c(m,p){if(r[p.id]===!0)return p;return p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++,p}function h(m){let p=m.attributes;for(let _ in p)t.update(p[_],e.ARRAY_BUFFER)}function u(m){let p=[],_=m.index,v=m.attributes.position,M=0;if(v===void 0)return;if(_!==null){let T=_.array;M=_.version;for(let E=0,w=T.length;E<w;E+=3){let L=T[E+0],I=T[E+1],P=T[E+2];p.push(L,I,I,P,P,L)}}else{let T=v.array;M=v.version;for(let E=0,w=T.length/3-1;E<w;E+=3){let L=E+0,I=E+1,P=E+2;p.push(L,I,I,P,P,L)}}let g=new(v.count>=65535?Ha:ka)(p,1);g.version=M;let x=a.get(m);if(x)t.remove(x);a.set(m,g)}function f(m){let p=a.get(m);if(p){let _=m.index;if(_!==null){if(p.version<_.version)u(m)}}else u(m);return a.get(m)}return{get:c,update:h,getWireframeAttribute:f}}function g0(e,t,n){let s;function r(m){s=m}let a,o;function c(m){a=m.type,o=m.bytesPerElement}function h(m,p){e.drawElements(s,p,a,m*o),n.update(p,s,1)}function u(m,p,_){if(_===0)return;e.drawElementsInstanced(s,p,a,m*o,_),n.update(p,s,_)}function f(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,p,0,a,m,0,_);let M=0;for(let g=0;g<_;g++)M+=p[g];n.update(M,s,1)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function _0(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,o,c){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=c*(a/3);break;case e.LINES:n.lines+=c*(a/2);break;case e.LINE_STRIP:n.lines+=c*(a-1);break;case e.LINE_LOOP:n.lines+=c*a;break;case e.POINTS:n.points+=c*a;break;default:De("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:s}}function x0(e,t,n){let s=new WeakMap,r=new ct;function a(o,c,h){let u=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=f!==void 0?f.length:0,p=s.get(c);if(p===void 0||p.count!==m){let R=function(){P.dispose(),s.delete(c),c.removeEventListener("dispose",R)};if(p!==void 0)p.texture.dispose();let _=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],T=c.morphAttributes.color||[],E=0;if(_===!0)E=1;if(v===!0)E=2;if(M===!0)E=3;let w=c.attributes.position.count*E,L=1;if(w>t.maxTextureSize)L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize;let I=new Float32Array(w*L*4*m),P=new Oa(I,w,L,m);P.type=Zn,P.needsUpdate=!0;let S=E*4;for(let H=0;H<m;H++){let C=g[H],W=x[H],Z=T[H],O=w*L*4*H;for(let q=0;q<C.count;q++){let G=q*S;if(_===!0)r.fromBufferAttribute(C,q),I[O+G+0]=r.x,I[O+G+1]=r.y,I[O+G+2]=r.z,I[O+G+3]=0;if(v===!0)r.fromBufferAttribute(W,q),I[O+G+4]=r.x,I[O+G+5]=r.y,I[O+G+6]=r.z,I[O+G+7]=0;if(M===!0)r.fromBufferAttribute(Z,q),I[O+G+8]=r.x,I[O+G+9]=r.y,I[O+G+10]=r.z,I[O+G+11]=Z.itemSize===4?r.w:1}}p={count:m,texture:P,size:new Se(w,L)},s.set(c,p),c.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let _=0;for(let M=0;M<u.length;M++)_+=u[M];let v=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(e,"morphTargetBaseInfluence",v),h.getUniforms().setValue(e,"morphTargetInfluences",u)}h.getUniforms().setValue(e,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:a}}function v0(e,t,n,s,r){let a=new WeakMap;function o(u){let f=r.render.frame,m=u.geometry,p=t.get(u,m);if(a.get(p)!==f)t.update(p),a.set(p,f);if(u.isInstancedMesh){if(u.hasEventListener("dispose",h)===!1)u.addEventListener("dispose",h);if(a.get(u)!==f){if(n.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null)n.update(u.instanceColor,e.ARRAY_BUFFER);a.set(u,f)}}if(u.isSkinnedMesh){let _=u.skeleton;if(a.get(_)!==f)_.update(),a.set(_,f)}return p}function c(){a=new WeakMap}function h(u){let f=u.target;if(f.removeEventListener("dispose",h),s.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null)n.remove(f.instanceColor)}return{update:o,dispose:c}}var y0={[mr]:"LINEAR_TONE_MAPPING",[gr]:"REINHARD_TONE_MAPPING",[_r]:"CINEON_TONE_MAPPING",[Ni]:"ACES_FILMIC_TONE_MAPPING",[vr]:"AGX_TONE_MAPPING",[yr]:"NEUTRAL_TONE_MAPPING",[xr]:"CUSTOM_TONE_MAPPING"};function M0(e,t,n,s,r){let a=new Ut(t,n,{type:e,depthBuffer:s,stencilBuffer:r,depthTexture:s?new _i(t,n):void 0}),o=new Ut(t,n,{type:Yt,depthBuffer:!1,stencilBuffer:!1}),c=new _t;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let h=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Be(c,h),f=new ti(-1,1,1,-1,0,1),m=null,p=null,_=!1,v,M=null,g=[],x=!1;this.setSize=function(T,E){a.setSize(T,E),o.setSize(T,E);for(let w=0;w<g.length;w++){let L=g[w];if(L.setSize)L.setSize(T,E)}},this.setEffects=function(T){g=T,x=g.length>0&&g[0].isRenderPass===!0;let{width:E,height:w}=a;for(let L=0;L<g.length;L++){let I=g[L];if(I.setSize)I.setSize(E,w)}},this.begin=function(T,E){if(_)return!1;if(T.toneMapping===bn&&g.length===0)return!1;if(M=E,E!==null){let{width:w,height:L}=E;if(a.width!==w||a.height!==L)this.setSize(w,L)}if(x===!1)T.setRenderTarget(a);return v=T.toneMapping,T.toneMapping=bn,!0},this.hasRenderPass=function(){return x},this.end=function(T,E){T.toneMapping=v,_=!0;let w=a,L=o;for(let I=0;I<g.length;I++){let P=g[I];if(P.enabled===!1)continue;if(P.render(T,L,w,E),P.needsSwap!==!1){let S=w;w=L,L=S}}if(m!==T.outputColorSpace||p!==T.toneMapping){if(m=T.outputColorSpace,p=T.toneMapping,h.defines={},Ge.getTransfer(m)===at)h.defines.SRGB_TRANSFER="";let I=y0[p];if(I)h.defines[I]="";h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,T.setRenderTarget(M),T.render(u,f),M=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){if(a.depthTexture)a.depthTexture.dispose();a.dispose(),o.dispose(),c.dispose(),h.dispose()}}var sd=new bt,cc=new _i(1,1),rd=new Oa,ad=new Bl,od=new qa,zu=[],ku=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function Vs(e,t,n){let s=e[0];if(s<=0||s>0)return e;let r=t*n,a=zu[r];if(a===void 0)a=new Float32Array(r),zu[r]=a;if(t!==0){s.toArray(a,0);for(let o=1,c=0;o!==t;++o)c+=n,e[o].toArray(a,c)}return a}function Pt(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function Lt(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function so(e,t){let n=ku[t];if(n===void 0)n=new Int32Array(t),ku[t]=n;for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function S0(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function b0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Pt(n,t))return;e.uniform2fv(this.addr,t),Lt(n,t)}}function T0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(Pt(n,t))return;e.uniform3fv(this.addr,t),Lt(n,t)}}function E0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Pt(n,t))return;e.uniform4fv(this.addr,t),Lt(n,t)}}function w0(e,t){let n=this.cache,s=t.elements;if(s===void 0){if(Pt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lt(n,t)}else{if(Pt(n,s))return;Vu.set(s),e.uniformMatrix2fv(this.addr,!1,Vu),Lt(n,s)}}function A0(e,t){let n=this.cache,s=t.elements;if(s===void 0){if(Pt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lt(n,t)}else{if(Pt(n,s))return;Gu.set(s),e.uniformMatrix3fv(this.addr,!1,Gu),Lt(n,s)}}function R0(e,t){let n=this.cache,s=t.elements;if(s===void 0){if(Pt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lt(n,t)}else{if(Pt(n,s))return;Hu.set(s),e.uniformMatrix4fv(this.addr,!1,Hu),Lt(n,s)}}function C0(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function I0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Pt(n,t))return;e.uniform2iv(this.addr,t),Lt(n,t)}}function P0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Pt(n,t))return;e.uniform3iv(this.addr,t),Lt(n,t)}}function L0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Pt(n,t))return;e.uniform4iv(this.addr,t),Lt(n,t)}}function N0(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function D0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(Pt(n,t))return;e.uniform2uiv(this.addr,t),Lt(n,t)}}function U0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(Pt(n,t))return;e.uniform3uiv(this.addr,t),Lt(n,t)}}function F0(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(Pt(n,t))return;e.uniform4uiv(this.addr,t),Lt(n,t)}}function O0(e,t,n){let s=this.cache,r=n.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;let a;if(this.type===e.SAMPLER_2D_SHADOW)cc.compareFunction=n.isReversedDepthBuffer()?Fa:Ua,a=cc;else a=sd;n.setTexture2D(t||a,r)}function B0(e,t,n){let s=this.cache,r=n.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;n.setTexture3D(t||ad,r)}function z0(e,t,n){let s=this.cache,r=n.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;n.setTextureCube(t||od,r)}function k0(e,t,n){let s=this.cache,r=n.allocateTextureUnit();if(s[0]!==r)e.uniform1i(this.addr,r),s[0]=r;n.setTexture2DArray(t||rd,r)}function H0(e){switch(e){case 5126:return S0;case 35664:return b0;case 35665:return T0;case 35666:return E0;case 35674:return w0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return I0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return N0;case 36294:return D0;case 36295:return U0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function G0(e,t){e.uniform1fv(this.addr,t)}function V0(e,t){let n=Vs(t,this.size,2);e.uniform2fv(this.addr,n)}function W0(e,t){let n=Vs(t,this.size,3);e.uniform3fv(this.addr,n)}function X0(e,t){let n=Vs(t,this.size,4);e.uniform4fv(this.addr,n)}function q0(e,t){let n=Vs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Y0(e,t){let n=Vs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Z0(e,t){let n=Vs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function K0(e,t){e.uniform1iv(this.addr,t)}function J0(e,t){e.uniform2iv(this.addr,t)}function $0(e,t){e.uniform3iv(this.addr,t)}function j0(e,t){e.uniform4iv(this.addr,t)}function Q0(e,t){e.uniform1uiv(this.addr,t)}function e_(e,t){e.uniform2uiv(this.addr,t)}function t_(e,t){e.uniform3uiv(this.addr,t)}function n_(e,t){e.uniform4uiv(this.addr,t)}function i_(e,t,n){let s=this.cache,r=t.length,a=so(n,r);if(!Pt(s,a))e.uniform1iv(this.addr,a),Lt(s,a);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=cc;else o=sd;for(let c=0;c!==r;++c)n.setTexture2D(t[c]||o,a[c])}function s_(e,t,n){let s=this.cache,r=t.length,a=so(n,r);if(!Pt(s,a))e.uniform1iv(this.addr,a),Lt(s,a);for(let o=0;o!==r;++o)n.setTexture3D(t[o]||ad,a[o])}function r_(e,t,n){let s=this.cache,r=t.length,a=so(n,r);if(!Pt(s,a))e.uniform1iv(this.addr,a),Lt(s,a);for(let o=0;o!==r;++o)n.setTextureCube(t[o]||od,a[o])}function a_(e,t,n){let s=this.cache,r=t.length,a=so(n,r);if(!Pt(s,a))e.uniform1iv(this.addr,a),Lt(s,a);for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||rd,a[o])}function o_(e){switch(e){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return $0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}class ld{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H0(t.type)}}class cd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}}class hd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}}var ac=/(\w+)(\])?(\[|\.)?/g;function Wu(e,t){e.seq.push(t),e.map[t.id]=t}function l_(e,t,n){let s=e.name,r=s.length;ac.lastIndex=0;while(!0){let a=ac.exec(s),o=ac.lastIndex,c=a[1],h=a[2]==="]",u=a[3];if(h)c=c|0;if(u===void 0||u==="["&&o+2===r){Wu(n,u===void 0?new ld(c,e,t):new cd(c,e,t));break}else{let m=n.map[c];if(m===void 0)m=new hd(c),Wu(n,m);n=m}}}class zr{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);l_(o,c,this)}let s=[],r=[];for(let a of this.seq)if(a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW)s.push(a);else r.push(a);if(s.length>0)this.seq=s.concat(r)}setValue(e,t,n,s){let r=this.map[t];if(r!==void 0)r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];if(s!==void 0)this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];if(c.needsUpdate!==!1)o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];if(a.id in t)n.push(a)}return n}}function Xu(e,t,n){let s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}var c_=37297,h_=0;function u_(e,t){let n=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let o=r;o<a;o++){let c=o+1;s.push(`${c===t?">":" "} ${c}: ${n[o]}`)}return s.join(`
`)}var qu=new Fe;function d_(e){Ge._getMatrix(qu,Ge.workingColorSpace,e);let t=`mat3( ${qu.elements.map((n)=>n.toFixed(4))} )`;switch(Ge.getTransfer(e)){case Ll:return[t,"LinearTransferOETF"];case at:return[t,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Yu(e,t,n){let s=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(s&&a==="")return"";let o=/ERROR: 0:(\d+)/.exec(a);if(o){let c=parseInt(o[1]);return n.toUpperCase()+`

`+a+`

`+u_(e.getShaderSource(t),c)}else return a}function f_(e,t){let n=d_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var p_={[mr]:"Linear",[gr]:"Reinhard",[_r]:"Cineon",[Ni]:"ACESFilmic",[vr]:"AgX",[yr]:"Neutral",[xr]:"Custom"};function m_(e,t){let n=p_[t];if(n===void 0)return Ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var no=new N;function g_(){Ge.getLuminanceCoefficients(no);let e=no.x.toFixed(4),t=no.y.toFixed(4),n=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function __(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function x_(e){let t=[];for(let n in e){let s=e[n];if(s===!1)continue;t.push("#define "+n+" "+s)}return t.join(`
`)}function v_(e,t){let n={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),o=a.name,c=1;if(a.type===e.FLOAT_MAT2)c=2;if(a.type===e.FLOAT_MAT3)c=3;if(a.type===e.FLOAT_MAT4)c=4;n[o]={type:a.type,location:e.getAttribLocation(t,o),locationSize:c}}return n}function Br(e){return e!==""}function Zu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(e){return e.replace(y_,S_)}var M_=new Map;function S_(e,t){let n=We[t];if(n===void 0){let s=M_.get(t);if(s!==void 0)n=We[s],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw Error("Can not resolve #include <"+t+">")}return hc(n)}var b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(e){return e.replace(b_,T_)}function T_(e,t,n,s){let r="";for(let a=parseInt(t);a<parseInt(n);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function $u(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var E_={[Pi]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function w_(e){return E_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var A_={[bs]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function R_(e){if(e.envMap===!1)return"ENVMAP_TYPE_CUBE";return A_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var C_={[Di]:"ENVMAP_MODE_REFRACTION"};function I_(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return C_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P_={[su]:"ENVMAP_BLENDING_MULTIPLY",[ru]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function L_(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return P_[e.combine]||"ENVMAP_BLENDING_NONE"}function N_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function D_(e,t,n,s){let r=e.getContext(),{defines:a,vertexShader:o,fragmentShader:c}=n,h=w_(n),u=R_(n),f=I_(n),m=L_(n),p=N_(n),_=__(n),v=x_(a),M=r.createProgram(),g,x,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Br).join(`
`),g.length>0)g+=`
`;if(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Br).join(`
`),x.length>0)x+=`
`}else g=[$u(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),x=[$u(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bn?"#define TONE_MAPPING":"",n.toneMapping!==bn?We.tonemapping_pars_fragment:"",n.toneMapping!==bn?m_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,f_("linearToOutputTexel",n.outputColorSpace),g_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Br).join(`
`);if(o=hc(o),o=Zu(o,n),o=Ku(o,n),c=hc(c),c=Zu(c,n),c=Ku(c,n),o=Ju(o),c=Ju(c),n.isRawShaderMaterial!==!0)T=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,x=["#define varying in",n.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x;let E=T+g+o,w=T+x+c,L=Xu(r,r.VERTEX_SHADER,E),I=Xu(r,r.FRAGMENT_SHADER,w);if(r.attachShader(M,L),r.attachShader(M,I),n.index0AttributeName!==void 0)r.bindAttribLocation(M,0,n.index0AttributeName);else if(n.morphTargets===!0)r.bindAttribLocation(M,0,"position");r.linkProgram(M);function P(C){if(e.debug.checkShaderErrors){let W=r.getProgramInfoLog(M)||"",Z=r.getShaderInfoLog(L)||"",O=r.getShaderInfoLog(I)||"",q=W.trim(),G=Z.trim(),X=O.trim(),ee=!0,re=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ee=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(r,M,L,I);else{let _e=Yu(r,L,"vertex"),Pe=Yu(r,I,"fragment");De("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+_e+`
`+Pe)}else if(q!=="")Ee("WebGLProgram: Program Info Log:",q);else if(G===""||X==="")re=!1;if(re)C.diagnostics={runnable:ee,programLog:q,vertexShader:{log:G,prefix:g},fragmentShader:{log:X,prefix:x}}}r.deleteShader(L),r.deleteShader(I),S=new zr(r,M),R=v_(r,M)}let S;this.getUniforms=function(){if(S===void 0)P(this);return S};let R;this.getAttributes=function(){if(R===void 0)P(this);return R};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(H===!1)H=r.getProgramParameter(M,c_);return H},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=I,this}var U_=0;class ud{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let{vertexShader:t,fragmentShader:n}=e,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);if(a.has(s)===!1)a.add(s),s.usedTimes++;if(a.has(r)===!1)a.add(r),r.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new dd(e),t.set(e,n);return n}}class dd{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function F_(e){return e===Bi||e===La||e===Na}function O_(e,t,n,s,r,a){let o=new Ba,c=new ud,h=new Set,u=[],f=new Map,{logarithmicDepthBuffer:m,precision:p}=s,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){if(h.add(S),S===0)return"uv";return`uv${S}`}function M(S,R,H,C,W,Z){let O=C.fog,q=W.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ee=t.get(S.envMap||G,X),re=!!ee&&ee.mapping===Mr?ee.image.height:null,_e=_[S.type];if(S.precision!==null){if(p=s.getMaxPrecision(S.precision),p!==S.precision)Ee("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead.")}let Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,be=Pe!==void 0?Pe.length:0,st=0;if(q.morphAttributes.position!==void 0)st=1;if(q.morphAttributes.normal!==void 0)st=2;if(q.morphAttributes.color!==void 0)st=3;let Ke,J,me,Ae;if(_e){let ze=Nn[_e];Ke=ze.vertexShader,J=ze.fragmentShader}else Ke=S.vertexShader,J=S.fragmentShader,c.update(S),me=c.getVertexShaderID(S),Ae=c.getFragmentShaderID(S);let ge=e.getRenderTarget(),Le=e.state.buffers.depth.getReversed(),nt=W.isInstancedMesh===!0,Xe=W.isBatchedMesh===!0,$e=!!S.map,ht=!!S.matcap,ut=!!ee,Ve=!!S.aoMap,Ot=!!S.lightMap,zt=!!S.bumpMap,wt=!!S.normalMap,U=!!S.displacementMap,Xt=!!S.emissiveMap,je=!!S.metalnessMap,et=!!S.roughnessMap,fe=S.anisotropy>0,xt=S.clearcoat>0,Ne=S.dispersion>0,A=S.iridescence>0,y=S.sheen>0,B=S.transmission>0,Q=fe&&!!S.anisotropyMap,te=xt&&!!S.clearcoatMap,ie=xt&&!!S.clearcoatNormalMap,ce=xt&&!!S.clearcoatRoughnessMap,Y=A&&!!S.iridescenceMap,j=A&&!!S.iridescenceThicknessMap,le=y&&!!S.sheenColorMap,ye=y&&!!S.sheenRoughnessMap,ae=!!S.specularMap,he=!!S.specularColorMap,Ue=!!S.specularIntensityMap,He=B&&!!S.transmissionMap,qe=B&&!!S.thicknessMap,D=!!S.gradientMap,oe=!!S.alphaMap,K=S.alphaTest>0,se=!!S.alphaHash,Me=!!S.extensions,ne=bn;if(S.toneMapped){if(ge===null||ge.isXRRenderTarget===!0)ne=e.toneMapping}let Re={shaderID:_e,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:J,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Xe,batchingColor:Xe&&W._colorsTexture!==null,instancing:nt,instancingColor:nt&&W.instanceColor!==null,instancingMorph:nt&&W.morphTexture!==null,outputColorSpace:ge===null?e.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:ht,envMap:ut,envMapMode:ut&&ee.mapping,envMapCubeUVHeight:re,aoMap:Ve,lightMap:Ot,bumpMap:zt,normalMap:wt,displacementMap:U,emissiveMap:Xt,normalMapObjectSpace:wt&&S.normalMapType===pu,normalMapTangentSpace:wt&&S.normalMapType===Pl,packedNormalMap:wt&&S.normalMapType===Pl&&F_(S.normalMap.format),metalnessMap:je,roughnessMap:et,anisotropy:fe,anisotropyMap:Q,clearcoat:xt,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:ce,dispersion:Ne,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:j,sheen:y,sheenColorMap:le,sheenRoughnessMap:ye,specularMap:ae,specularColorMap:he,specularIntensityMap:Ue,transmission:B,transmissionMap:He,thicknessMap:qe,gradientMap:D,opaque:S.transparent===!1&&S.blending===pr&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:K,alphaHash:se,combine:S.combine,mapUv:$e&&v(S.map.channel),aoMapUv:Ve&&v(S.aoMap.channel),lightMapUv:Ot&&v(S.lightMap.channel),bumpMapUv:zt&&v(S.bumpMap.channel),normalMapUv:wt&&v(S.normalMap.channel),displacementMapUv:U&&v(S.displacementMap.channel),emissiveMapUv:Xt&&v(S.emissiveMap.channel),metalnessMapUv:je&&v(S.metalnessMap.channel),roughnessMapUv:et&&v(S.roughnessMap.channel),anisotropyMapUv:Q&&v(S.anisotropyMap.channel),clearcoatMapUv:te&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(S.sheenRoughnessMap.channel),specularMapUv:ae&&v(S.specularMap.channel),specularColorMapUv:he&&v(S.specularColorMap.channel),specularIntensityMapUv:Ue&&v(S.specularIntensityMap.channel),transmissionMapUv:He&&v(S.transmissionMap.channel),thicknessMapUv:qe&&v(S.thicknessMap.channel),alphaMapUv:oe&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(wt||fe),vertexNormals:!!q.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!q.attributes.uv&&($e||oe),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||q.attributes.normal===void 0&&wt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Le,skinning:W.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:st,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&H.length>0,shadowMapType:e.shadowMap.type,toneMapping:ne,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&Ge.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kt,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Me&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&S.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function g(S){let R=[];if(S.shaderID)R.push(S.shaderID);else R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID);if(S.defines!==void 0)for(let H in S.defines)R.push(H),R.push(S.defines[H]);if(S.isRawShaderMaterial===!1)x(R,S),T(R,S),R.push(e.outputColorSpace);return R.push(S.customProgramCacheKey),R.join()}function x(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function T(S,R){if(o.disableAll(),R.instancing)o.enable(0);if(R.instancingColor)o.enable(1);if(R.instancingMorph)o.enable(2);if(R.matcap)o.enable(3);if(R.envMap)o.enable(4);if(R.normalMapObjectSpace)o.enable(5);if(R.normalMapTangentSpace)o.enable(6);if(R.clearcoat)o.enable(7);if(R.iridescence)o.enable(8);if(R.alphaTest)o.enable(9);if(R.vertexColors)o.enable(10);if(R.vertexAlphas)o.enable(11);if(R.vertexUv1s)o.enable(12);if(R.vertexUv2s)o.enable(13);if(R.vertexUv3s)o.enable(14);if(R.vertexTangents)o.enable(15);if(R.anisotropy)o.enable(16);if(R.alphaHash)o.enable(17);if(R.batching)o.enable(18);if(R.dispersion)o.enable(19);if(R.batchingColor)o.enable(20);if(R.gradientMap)o.enable(21);if(R.packedNormalMap)o.enable(22);if(R.vertexNormals)o.enable(23);if(S.push(o.mask),o.disableAll(),R.fog)o.enable(0);if(R.useFog)o.enable(1);if(R.flatShading)o.enable(2);if(R.logarithmicDepthBuffer)o.enable(3);if(R.reversedDepthBuffer)o.enable(4);if(R.skinning)o.enable(5);if(R.morphTargets)o.enable(6);if(R.morphNormals)o.enable(7);if(R.morphColors)o.enable(8);if(R.premultipliedAlpha)o.enable(9);if(R.shadowMapEnabled)o.enable(10);if(R.doubleSided)o.enable(11);if(R.flipSided)o.enable(12);if(R.useDepthPacking)o.enable(13);if(R.dithering)o.enable(14);if(R.transmission)o.enable(15);if(R.sheen)o.enable(16);if(R.opaque)o.enable(17);if(R.pointsUvs)o.enable(18);if(R.decodeVideoTexture)o.enable(19);if(R.decodeVideoTextureEmissive)o.enable(20);if(R.alphaToCoverage)o.enable(21);if(R.numLightProbeGrids>0)o.enable(22);S.push(o.mask)}function E(S){let R=_[S.type],H;if(R){let C=Nn[R];H=$n.clone(C.uniforms)}else H=S.uniforms;return H}function w(S,R){let H=f.get(R);if(H!==void 0)++H.usedTimes;else H=new D_(e,R,S,r),u.push(H),f.set(R,H);return H}function L(S){if(--S.usedTimes===0){let R=u.indexOf(S);u[R]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function I(S){c.remove(S)}function P(){c.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:E,acquireProgram:w,releaseProgram:L,releaseShaderCache:I,programs:u,dispose:P}}function B_(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let c=e.get(o);if(c===void 0)c={},e.set(o,c);return c}function s(o){e.delete(o)}function r(o,c,h){e.get(o)[c]=h}function a(){e=new WeakMap}return{has:t,get:n,remove:s,update:r,dispose:a}}function z_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function ju(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Qu(){let e=[],t=0,n=[],s=[],r=[];function a(){t=0,n.length=0,s.length=0,r.length=0}function o(p){let _=0;if(p.isInstancedMesh)_+=2;if(p.isSkinnedMesh)_+=1;return _}function c(p,_,v,M,g,x){let T=e[t];if(T===void 0)T={id:p.id,object:p,geometry:_,material:v,materialVariant:o(p),groupOrder:M,renderOrder:p.renderOrder,z:g,group:x},e[t]=T;else T.id=p.id,T.object=p,T.geometry=_,T.material=v,T.materialVariant=o(p),T.groupOrder=M,T.renderOrder=p.renderOrder,T.z=g,T.group=x;return t++,T}function h(p,_,v,M,g,x){let T=c(p,_,v,M,g,x);if(v.transmission>0)s.push(T);else if(v.transparent===!0)r.push(T);else n.push(T)}function u(p,_,v,M,g,x){let T=c(p,_,v,M,g,x);if(v.transmission>0)s.unshift(T);else if(v.transparent===!0)r.unshift(T);else n.unshift(T)}function f(p,_){if(n.length>1)n.sort(p||z_);if(s.length>1)s.sort(_||ju);if(r.length>1)r.sort(_||ju)}function m(){for(let p=t,_=e.length;p<_;p++){let v=e[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:s,transparent:r,init:a,push:h,unshift:u,finish:m,sort:f}}function k_(){let e=new WeakMap;function t(s,r){let a=e.get(s),o;if(a===void 0)o=new Qu,e.set(s,[o]);else if(r>=a.length)o=new Qu,a.push(o);else o=a[r];return o}function n(){e=new WeakMap}return{get:t,dispose:n}}function H_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new we};break;case"SpotLight":n={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":n={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return e[t.id]=n,n}}}function G_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var V_=0;function W_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function X_(e){let t=new H_,n=G_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new N);let r=new N,a=new Oe,o=new Oe;function c(u){let f=0,m=0,p=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let _=0,v=0,M=0,g=0,x=0,T=0,E=0,w=0,L=0,I=0,P=0;u.sort(W_);for(let R=0,H=u.length;R<H;R++){let C=u[R],{color:W,intensity:Z,distance:O}=C,q=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===Bi)q=C.shadow.map.texture;else q=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)f+=W.r*Z,m+=W.g*Z,p+=W.b*Z;else if(C.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(C.sh.coefficients[G],Z);P++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,ee=n.get(C);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=C.shadow.matrix,T++}s.directional[_]=G,_++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(W).multiplyScalar(Z),G.distance=O,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,s.spot[M]=G;let X=C.shadow;if(C.map){if(s.spotLightMap[L]=C.map,L++,X.updateMatrices(C),C.castShadow)I++}if(s.spotLightMatrix[M]=X.matrix,C.castShadow){let ee=n.get(C);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,s.spotShadow[M]=ee,s.spotShadowMap[M]=q,w++}M++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(W).multiplyScalar(Z),G.halfWidth.set(C.width*0.5,0,0),G.halfHeight.set(0,C.height*0.5,0),s.rectArea[g]=G,g++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let X=C.shadow,ee=n.get(C);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,s.pointShadow[v]=ee,s.pointShadowMap[v]=q,s.pointShadowMatrix[v]=C.shadow.matrix,E++}s.point[v]=G,v++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(Z),G.groundColor.copy(C.groundColor).multiplyScalar(Z),s.hemi[x]=G,x++}}if(g>0)if(e.has("OES_texture_float_linear")===!0)s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2;else s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2;s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=p;let S=s.hash;if(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==M||S.rectAreaLength!==g||S.hemiLength!==x||S.numDirectionalShadows!==T||S.numPointShadows!==E||S.numSpotShadows!==w||S.numSpotMaps!==L||S.numLightProbes!==P)s.directional.length=_,s.spot.length=M,s.rectArea.length=g,s.point.length=v,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=w+L-I,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=P,S.directionalLength=_,S.pointLength=v,S.spotLength=M,S.rectAreaLength=g,S.hemiLength=x,S.numDirectionalShadows=T,S.numPointShadows=E,S.numSpotShadows=w,S.numSpotMaps=L,S.numLightProbes=P,s.version=V_++}function h(u,f){let m=0,p=0,_=0,v=0,M=0,g=f.matrixWorldInverse;for(let x=0,T=u.length;x<T;x++){let E=u[x];if(E.isDirectionalLight){let w=s.directional[m];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),m++}else if(E.isSpotLight){let w=s.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),_++}else if(E.isRectAreaLight){let w=s.rectArea[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),o.identity(),a.copy(E.matrixWorld),a.premultiply(g),o.extractRotation(a),w.halfWidth.set(E.width*0.5,0,0),w.halfHeight.set(0,E.height*0.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let w=s.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),p++}else if(E.isHemisphereLight){let w=s.hemi[M];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(g),M++}}}return{setup:c,setupView:h,state:s}}function ed(e){let t=new X_(e),n=[],s=[],r=[];function a(p){m.camera=p,n.length=0,s.length=0,r.length=0}function o(p){n.push(p)}function c(p){s.push(p)}function h(p){r.push(p)}function u(){t.setup(n)}function f(p){t.setupView(n,p)}let m={lightsArray:n,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:m,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:c,pushLightProbeGrid:h}}function q_(e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;if(o===void 0)c=new ed(e),t.set(r,[c]);else if(a>=o.length)c=new ed(e),o.push(c);else c=o[a];return c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],J_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],td=new Oe,Or=new N,oc=new N;function $_(e,t,n){let s=new Ir,r=new Se,a=new Se,o=new ct,c=new Hl,h=new Gl,u={},f=n.maxTextureSize,m={[pi]:Vt,[Vt]:pi,[Kt]:Kt},p=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Y_,fragmentShader:Z_}),_=p.clone();_.defines.HORIZONTAL_PASS=1;let v=new _t;v.setAttribute("position",new Tt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new Be(v,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pi;let x=this.type;this.render=function(I,P,S){if(g.enabled===!1)return;if(g.autoUpdate===!1&&g.needsUpdate===!1)return;if(I.length===0)return;if(this.type===Ih)Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pi;let R=e.getRenderTarget(),H=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),W=e.state;if(W.setBlending(un),W.buffers.depth.getReversed()===!0)W.buffers.color.setClear(0,0,0,0);else W.buffers.color.setClear(1,1,1,1);W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Z=x!==this.type;if(Z)P.traverse(function(O){if(O.material)if(Array.isArray(O.material))O.material.forEach((q)=>q.needsUpdate=!0);else O.material.needsUpdate=!0});for(let O=0,q=I.length;O<q;O++){let G=I[O],X=G.shadow;if(X===void 0){Ee("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let ee=X.getFrameExtents();if(r.multiply(ee),a.copy(X.mapSize),r.x>f||r.y>f){if(r.x>f)a.x=Math.floor(f/ee.x),r.x=a.x*ee.x,X.mapSize.x=a.x;if(r.y>f)a.y=Math.floor(f/ee.y),r.y=a.y*ee.y,X.mapSize.y=a.y}let re=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=re,X.map===null||Z===!0){if(X.map!==null){if(X.map.depthTexture!==null)X.map.depthTexture.dispose(),X.map.depthTexture=null;X.map.dispose()}if(this.type===Ms){if(G.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ut(r.x,r.y,{format:Bi,type:Yt,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new _i(r.x,r.y,Zn),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Fi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Jt,X.map.depthTexture.magFilter=Jt}else{if(G.isPointLight)X.map=new uc(r.x),X.map.depthTexture=new zl(r.x,gi);else X.map=new Ut(r.x,r.y),X.map.depthTexture=new _i(r.x,r.y,gi);if(X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Fi,this.type===Pi)X.map.depthTexture.compareFunction=re?Fa:Ua,X.map.depthTexture.minFilter=Dt,X.map.depthTexture.magFilter=Dt;else X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Jt,X.map.depthTexture.magFilter=Jt}X.camera.updateProjectionMatrix()}let _e=X.map.isWebGLCubeRenderTarget?6:1;for(let Pe=0;Pe<_e;Pe++){if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,Pe),e.clear();else{if(Pe===0)e.setRenderTarget(X.map),e.clear();let be=X.getViewport(Pe);o.set(a.x*be.x,a.y*be.y,a.x*be.z,a.y*be.w),W.viewport(o)}if(G.isPointLight){let{camera:be,matrix:st}=X,Ke=G.distance||be.far;if(Ke!==be.far)be.far=Ke,be.updateProjectionMatrix();Or.setFromMatrixPosition(G.matrixWorld),be.position.copy(Or),oc.copy(be.position),oc.add(K_[Pe]),be.up.copy(J_[Pe]),be.lookAt(oc),be.updateMatrixWorld(),st.makeTranslation(-Or.x,-Or.y,-Or.z),td.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(td,be.coordinateSystem,be.reversedDepth)}else X.updateMatrices(G);s=X.getFrustum(),w(P,S,X.camera,G,this.type)}if(X.isPointLightShadow!==!0&&this.type===Ms)T(X,S);X.needsUpdate=!1}x=this.type,g.needsUpdate=!1,e.setRenderTarget(R,H,C)};function T(I,P){let S=t.update(M);if(p.defines.VSM_SAMPLES!==I.blurSamples)p.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new Ut(r.x,r.y,{format:Bi,type:Yt});p.uniforms.shadow_pass.value=I.map.depthTexture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,e.setRenderTarget(I.mapPass),e.clear(),e.renderBufferDirect(P,null,S,p,M,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,e.setRenderTarget(I.map),e.clear(),e.renderBufferDirect(P,null,S,_,M,null)}function E(I,P,S,R){let H=null,C=S.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)H=C;else if(H=S.isPointLight===!0?h:c,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let W=H.uuid,Z=P.uuid,O=u[W];if(O===void 0)O={},u[W]=O;let q=O[Z];if(q===void 0)q=H.clone(),O[Z]=q,P.addEventListener("dispose",L);H=q}if(H.visible=P.visible,H.wireframe=P.wireframe,R===Ms)H.side=P.shadowSide!==null?P.shadowSide:P.side;else H.side=P.shadowSide!==null?P.shadowSide:m[P.side];if(H.alphaMap=P.alphaMap,H.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,H.map=P.map,H.clipShadows=P.clipShadows,H.clippingPlanes=P.clippingPlanes,H.clipIntersection=P.clipIntersection,H.displacementMap=P.displacementMap,H.displacementScale=P.displacementScale,H.displacementBias=P.displacementBias,H.wireframeLinewidth=P.wireframeLinewidth,H.linewidth=P.linewidth,S.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let W=e.properties.get(H);W.light=S}return H}function w(I,P,S,R,H){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&H===Ms)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,I.matrixWorld);let Z=t.update(I),O=I.material;if(Array.isArray(O)){let q=Z.groups;for(let G=0,X=q.length;G<X;G++){let ee=q[G],re=O[ee.materialIndex];if(re&&re.visible){let _e=E(I,re,R,H);I.onBeforeShadow(e,I,P,S,Z,_e,ee),e.renderBufferDirect(S,null,Z,_e,I,ee),I.onAfterShadow(e,I,P,S,Z,_e,ee)}}}else if(O.visible){let q=E(I,O,R,H);I.onBeforeShadow(e,I,P,S,Z,q,null),e.renderBufferDirect(S,null,Z,q,I,null),I.onAfterShadow(e,I,P,S,Z,q,null)}}}let W=I.children;for(let Z=0,O=W.length;Z<O;Z++)w(W[Z],P,S,R,H)}function L(I){I.target.removeEventListener("dispose",L);for(let S in u){let R=u[S],H=I.target.uuid;if(H in R)R[H].dispose(),delete R[H]}}}function j_(e,t){function n(){let D=!1,oe=new ct,K=null,se=new ct(0,0,0,0);return{setMask:function(Me){if(K!==Me&&!D)e.colorMask(Me,Me,Me,Me),K=Me},setLocked:function(Me){D=Me},setClear:function(Me,ne,Re,ze,At){if(At===!0)Me*=ze,ne*=ze,Re*=ze;if(oe.set(Me,ne,Re,ze),se.equals(oe)===!1)e.clearColor(Me,ne,Re,ze),se.copy(oe)},reset:function(){D=!1,K=null,se.set(-1,0,0,0)}}}function s(){let D=!1,oe=!1,K=null,se=null,Me=null;return{setReversed:function(ne){if(oe!==ne){let Re=t.get("EXT_clip_control");if(ne)Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT);else Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);oe=ne;let ze=Me;Me=null,this.setClear(ze)}},getReversed:function(){return oe},setTest:function(ne){if(ne)ge(e.DEPTH_TEST);else Le(e.DEPTH_TEST)},setMask:function(ne){if(K!==ne&&!D)e.depthMask(ne),K=ne},setFunc:function(ne){if(oe)ne=Tu[ne];if(se!==ne){switch(ne){case $h:e.depthFunc(e.NEVER);break;case jh:e.depthFunc(e.ALWAYS);break;case Qh:e.depthFunc(e.LESS);break;case qo:e.depthFunc(e.LEQUAL);break;case eu:e.depthFunc(e.EQUAL);break;case tu:e.depthFunc(e.GEQUAL);break;case nu:e.depthFunc(e.GREATER);break;case iu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}se=ne}},setLocked:function(ne){D=ne},setClear:function(ne){if(Me!==ne){if(Me=ne,oe)ne=1-ne;e.clearDepth(ne)}},reset:function(){D=!1,K=null,se=null,Me=null,oe=!1}}}function r(){let D=!1,oe=null,K=null,se=null,Me=null,ne=null,Re=null,ze=null,At=null;return{setTest:function(ot){if(!D)if(ot)ge(e.STENCIL_TEST);else Le(e.STENCIL_TEST)},setMask:function(ot){if(oe!==ot&&!D)e.stencilMask(ot),oe=ot},setFunc:function(ot,wn,_n){if(K!==ot||se!==wn||Me!==_n)e.stencilFunc(ot,wn,_n),K=ot,se=wn,Me=_n},setOp:function(ot,wn,_n){if(ne!==ot||Re!==wn||ze!==_n)e.stencilOp(ot,wn,_n),ne=ot,Re=wn,ze=_n},setLocked:function(ot){D=ot},setClear:function(ot){if(At!==ot)e.clearStencil(ot),At=ot},reset:function(){D=!1,oe=null,K=null,se=null,Me=null,ne=null,Re=null,ze=null,At=null}}}let a=new n,o=new s,c=new r,h=new WeakMap,u=new WeakMap,f={},m={},p={},_=new WeakMap,v=[],M=null,g=!1,x=null,T=null,E=null,w=null,L=null,I=null,P=null,S=new we(0,0,0),R=0,H=!1,C=null,W=null,Z=null,O=null,q=null,G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ee=0,re=e.getParameter(e.VERSION);if(re.indexOf("WebGL")!==-1)ee=parseFloat(/^WebGL (\d)/.exec(re)[1]),X=ee>=1;else if(re.indexOf("OpenGL ES")!==-1)ee=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),X=ee>=2;let _e=null,Pe={},be=e.getParameter(e.SCISSOR_BOX),st=e.getParameter(e.VIEWPORT),Ke=new ct().fromArray(be),J=new ct().fromArray(st);function me(D,oe,K,se){let Me=new Uint8Array(4),ne=e.createTexture();e.bindTexture(D,ne),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Re=0;Re<K;Re++)if(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)e.texImage3D(oe,0,e.RGBA,1,1,se,0,e.RGBA,e.UNSIGNED_BYTE,Me);else e.texImage2D(oe+Re,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Me);return ne}let Ae={};Ae[e.TEXTURE_2D]=me(e.TEXTURE_2D,e.TEXTURE_2D,1),Ae[e.TEXTURE_CUBE_MAP]=me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[e.TEXTURE_2D_ARRAY]=me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ae[e.TEXTURE_3D]=me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),c.setClear(0),ge(e.DEPTH_TEST),o.setFunc(qo),zt(!1),wt(Vo),ge(e.CULL_FACE),Ve(un);function ge(D){if(f[D]!==!0)e.enable(D),f[D]=!0}function Le(D){if(f[D]!==!1)e.disable(D),f[D]=!1}function nt(D,oe){if(p[D]!==oe){if(e.bindFramebuffer(D,oe),p[D]=oe,D===e.DRAW_FRAMEBUFFER)p[e.FRAMEBUFFER]=oe;if(D===e.FRAMEBUFFER)p[e.DRAW_FRAMEBUFFER]=oe;return!0}return!1}function Xe(D,oe){let K=v,se=!1;if(D){if(K=_.get(oe),K===void 0)K=[],_.set(oe,K);let Me=D.textures;if(K.length!==Me.length||K[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,Re=Me.length;ne<Re;ne++)K[ne]=e.COLOR_ATTACHMENT0+ne;K.length=Me.length,se=!0}}else if(K[0]!==e.BACK)K[0]=e.BACK,se=!0;if(se)e.drawBuffers(K)}function $e(D){if(M!==D)return e.useProgram(D),M=D,!0;return!1}let ht={[Ss]:e.FUNC_ADD,[Lh]:e.FUNC_SUBTRACT,[Nh]:e.FUNC_REVERSE_SUBTRACT};ht[Dh]=e.MIN,ht[Uh]=e.MAX;let ut={[Fh]:e.ZERO,[Oh]:e.ONE,[Bh]:e.SRC_COLOR,[kh]:e.SRC_ALPHA,[qh]:e.SRC_ALPHA_SATURATE,[Wh]:e.DST_COLOR,[Gh]:e.DST_ALPHA,[zh]:e.ONE_MINUS_SRC_COLOR,[Hh]:e.ONE_MINUS_SRC_ALPHA,[Xh]:e.ONE_MINUS_DST_COLOR,[Vh]:e.ONE_MINUS_DST_ALPHA,[Yh]:e.CONSTANT_COLOR,[Zh]:e.ONE_MINUS_CONSTANT_COLOR,[Kh]:e.CONSTANT_ALPHA,[Jh]:e.ONE_MINUS_CONSTANT_ALPHA};function Ve(D,oe,K,se,Me,ne,Re,ze,At,ot){if(D===un){if(g===!0)Le(e.BLEND),g=!1;return}if(g===!1)ge(e.BLEND),g=!0;if(D!==Ph){if(D!==x||ot!==H){if(T!==Ss||L!==Ss)e.blendEquation(e.FUNC_ADD),T=Ss,L=Ss;if(ot)switch(D){case pr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Li:e.blendFunc(e.ONE,e.ONE);break;case Wo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:De("WebGLState: Invalid blending: ",D);break}else switch(D){case pr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Li:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Wo:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xo:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",D);break}E=null,w=null,I=null,P=null,S.set(0,0,0),R=0,x=D,H=ot}return}if(Me=Me||oe,ne=ne||K,Re=Re||se,oe!==T||Me!==L)e.blendEquationSeparate(ht[oe],ht[Me]),T=oe,L=Me;if(K!==E||se!==w||ne!==I||Re!==P)e.blendFuncSeparate(ut[K],ut[se],ut[ne],ut[Re]),E=K,w=se,I=ne,P=Re;if(ze.equals(S)===!1||At!==R)e.blendColor(ze.r,ze.g,ze.b,At),S.copy(ze),R=At;x=D,H=!1}function Ot(D,oe){D.side===Kt?Le(e.CULL_FACE):ge(e.CULL_FACE);let K=D.side===Vt;if(oe)K=!K;zt(K),D.blending===pr&&D.transparent===!1?Ve(un):Ve(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);let se=D.stencilWrite;if(c.setTest(se),se)c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);Xt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ge(e.SAMPLE_ALPHA_TO_COVERAGE):Le(e.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){if(C!==D){if(D)e.frontFace(e.CW);else e.frontFace(e.CCW);C=D}}function wt(D){if(D!==Rh){if(ge(e.CULL_FACE),D!==W)if(D===Vo)e.cullFace(e.BACK);else if(D===Ch)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Le(e.CULL_FACE);W=D}function U(D){if(D!==Z){if(X)e.lineWidth(D);Z=D}}function Xt(D,oe,K){if(D){if(ge(e.POLYGON_OFFSET_FILL),O!==oe||q!==K){if(O=oe,q=K,o.getReversed())oe=-oe;e.polygonOffset(oe,K)}}else Le(e.POLYGON_OFFSET_FILL)}function je(D){if(D)ge(e.SCISSOR_TEST);else Le(e.SCISSOR_TEST)}function et(D){if(D===void 0)D=e.TEXTURE0+G-1;if(_e!==D)e.activeTexture(D),_e=D}function fe(D,oe,K){if(K===void 0)if(_e===null)K=e.TEXTURE0+G-1;else K=_e;let se=Pe[K];if(se===void 0)se={type:void 0,texture:void 0},Pe[K]=se;if(se.type!==D||se.texture!==oe){if(_e!==K)e.activeTexture(K),_e=K;e.bindTexture(D,oe||Ae[D]),se.type=D,se.texture=oe}}function xt(){let D=Pe[_e];if(D!==void 0&&D.type!==void 0)e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function Ne(){try{e.compressedTexImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function y(){try{e.texSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function B(){try{e.texSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Q(){try{e.compressedTexSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function te(){try{e.compressedTexSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function ie(){try{e.texStorage2D(...arguments)}catch(D){De("WebGLState:",D)}}function ce(){try{e.texStorage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Y(){try{e.texImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function j(){try{e.texImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function le(D){if(m[D]!==void 0)return m[D];else return e.getParameter(D)}function ye(D,oe){if(m[D]!==oe)e.pixelStorei(D,oe),m[D]=oe}function ae(D){if(Ke.equals(D)===!1)e.scissor(D.x,D.y,D.z,D.w),Ke.copy(D)}function he(D){if(J.equals(D)===!1)e.viewport(D.x,D.y,D.z,D.w),J.copy(D)}function Ue(D,oe){let K=u.get(oe);if(K===void 0)K=new WeakMap,u.set(oe,K);let se=K.get(D);if(se===void 0)se=e.getUniformBlockIndex(oe,D.name),K.set(D,se)}function He(D,oe){let se=u.get(oe).get(D);if(h.get(oe)!==se)e.uniformBlockBinding(oe,se,D.__bindingPointIndex),h.set(oe,se)}function qe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},m={},_e=null,Pe={},p={},_=new WeakMap,v=[],M=null,g=!1,x=null,T=null,E=null,w=null,L=null,I=null,P=null,S=new we(0,0,0),R=0,H=!1,C=null,W=null,Z=null,O=null,q=null,Ke.set(0,0,e.canvas.width,e.canvas.height),J.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),c.reset()}return{buffers:{color:a,depth:o,stencil:c},enable:ge,disable:Le,bindFramebuffer:nt,drawBuffers:Xe,useProgram:$e,setBlending:Ve,setMaterial:Ot,setFlipSided:zt,setCullFace:wt,setLineWidth:U,setPolygonOffset:Xt,setScissorTest:je,activeTexture:et,bindTexture:fe,unbindTexture:xt,compressedTexImage2D:Ne,compressedTexImage3D:A,texImage2D:Y,texImage3D:j,pixelStorei:ye,getParameter:le,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:ie,texStorage3D:ce,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:Q,compressedTexSubImage3D:te,scissor:ae,viewport:he,reset:qe}}function Q_(e,t,n,s,r,a,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Se,f=new WeakMap,m=new Set,p,_=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function M(A,y){return v?new OffscreenCanvas(A,y):vs("canvas")}function g(A,y,B){let Q=1,te=Ne(A);if(te.width>B||te.height>B)Q=B/Math.max(te.width,te.height);if(Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ie=Math.floor(Q*te.width),ce=Math.floor(Q*te.height);if(p===void 0)p=M(ie,ce);let Y=y?M(ie,ce):p;return Y.width=ie,Y.height=ce,Y.getContext("2d").drawImage(A,0,0,ie,ce),Ee("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ie+"x"+ce+")."),Y}else{if("data"in A)Ee("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+").");return A}return A}function x(A){return A.generateMipmaps}function T(A){e.generateMipmap(A)}function E(A){if(A.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(A.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function w(A,y,B,Q,te,ie=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce;if(Q){if(ce=t.get("EXT_texture_norm16"),!ce)Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y=y;if(y===e.RED){if(B===e.FLOAT)Y=e.R32F;if(B===e.HALF_FLOAT)Y=e.R16F;if(B===e.UNSIGNED_BYTE)Y=e.R8;if(B===e.UNSIGNED_SHORT&&ce)Y=ce.R16_EXT;if(B===e.SHORT&&ce)Y=ce.R16_SNORM_EXT}if(y===e.RED_INTEGER){if(B===e.UNSIGNED_BYTE)Y=e.R8UI;if(B===e.UNSIGNED_SHORT)Y=e.R16UI;if(B===e.UNSIGNED_INT)Y=e.R32UI;if(B===e.BYTE)Y=e.R8I;if(B===e.SHORT)Y=e.R16I;if(B===e.INT)Y=e.R32I}if(y===e.RG){if(B===e.FLOAT)Y=e.RG32F;if(B===e.HALF_FLOAT)Y=e.RG16F;if(B===e.UNSIGNED_BYTE)Y=e.RG8;if(B===e.UNSIGNED_SHORT&&ce)Y=ce.RG16_EXT;if(B===e.SHORT&&ce)Y=ce.RG16_SNORM_EXT}if(y===e.RG_INTEGER){if(B===e.UNSIGNED_BYTE)Y=e.RG8UI;if(B===e.UNSIGNED_SHORT)Y=e.RG16UI;if(B===e.UNSIGNED_INT)Y=e.RG32UI;if(B===e.BYTE)Y=e.RG8I;if(B===e.SHORT)Y=e.RG16I;if(B===e.INT)Y=e.RG32I}if(y===e.RGB_INTEGER){if(B===e.UNSIGNED_BYTE)Y=e.RGB8UI;if(B===e.UNSIGNED_SHORT)Y=e.RGB16UI;if(B===e.UNSIGNED_INT)Y=e.RGB32UI;if(B===e.BYTE)Y=e.RGB8I;if(B===e.SHORT)Y=e.RGB16I;if(B===e.INT)Y=e.RGB32I}if(y===e.RGBA_INTEGER){if(B===e.UNSIGNED_BYTE)Y=e.RGBA8UI;if(B===e.UNSIGNED_SHORT)Y=e.RGBA16UI;if(B===e.UNSIGNED_INT)Y=e.RGBA32UI;if(B===e.BYTE)Y=e.RGBA8I;if(B===e.SHORT)Y=e.RGBA16I;if(B===e.INT)Y=e.RGBA32I}if(y===e.RGB){if(B===e.UNSIGNED_SHORT&&ce)Y=ce.RGB16_EXT;if(B===e.SHORT&&ce)Y=ce.RGB16_SNORM_EXT;if(B===e.UNSIGNED_INT_5_9_9_9_REV)Y=e.RGB9_E5;if(B===e.UNSIGNED_INT_10F_11F_11F_REV)Y=e.R11F_G11F_B10F}if(y===e.RGBA){let j=ie?Ll:Ge.getTransfer(te);if(B===e.FLOAT)Y=e.RGBA32F;if(B===e.HALF_FLOAT)Y=e.RGBA16F;if(B===e.UNSIGNED_BYTE)Y=j===at?e.SRGB8_ALPHA8:e.RGBA8;if(B===e.UNSIGNED_SHORT&&ce)Y=ce.RGBA16_EXT;if(B===e.SHORT&&ce)Y=ce.RGBA16_SNORM_EXT;if(B===e.UNSIGNED_SHORT_4_4_4_4)Y=e.RGBA4;if(B===e.UNSIGNED_SHORT_5_5_5_1)Y=e.RGB5_A1}if(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)t.get("EXT_color_buffer_float");return Y}function L(A,y){let B;if(A){if(y===null||y===gi||y===As)B=e.DEPTH24_STENCIL8;else if(y===Zn)B=e.DEPTH32F_STENCIL8;else if(y===Sr)B=e.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===gi||y===As)B=e.DEPTH_COMPONENT24;else if(y===Zn)B=e.DEPTH_COMPONENT32F;else if(y===Sr)B=e.DEPTH_COMPONENT16;return B}function I(A,y){if(x(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==Dt)return Math.log2(Math.max(y.width,y.height))+1;else if(A.mipmaps!==void 0&&A.mipmaps.length>0)return A.mipmaps.length;else if(A.isCompressedTexture&&Array.isArray(A.image))return y.mipmaps.length;else return 1}function P(A){let y=A.target;if(y.removeEventListener("dispose",P),R(y),y.isVideoTexture)f.delete(y);if(y.isHTMLTexture)m.delete(y)}function S(A){let y=A.target;y.removeEventListener("dispose",S),C(y)}function R(A){let y=s.get(A);if(y.__webglInit===void 0)return;let B=A.source,Q=_.get(B);if(Q){let te=Q[y.__cacheKey];if(te.usedTimes--,te.usedTimes===0)H(A);if(Object.keys(Q).length===0)_.delete(B)}s.remove(A)}function H(A){let y=s.get(A);e.deleteTexture(y.__webglTexture);let B=A.source,Q=_.get(B);delete Q[y.__cacheKey],o.memory.textures--}function C(A){let y=s.get(A);if(A.depthTexture)A.depthTexture.dispose(),s.remove(A.depthTexture);if(A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let te=0;te<y.__webglFramebuffer[Q].length;te++)e.deleteFramebuffer(y.__webglFramebuffer[Q][te]);else e.deleteFramebuffer(y.__webglFramebuffer[Q]);if(y.__webglDepthbuffer)e.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)e.deleteFramebuffer(y.__webglFramebuffer[Q]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)e.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)e.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)if(y.__webglColorRenderbuffer[Q])e.deleteRenderbuffer(y.__webglColorRenderbuffer[Q])}if(y.__webglDepthRenderbuffer)e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=A.textures;for(let Q=0,te=B.length;Q<te;Q++){let ie=s.get(B[Q]);if(ie.__webglTexture)e.deleteTexture(ie.__webglTexture),o.memory.textures--;s.remove(B[Q])}s.remove(A)}let W=0;function Z(){W=0}function O(){return W}function q(A){W=A}function G(){let A=W;if(A>=r.maxTextures)Ee("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures);return W+=1,A}function X(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ee(A,y){let B=s.get(A);if(A.isVideoTexture)fe(A);if(A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let Q=A.image;if(Q===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(B,A,y);return}}else if(A.isExternalTexture)B.__webglTexture=A.sourceTexture?A.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+y)}function re(A,y){let B=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Le(B,A,y);return}else if(A.isExternalTexture)B.__webglTexture=A.sourceTexture?A.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+y)}function _e(A,y){let B=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Le(B,A,y);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+y)}function Pe(A,y){let B=s.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){nt(B,A,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+y)}let be={[mi]:e.REPEAT,[Es]:e.CLAMP_TO_EDGE,[wa]:e.MIRRORED_REPEAT},st={[Jt]:e.NEAREST,[Aa]:e.NEAREST_MIPMAP_NEAREST,[Ui]:e.NEAREST_MIPMAP_LINEAR,[Dt]:e.LINEAR,[ws]:e.LINEAR_MIPMAP_NEAREST,[In]:e.LINEAR_MIPMAP_LINEAR},Ke={[mu]:e.NEVER,[yu]:e.ALWAYS,[gu]:e.LESS,[Ua]:e.LEQUAL,[_u]:e.EQUAL,[Fa]:e.GEQUAL,[xu]:e.GREATER,[vu]:e.NOTEQUAL};function J(A,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Dt||y.magFilter===ws||y.magFilter===Ui||y.magFilter===In||y.minFilter===Dt||y.minFilter===ws||y.minFilter===Ui||y.minFilter===In))Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(A,e.TEXTURE_WRAP_S,be[y.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,be[y.wrapT]),A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)e.texParameteri(A,e.TEXTURE_WRAP_R,be[y.wrapR]);if(e.texParameteri(A,e.TEXTURE_MAG_FILTER,st[y.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction)e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Ke[y.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt)return;if(y.minFilter!==Ui&&y.minFilter!==In)return;if(y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function me(A,y){let B=!1;if(A.__webglInit===void 0)A.__webglInit=!0,y.addEventListener("dispose",P);let Q=y.source,te=_.get(Q);if(te===void 0)te={},_.set(Q,te);let ie=X(y);if(ie!==A.__cacheKey){if(te[ie]===void 0)te[ie]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,B=!0;te[ie].usedTimes++;let ce=te[A.__cacheKey];if(ce!==void 0){if(te[A.__cacheKey].usedTimes--,ce.usedTimes===0)H(y)}A.__cacheKey=ie,A.__webglTexture=te[ie].texture}return B}function Ae(A,y,B){return Math.floor(Math.floor(A/B)/y)}function ge(A,y,B,Q){let ie=A.updateRanges;if(ie.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,B,Q,y.data);else{ie.sort((ye,ae)=>ye.start-ae.start);let ce=0;for(let ye=1;ye<ie.length;ye++){let ae=ie[ce],he=ie[ye],Ue=ae.start+ae.count,He=Ae(he.start,y.width,4),qe=Ae(ae.start,y.width,4);if(he.start<=Ue+1&&He===qe&&Ae(he.start+he.count-1,y.width,4)===He)ae.count=Math.max(ae.count,he.start+he.count-ae.start);else++ce,ie[ce]=he}ie.length=ce+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),j=n.getParameter(e.UNPACK_SKIP_PIXELS),le=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let ye=0,ae=ie.length;ye<ae;ye++){let he=ie[ye],Ue=Math.floor(he.start/4),He=Math.ceil(he.count/4),qe=Ue%y.width,D=Math.floor(Ue/y.width),oe=He,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(e.UNPACK_SKIP_ROWS,D),n.texSubImage2D(e.TEXTURE_2D,0,qe,D,oe,1,B,Q,y.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,j),n.pixelStorei(e.UNPACK_SKIP_ROWS,le)}}function Le(A,y,B){let Q=e.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)Q=e.TEXTURE_2D_ARRAY;if(y.isData3DTexture)Q=e.TEXTURE_3D;let te=me(A,y),ie=y.source;n.bindTexture(Q,A.__webglTexture,e.TEXTURE0+B);let ce=s.get(ie);if(ie.version!==ce.__version||te===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=Ge.getPrimaries(Ge.workingColorSpace),se=y.colorSpace===zi?null:Ge.getPrimaries(y.colorSpace),Me=y.colorSpace===zi||K===se?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let j=g(y.image,!1,r.maxTextureSize);j=xt(y,j);let le=a.convert(y.format,y.colorSpace),ye=a.convert(y.type),ae=w(y.internalFormat,le,ye,y.normalized,y.colorSpace,y.isVideoTexture);J(Q,y);let he,Ue=y.mipmaps,He=y.isVideoTexture!==!0,qe=ce.__version===void 0||te===!0,D=ie.dataReady,oe=I(y,j);if(y.isDepthTexture){if(ae=L(y.format===Oi,y.type),qe)if(He)n.texStorage2D(e.TEXTURE_2D,1,ae,j.width,j.height);else n.texImage2D(e.TEXTURE_2D,0,ae,j.width,j.height,0,le,ye,null)}else if(y.isDataTexture)if(Ue.length>0){if(He&&qe)n.texStorage2D(e.TEXTURE_2D,oe,ae,Ue[0].width,Ue[0].height);for(let K=0,se=Ue.length;K<se;K++)if(he=Ue[K],He){if(D)n.texSubImage2D(e.TEXTURE_2D,K,0,0,he.width,he.height,le,ye,he.data)}else n.texImage2D(e.TEXTURE_2D,K,ae,he.width,he.height,0,le,ye,he.data);y.generateMipmaps=!1}else if(He){if(qe)n.texStorage2D(e.TEXTURE_2D,oe,ae,j.width,j.height);if(D)ge(y,j,le,ye)}else n.texImage2D(e.TEXTURE_2D,0,ae,j.width,j.height,0,le,ye,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(He&&qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,oe,ae,Ue[0].width,Ue[0].height,j.depth);for(let K=0,se=Ue.length;K<se;K++)if(he=Ue[K],y.format!==Pn)if(le!==null)if(He){if(D)if(y.layerUpdates.size>0){let Me=tc(he.width,he.height,y.format,y.type);for(let ne of y.layerUpdates){let Re=he.data.subarray(ne*Me/he.data.BYTES_PER_ELEMENT,(ne+1)*Me/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,ne,he.width,he.height,1,le,Re)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,j.depth,le,he.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,ae,he.width,he.height,j.depth,0,he.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(He){if(D)n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,j.depth,le,ye,he.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,K,ae,he.width,he.height,j.depth,0,le,ye,he.data)}else{if(He&&qe)n.texStorage2D(e.TEXTURE_2D,oe,ae,Ue[0].width,Ue[0].height);for(let K=0,se=Ue.length;K<se;K++)if(he=Ue[K],y.format!==Pn)if(le!==null)if(He){if(D)n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,he.width,he.height,le,he.data)}else n.compressedTexImage2D(e.TEXTURE_2D,K,ae,he.width,he.height,0,he.data);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(He){if(D)n.texSubImage2D(e.TEXTURE_2D,K,0,0,he.width,he.height,le,ye,he.data)}else n.texImage2D(e.TEXTURE_2D,K,ae,he.width,he.height,0,le,ye,he.data)}else if(y.isDataArrayTexture)if(He){if(qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,oe,ae,j.width,j.height,j.depth);if(D)if(y.layerUpdates.size>0){let K=tc(j.width,j.height,y.format,y.type);for(let se of y.layerUpdates){let Me=j.data.subarray(se*K/j.data.BYTES_PER_ELEMENT,(se+1)*K/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,se,j.width,j.height,1,le,ye,Me)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,ye,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ae,j.width,j.height,j.depth,0,le,ye,j.data);else if(y.isData3DTexture)if(He){if(qe)n.texStorage3D(e.TEXTURE_3D,oe,ae,j.width,j.height,j.depth);if(D)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,ye,j.data)}else n.texImage3D(e.TEXTURE_3D,0,ae,j.width,j.height,j.depth,0,le,ye,j.data);else if(y.isFramebufferTexture){if(qe)if(He)n.texStorage2D(e.TEXTURE_2D,oe,ae,j.width,j.height);else{let K=j.width,se=j.height;for(let Me=0;Me<oe;Me++)n.texImage2D(e.TEXTURE_2D,Me,ae,K,se,0,le,ye,null),K>>=1,se>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let K=e.canvas;if(!K.hasAttribute("layoutsubtree"))K.setAttribute("layoutsubtree","true");if(j.parentNode!==K){K.appendChild(j),m.add(y),K.onpaint=(ze)=>{let At=ze.changedElements;for(let ot of m)if(At.includes(ot.image))ot.needsUpdate=!0},K.requestPaint();return}let se=0,{RGBA:Me,RGBA:ne,UNSIGNED_BYTE:Re}=e;e.texElementImage2D(e.TEXTURE_2D,se,Me,ne,Re,j),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&qe){let K=Ne(Ue[0]);n.texStorage2D(e.TEXTURE_2D,oe,ae,K.width,K.height)}for(let K=0,se=Ue.length;K<se;K++)if(he=Ue[K],He){if(D)n.texSubImage2D(e.TEXTURE_2D,K,0,0,le,ye,he)}else n.texImage2D(e.TEXTURE_2D,K,ae,le,ye,he);y.generateMipmaps=!1}else if(He){if(qe){let K=Ne(j);n.texStorage2D(e.TEXTURE_2D,oe,ae,K.width,K.height)}if(D)n.texSubImage2D(e.TEXTURE_2D,0,0,0,le,ye,j)}else n.texImage2D(e.TEXTURE_2D,0,ae,le,ye,j);if(x(y))T(Q);if(ce.__version=ie.version,y.onUpdate)y.onUpdate(y)}A.__version=y.version}function nt(A,y,B){if(y.image.length!==6)return;let Q=me(A,y),te=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);let ie=s.get(te);if(te.version!==ie.__version||Q===!0){n.activeTexture(e.TEXTURE0+B);let ce=Ge.getPrimaries(Ge.workingColorSpace),Y=y.colorSpace===zi?null:Ge.getPrimaries(y.colorSpace),j=y.colorSpace===zi||ce===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let ne=0;ne<6;ne++){if(!le&&!ye)ae[ne]=g(y.image[ne],!0,r.maxCubemapSize);else ae[ne]=ye?y.image[ne].image:y.image[ne];ae[ne]=xt(y,ae[ne])}let he=ae[0],Ue=a.convert(y.format,y.colorSpace),He=a.convert(y.type),qe=w(y.internalFormat,Ue,He,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,oe=ie.__version===void 0||Q===!0,K=te.dataReady,se=I(y,he);J(e.TEXTURE_CUBE_MAP,y);let Me;if(le){if(D&&oe)n.texStorage2D(e.TEXTURE_CUBE_MAP,se,qe,he.width,he.height);for(let ne=0;ne<6;ne++){Me=ae[ne].mipmaps;for(let Re=0;Re<Me.length;Re++){let ze=Me[Re];if(y.format!==Pn)if(Ue!==null)if(D){if(K)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ze.width,ze.height,Ue,ze.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,qe,ze.width,ze.height,0,ze.data);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(D){if(K)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,ze.width,ze.height,Ue,He,ze.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,qe,ze.width,ze.height,0,Ue,He,ze.data)}}}else{if(Me=y.mipmaps,D&&oe){if(Me.length>0)se++;let ne=Ne(ae[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,se,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ye){if(D){if(K)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ae[ne].width,ae[ne].height,Ue,He,ae[ne].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,ae[ne].width,ae[ne].height,0,Ue,He,ae[ne].data);for(let Re=0;Re<Me.length;Re++){let At=Me[Re].image[ne].image;if(D){if(K)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,At.width,At.height,Ue,He,At.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,qe,At.width,At.height,0,Ue,He,At.data)}}else{if(D){if(K)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,He,ae[ne])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ue,He,ae[ne]);for(let Re=0;Re<Me.length;Re++){let ze=Me[Re];if(D){if(K)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ue,He,ze.image[ne])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,qe,Ue,He,ze.image[ne])}}}if(x(y))T(e.TEXTURE_CUBE_MAP);if(ie.__version=te.version,y.onUpdate)y.onUpdate(y)}A.__version=y.version}function Xe(A,y,B,Q,te,ie){let ce=a.convert(B.format,B.colorSpace),Y=a.convert(B.type),j=w(B.internalFormat,ce,Y,B.normalized,B.colorSpace),le=s.get(y),ye=s.get(B);if(ye.__renderTarget=y,!le.__hasExternalTextures){let ae=Math.max(1,y.width>>ie),he=Math.max(1,y.height>>ie);if(te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY)n.texImage3D(te,ie,j,ae,he,y.depth,0,ce,Y,null);else n.texImage2D(te,ie,j,ae,he,0,ce,Y,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,A),et(y))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,te,ye.__webglTexture,0,je(y));else if(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,Q,te,ye.__webglTexture,ie);n.bindFramebuffer(e.FRAMEBUFFER,null)}function $e(A,y,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),y.depthBuffer){let Q=y.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,ie=L(y.stencilBuffer,te),ce=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(et(y))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(y),ie,y.width,y.height);else if(B)e.renderbufferStorageMultisample(e.RENDERBUFFER,je(y),ie,y.width,y.height);else e.renderbufferStorage(e.RENDERBUFFER,ie,y.width,y.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ce,e.RENDERBUFFER,A)}else{let Q=y.textures;for(let te=0;te<Q.length;te++){let ie=Q[te],ce=a.convert(ie.format,ie.colorSpace),Y=a.convert(ie.type),j=w(ie.internalFormat,ce,Y,ie.normalized,ie.colorSpace);if(et(y))c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(y),j,y.width,y.height);else if(B)e.renderbufferStorageMultisample(e.RENDERBUFFER,je(y),j,y.width,y.height);else e.renderbufferStorage(e.RENDERBUFFER,j,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ht(A,y,B){let Q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=s.get(y.depthTexture);if(te.__renderTarget=y,!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0;if(Q){if(te.__webglInit===void 0)te.__webglInit=!0,y.depthTexture.addEventListener("dispose",P);if(te.__webglTexture===void 0){te.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),J(e.TEXTURE_CUBE_MAP,y.depthTexture);let le=a.convert(y.depthTexture.format),ye=a.convert(y.depthTexture.type),ae;if(y.depthTexture.format===Fi)ae=e.DEPTH_COMPONENT24;else if(y.depthTexture.format===Oi)ae=e.DEPTH24_STENCIL8;for(let he=0;he<6;he++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ae,y.width,y.height,0,le,ye,null)}}else ee(y.depthTexture,0);let ie=te.__webglTexture,ce=je(y),Y=Q?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,j=y.depthTexture.format===Oi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Fi)if(et(y))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,Y,ie,0,ce);else e.framebufferTexture2D(e.FRAMEBUFFER,j,Y,ie,0);else if(y.depthTexture.format===Oi)if(et(y))c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,Y,ie,0,ce);else e.framebufferTexture2D(e.FRAMEBUFFER,j,Y,ie,0);else throw Error("Unknown depthTexture format")}function ut(A){let y=s.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(Q){let te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=Q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)ht(y.__webglFramebuffer[Q],A,Q);else{let Q=A.texture.mipmaps;if(Q&&Q.length>0)ht(y.__webglFramebuffer[0],A,0);else ht(y.__webglFramebuffer,A,0)}else if(B){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=e.createRenderbuffer(),$e(y.__webglDepthbuffer[Q],A,!1);else{let te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,ie),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,ie)}}else{let Q=A.texture.mipmaps;if(Q&&Q.length>0)n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),$e(y.__webglDepthbuffer,A,!1);else{let te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ie),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,ie)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ve(A,y,B){let Q=s.get(A);if(y!==void 0)Xe(Q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(B!==void 0)ut(A)}function Ot(A){let y=A.texture,B=s.get(A),Q=s.get(y);A.addEventListener("dispose",S);let te=A.textures,ie=A.isWebGLCubeRenderTarget===!0,ce=te.length>1;if(!ce){if(Q.__webglTexture===void 0)Q.__webglTexture=e.createTexture();Q.__version=y.version,o.memory.textures++}if(ie){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let j=0;j<y.mipmaps.length;j++)B.__webglFramebuffer[Y][j]=e.createFramebuffer()}else B.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)B.__webglFramebuffer[Y]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ce)for(let Y=0,j=te.length;Y<j;Y++){let le=s.get(te[Y]);if(le.__webglTexture===void 0)le.__webglTexture=e.createTexture(),o.memory.textures++}if(A.samples>0&&et(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<te.length;Y++){let j=te[Y];B.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let le=a.convert(j.format,j.colorSpace),ye=a.convert(j.type),ae=w(j.internalFormat,le,ye,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),he=je(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,he,ae,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer)B.__webglDepthRenderbuffer=e.createRenderbuffer(),$e(B.__webglDepthRenderbuffer,A,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ie){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),J(e.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Xe(B.__webglFramebuffer[Y][j],A,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else Xe(B.__webglFramebuffer[Y],A,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);if(x(y))T(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ce){for(let Y=0,j=te.length;Y<j;Y++){let le=te[Y],ye=s.get(le),ae=e.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)ae=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(ae,ye.__webglTexture),J(ae,le),Xe(B.__webglFramebuffer,A,le,e.COLOR_ATTACHMENT0+Y,ae,0),x(le))T(ae)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)Y=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(Y,Q.__webglTexture),J(Y,y),y.mipmaps&&y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)Xe(B.__webglFramebuffer[j],A,y,e.COLOR_ATTACHMENT0,Y,j);else Xe(B.__webglFramebuffer,A,y,e.COLOR_ATTACHMENT0,Y,0);if(x(y))T(Y);n.unbindTexture()}if(A.depthBuffer)ut(A)}function zt(A){let y=A.textures;for(let B=0,Q=y.length;B<Q;B++){let te=y[B];if(x(te)){let ie=E(A),ce=s.get(te).__webglTexture;n.bindTexture(ie,ce),T(ie),n.unbindTexture()}}}let wt=[],U=[];function Xt(A){if(A.samples>0){if(et(A)===!1){let{textures:y,width:B,height:Q}=A,te=e.COLOR_BUFFER_BIT,ie=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=s.get(A),Y=y.length>1;if(Y)for(let le=0;le<y.length;le++)n.bindFramebuffer(e.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;if(j&&j.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<y.length;le++){if(A.resolveDepthBuffer){if(A.depthBuffer)te|=e.DEPTH_BUFFER_BIT;if(A.stencilBuffer&&A.resolveStencilBuffer)te|=e.STENCIL_BUFFER_BIT}if(Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let ye=s.get(y[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ye,0)}if(e.blitFramebuffer(0,0,B,Q,0,0,B,Q,te,e.NEAREST),h===!0){if(wt.length=0,U.length=0,wt.push(e.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1)wt.push(ie),U.push(ie),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,U);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,wt)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<y.length;le++){n.bindFramebuffer(e.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);let ye=s.get(y[le]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ce.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,ye,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&h){let y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function je(A){return Math.min(r.maxSamples,A.samples)}function et(A){let y=s.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(A){let y=o.render.frame;if(f.get(A)!==y)f.set(A,y),A.update()}function xt(A,y){let{colorSpace:B,format:Q,type:te}=A;if(A.isCompressedTexture===!0||A.isVideoTexture===!0)return y;if(B!==rn&&B!==zi)if(Ge.getTransfer(B)===at){if(Q!==Pn||te!==Tn)Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else De("WebGLTextures: Unsupported texture color space:",B);return y}function Ne(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement)u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height;else if(typeof VideoFrame<"u"&&A instanceof VideoFrame)u.width=A.displayWidth,u.height=A.displayHeight;else u.width=A.width,u.height=A.height;return u}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.getTextureUnits=O,this.setTextureUnits=q,this.setTexture2D=ee,this.setTexture2DArray=re,this.setTexture3D=_e,this.setTextureCube=Pe,this.rebindTextures=Ve,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ex(e,t){function n(s,r=zi){let a,o=Ge.getTransfer(r);if(s===Tn)return e.UNSIGNED_BYTE;if(s===Zo)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Ko)return e.UNSIGNED_SHORT_5_5_5_1;if(s===cu)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===hu)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===ou)return e.BYTE;if(s===lu)return e.SHORT;if(s===Sr)return e.UNSIGNED_SHORT;if(s===Yo)return e.INT;if(s===gi)return e.UNSIGNED_INT;if(s===Zn)return e.FLOAT;if(s===Yt)return e.HALF_FLOAT;if(s===uu)return e.ALPHA;if(s===du)return e.RGB;if(s===Pn)return e.RGBA;if(s===Fi)return e.DEPTH_COMPONENT;if(s===Oi)return e.DEPTH_STENCIL;if(s===fu)return e.RED;if(s===Jo)return e.RED_INTEGER;if(s===Bi)return e.RG;if(s===$o)return e.RG_INTEGER;if(s===jo)return e.RGBA_INTEGER;if(s===Ra||s===Ca||s===Ia||s===Pa)if(o===at)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qo||s===el||s===tl||s===nl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===el)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===tl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===il||s===sl||s===rl||s===al||s===ol||s===La||s===ll)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===il||s===sl)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===al)return a.COMPRESSED_R11_EAC;if(s===ol)return a.COMPRESSED_SIGNED_R11_EAC;if(s===La)return a.COMPRESSED_RG11_EAC;if(s===ll)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===cl||s===hl||s===ul||s===dl||s===fl||s===pl||s===ml||s===gl||s===_l||s===xl||s===vl||s===yl||s===Ml||s===Sl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ul)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ml)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_l)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ml)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sl)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bl||s===Tl||s===El)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===bl)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===El)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wl||s===Al||s===Na||s===Rl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===wl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Na)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(s===As)return e.UNSIGNED_INT_24_8;return e[s]!==void 0?e[s]:null}return{convert:n}}var tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ya(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:tx,fragmentShader:nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Gi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pd extends Kn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,m=null,p=null,_=null,v=typeof XRWebGLBinding<"u",M=new fd,g={},x=t.getContextAttributes(),T=null,E=null,w=[],L=[],I=new Se,P=null,S=new It;S.viewport=new ct;let R=new It;R.viewport=new ct;let H=[S,R],C=new $l,W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=w[J];if(me===void 0)me=new Er,w[J]=me;return me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=w[J];if(me===void 0)me=new Er,w[J]=me;return me.getGripSpace()},this.getHand=function(J){let me=w[J];if(me===void 0)me=new Er,w[J]=me;return me.getHandSpace()};function O(J){let me=L.indexOf(J.inputSource);if(me===-1)return;let Ae=w[me];if(Ae!==void 0)Ae.update(J.inputSource,J.frame,h||a),Ae.dispatchEvent({type:J.type,data:J.inputSource})}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",G);for(let J=0;J<w.length;J++){let me=L[J];if(me===null)continue;L[J]=null,w[J].disconnect(me)}W=null,Z=null,M.reset();for(let J in g)delete g[J];e.setRenderTarget(T),p=null,m=null,f=null,s=null,E=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){if(r=J,n.isPresenting===!0)Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){if(o=J,n.isPresenting===!0)Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){if(f===null&&v)f=new XRWebGLBinding(s,t);return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0)await t.makeXRCompatible();if(P=e.getPixelRatio(),e.getSize(I),!(v&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ut(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let Ae=null,ge=null,Le=null;if(x.depth)Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=x.stencil?Oi:Fi,ge=x.stencil?As:gi;let nt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};f=this.getBinding(),m=f.createProjectionLayer(nt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new Ut(m.textureWidth,m.textureHeight,{format:Pn,type:Tn,depthTexture:new _i(m.textureWidth,m.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(J){for(let me=0;me<J.removed.length;me++){let Ae=J.removed[me],ge=L.indexOf(Ae);if(ge>=0)L[ge]=null,w[ge].disconnect(Ae)}for(let me=0;me<J.added.length;me++){let Ae=J.added[me],ge=L.indexOf(Ae);if(ge===-1){for(let nt=0;nt<w.length;nt++)if(nt>=L.length){L.push(Ae),ge=nt;break}else if(L[nt]===null){L[nt]=Ae,ge=nt;break}if(ge===-1)break}let Le=w[ge];if(Le)Le.connect(Ae)}}let X=new N,ee=new N;function re(J,me,Ae){X.setFromMatrixPosition(me.matrixWorld),ee.setFromMatrixPosition(Ae.matrixWorld);let ge=X.distanceTo(ee),Le=me.projectionMatrix.elements,nt=Ae.projectionMatrix.elements,Xe=Le[14]/(Le[10]-1),$e=Le[14]/(Le[10]+1),ht=(Le[9]+1)/Le[5],ut=(Le[9]-1)/Le[5],Ve=(Le[8]-1)/Le[0],Ot=(nt[8]+1)/nt[0],zt=Xe*Ve,wt=Xe*Ot,U=ge/(-Ve+Ot),Xt=U*-Ve;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xt),J.translateZ(U),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let je=Xe+U,et=$e+U,fe=zt-Xt,xt=wt+(ge-Xt),Ne=ht*$e/et*je,A=ut*$e/et*je;J.projectionMatrix.makePerspective(fe,xt,Ne,A,je,et),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,me){if(me===null)J.matrixWorld.copy(J.matrix);else J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix);J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let{near:me,far:Ae}=J;if(M.texture!==null){if(M.depthNear>0)me=M.depthNear;if(M.depthFar>0)Ae=M.depthFar}if(C.near=R.near=S.near=me,C.far=R.far=S.far=Ae,W!==C.near||Z!==C.far)s.updateRenderState({depthNear:C.near,depthFar:C.far}),W=C.near,Z=C.far;C.layers.mask=J.layers.mask|6,S.layers.mask=C.layers.mask&-5,R.layers.mask=C.layers.mask&-3;let ge=J.parent,Le=C.cameras;_e(C,ge);for(let nt=0;nt<Le.length;nt++)_e(Le[nt],ge);if(Le.length===2)re(C,S,R);else C.projectionMatrix.copy(S.projectionMatrix);Pe(J,C,ge)};function Pe(J,me,Ae){if(Ae===null)J.matrix.copy(me.matrixWorld);else J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld);if(J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera)J.fov=Ci*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(m===null&&p===null)return;return c},this.setFoveation=function(J){if(c=J,m!==null)m.fixedFoveation=J;if(p!==null&&p.fixedFoveation!==void 0)p.fixedFoveation=J},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)},this.getCameraTexture=function(J){return g[J]};let be=null;function st(J,me){if(u=me.getViewerPose(h||a),_=me,u!==null){let Ae=u.views;if(p!==null)e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E);let ge=!1;if(Ae.length!==C.cameras.length)C.cameras.length=0,ge=!0;for(let $e=0;$e<Ae.length;$e++){let ht=Ae[$e],ut=null;if(p!==null)ut=p.getViewport(ht);else{let Ot=f.getViewSubImage(m,ht);if(ut=Ot.viewport,$e===0)e.setRenderTargetTextures(E,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(E)}let Ve=H[$e];if(Ve===void 0)Ve=new It,Ve.layers.enable($e),Ve.viewport=new ct,H[$e]=Ve;if(Ve.matrix.fromArray(ht.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ht.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),$e===0)C.matrix.copy(Ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(ge===!0)C.cameras.push(Ve)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let $e=f.getDepthInformation(Ae[0]);if($e&&$e.isValid&&$e.texture)M.init($e,s.renderState)}if(Le&&Le.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let $e=0;$e<Ae.length;$e++){let ht=Ae[$e].camera;if(ht){let ut=g[ht];if(!ut)ut=new Ya,g[ht]=ut;let Ve=f.getCameraImage(ht);ut.sourceTexture=Ve}}}}for(let Ae=0;Ae<w.length;Ae++){let ge=L[Ae],Le=w[Ae];if(ge!==null&&Le!==void 0)Le.update(ge,me,h||a)}if(be)be(J,me);if(me.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:me});_=null}let Ke=new nd;Ke.setAnimationLoop(st),this.setAnimationLoop=function(J){be=J},this.dispose=function(){}}}var ix=new Oe,md=new Fe;md.set(-1,0,0,0,1,0,0,0,1);function sx(e,t){function n(g,x){if(g.matrixAutoUpdate===!0)g.updateMatrix();x.value.copy(g.matrix)}function s(g,x){if(x.color.getRGB(g.fogColor.value,kl(e)),x.isFog)g.fogNear.value=x.near,g.fogFar.value=x.far;else if(x.isFogExp2)g.fogDensity.value=x.density}function r(g,x,T,E,w){if(x.isNodeMaterial)x.uniformsNeedUpdate=!1;else if(x.isMeshBasicMaterial)a(g,x);else if(x.isMeshLambertMaterial){if(a(g,x),x.envMap)g.envMapIntensity.value=x.envMapIntensity}else if(x.isMeshToonMaterial)a(g,x),m(g,x);else if(x.isMeshPhongMaterial){if(a(g,x),f(g,x),x.envMap)g.envMapIntensity.value=x.envMapIntensity}else if(x.isMeshStandardMaterial){if(a(g,x),p(g,x),x.isMeshPhysicalMaterial)_(g,x,w)}else if(x.isMeshMatcapMaterial)a(g,x),v(g,x);else if(x.isMeshDepthMaterial)a(g,x);else if(x.isMeshDistanceMaterial)a(g,x),M(g,x);else if(x.isMeshNormalMaterial)a(g,x);else if(x.isLineBasicMaterial){if(o(g,x),x.isLineDashedMaterial)c(g,x)}else if(x.isPointsMaterial)h(g,x,T,E);else if(x.isSpriteMaterial)u(g,x);else if(x.isShadowMaterial)g.color.value.copy(x.color),g.opacity.value=x.opacity;else if(x.isShaderMaterial)x.uniformsNeedUpdate=!1}function a(g,x){if(g.opacity.value=x.opacity,x.color)g.diffuse.value.copy(x.color);if(x.emissive)g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity);if(x.map)g.map.value=x.map,n(x.map,g.mapTransform);if(x.alphaMap)g.alphaMap.value=x.alphaMap,n(x.alphaMap,g.alphaMapTransform);if(x.bumpMap){if(g.bumpMap.value=x.bumpMap,n(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===Vt)g.bumpScale.value*=-1}if(x.normalMap){if(g.normalMap.value=x.normalMap,n(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===Vt)g.normalScale.value.negate()}if(x.displacementMap)g.displacementMap.value=x.displacementMap,n(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias;if(x.emissiveMap)g.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,g.emissiveMapTransform);if(x.specularMap)g.specularMap.value=x.specularMap,n(x.specularMap,g.specularMapTransform);if(x.alphaTest>0)g.alphaTest.value=x.alphaTest;let T=t.get(x),{envMap:E,envMapRotation:w}=T;if(E){if(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)g.envMapRotation.value.premultiply(md);g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio}if(x.lightMap)g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,g.lightMapTransform);if(x.aoMap)g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,g.aoMapTransform)}function o(g,x){if(g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map)g.map.value=x.map,n(x.map,g.mapTransform)}function c(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function h(g,x,T,E){if(g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*T,g.scale.value=E*0.5,x.map)g.map.value=x.map,n(x.map,g.uvTransform);if(x.alphaMap)g.alphaMap.value=x.alphaMap,n(x.alphaMap,g.alphaMapTransform);if(x.alphaTest>0)g.alphaTest.value=x.alphaTest}function u(g,x){if(g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map)g.map.value=x.map,n(x.map,g.mapTransform);if(x.alphaMap)g.alphaMap.value=x.alphaMap,n(x.alphaMap,g.alphaMapTransform);if(x.alphaTest>0)g.alphaTest.value=x.alphaTest}function f(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,0.0001)}function m(g,x){if(x.gradientMap)g.gradientMap.value=x.gradientMap}function p(g,x){if(g.metalness.value=x.metalness,x.metalnessMap)g.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,g.metalnessMapTransform);if(g.roughness.value=x.roughness,x.roughnessMap)g.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,g.roughnessMapTransform);if(x.envMap)g.envMapIntensity.value=x.envMapIntensity}function _(g,x,T){if(g.ior.value=x.ior,x.sheen>0){if(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap)g.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,g.sheenColorMapTransform);if(x.sheenRoughnessMap)g.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,g.sheenRoughnessMapTransform)}if(x.clearcoat>0){if(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap)g.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,g.clearcoatMapTransform);if(x.clearcoatRoughnessMap)g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform);if(x.clearcoatNormalMap){if(g.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vt)g.clearcoatNormalScale.value.negate()}}if(x.dispersion>0)g.dispersion.value=x.dispersion;if(x.iridescence>0){if(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap)g.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,g.iridescenceMapTransform);if(x.iridescenceThicknessMap)g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform)}if(x.transmission>0){if(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap)g.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,g.transmissionMapTransform);if(g.thickness.value=x.thickness,x.thicknessMap)g.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,g.thicknessMapTransform);g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)}if(x.anisotropy>0){if(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap)g.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,g.anisotropyMapTransform)}if(g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap)g.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,g.specularColorMapTransform);if(x.specularIntensityMap)g.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,g.specularIntensityMapTransform)}function v(g,x){if(x.matcap)g.matcap.value=x.matcap}function M(g,x){let T=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function rx(e,t,n,s){let r={},a={},o=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,E){let w=E.program;s.uniformBlockBinding(T,w)}function u(T,E){let w=r[T.id];if(w===void 0)v(T),w=f(T),r[T.id]=w,T.addEventListener("dispose",g);let L=E.program;s.updateUBOMapping(T,L);let I=t.render.frame;if(a[T.id]!==I)p(T),a[T.id]=I}function f(T){let E=m();T.__bindingPointIndex=E;let w=e.createBuffer(),{__size:L,usage:I}=T;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,L,I),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,w),w}function m(){for(let T=0;T<c;T++)if(o.indexOf(T)===-1)return o.push(T),T;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(T){let E=r[T.id],{uniforms:w,__cache:L}=T;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let I=0,P=w.length;I<P;I++){let S=Array.isArray(w[I])?w[I]:[w[I]];for(let R=0,H=S.length;R<H;R++){let C=S[R];if(_(C,I,R,L)===!0){let W=C.__offset,Z=Array.isArray(C.value)?C.value:[C.value],O=0;for(let q=0;q<Z.length;q++){let G=Z[q],X=M(G);if(typeof G==="number"||typeof G==="boolean")C.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,W+O,C.__data);else if(G.isMatrix3)C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0;else if(ArrayBuffer.isView(G))C.__data.set(new G.constructor(G.buffer,G.byteOffset,C.__data.length));else G.toArray(C.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT}e.bufferSubData(e.UNIFORM_BUFFER,W,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(T,E,w,L){let I=T.value,P=E+"_"+w;if(L[P]===void 0){if(typeof I==="number"||typeof I==="boolean")L[P]=I;else if(ArrayBuffer.isView(I))L[P]=I.slice();else L[P]=I.clone();return!0}else{let S=L[P];if(typeof I==="number"||typeof I==="boolean"){if(S!==I)return L[P]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(S.equals(I)===!1)return S.copy(I),!0}return!1}function v(T){let E=T.uniforms,w=0,L=16;for(let P=0,S=E.length;P<S;P++){let R=Array.isArray(E[P])?E[P]:[E[P]];for(let H=0,C=R.length;H<C;H++){let W=R[H],Z=Array.isArray(W.value)?W.value:[W.value];for(let O=0,q=Z.length;O<q;O++){let G=Z[O],X=M(G),ee=w%L,re=ee%X.boundary,_e=ee+re;if(w+=re,_e!==0&&L-_e<X.storage)w+=L-_e;W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=X.storage}}}let I=w%L;if(I>0)w+=L-I;return T.__size=w,T.__cache={},this}function M(T){let E={boundary:0,storage:0};if(typeof T==="number"||typeof T==="boolean")E.boundary=4,E.storage=4;else if(T.isVector2)E.boundary=8,E.storage=8;else if(T.isVector3||T.isColor)E.boundary=16,E.storage=12;else if(T.isVector4)E.boundary=16,E.storage=16;else if(T.isMatrix3)E.boundary=48,E.storage=48;else if(T.isMatrix4)E.boundary=64,E.storage=64;else if(T.isTexture)Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(T))E.boundary=16,E.storage=T.byteLength;else Ee("WebGLRenderer: Unsupported uniform value type.",T);return E}function g(T){let E=T.target;E.removeEventListener("dispose",g);let w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function x(){for(let T in r)e.deleteBuffer(r[T]);o=[],r={},a={}}return{bind:h,update:u,dispose:x}}var ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function ox(){if(Ln===null)Ln=new Rr(ax,16,16,Bi,Yt),Ln.name="DFG_LUT",Ln.minFilter=Dt,Ln.magFilter=Dt,Ln.wrapS=Es,Ln.wrapT=Es,Ln.generateMipmaps=!1,Ln.needsUpdate=!0;return Ln}class dc{constructor(e={}){let{canvas:t=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let v=p,M=new Set([jo,$o,Jo]),g=new Set([Tn,gi,Sr,As,Zo,Ko]),x=new Uint32Array(4),T=new Int32Array(4),E=new N,w=null,L=null,I=[],P=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,H=!1,C=null;this._outputColorSpace=$t;let W=0,Z=0,O=null,q=-1,G=null,X=new ct,ee=new ct,re=null,_e=new we(0),Pe=0,{width:be,height:st}=t,Ke=1,J=null,me=null,Ae=new ct(0,0,be,st),ge=new ct(0,0,be,st),Le=!1,nt=new Ir,Xe=!1,$e=!1,ht=new Oe,ut=new N,Ve=new ct,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function wt(){return O===null?Ke:1}let U=n;function Xt(b,F){return t.getContext(b,F)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Ah}`);if(t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Re,!1),U===null){if(U=Xt("webgl2",b),U===null)if(Xt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(b){throw De("WebGLRenderer: "+b.message),b}let je,et,fe,xt,Ne,A,y,B,Q,te,ie,ce,Y,j,le,ye,ae,he,Ue,He,qe,D,oe;function K(){if(je=new p0(U),je.init(),qe=new ex(U,je),et=new a0(U,je,e,qe),fe=new j_(U,je),et.reversedDepthBuffer&&m)fe.buffers.depth.setReversed(!0);xt=new _0(U),Ne=new B_,A=new Q_(U,je,fe,Ne,et,qe,xt),y=new f0(R),B=new Mp(U),D=new s0(U,B),Q=new m0(U,B,xt,D),te=new v0(U,Q,B,D,xt),he=new x0(U,et,A),le=new o0(Ne),ie=new O_(R,y,je,et,D,le),ce=new sx(R,Ne),Y=new k_,j=new q_(je),ae=new i0(R,y,fe,te,_,c),ye=new $_(R,te,et),oe=new rx(U,xt,et,fe),Ue=new r0(U,je,xt),He=new g0(U,je,xt),xt.programs=ie.programs,R.capabilities=et,R.extensions=je,R.properties=Ne,R.renderLists=Y,R.shadowMap=ye,R.state=fe,R.info=xt}if(K(),v!==Tn)S=new M0(v,t.width,t.height,s,r);let se=new pd(R,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=je.get("WEBGL_lose_context");if(b)b.loseContext()},this.forceContextRestore=function(){let b=je.get("WEBGL_lose_context");if(b)b.restoreContext()},this.getPixelRatio=function(){return Ke},this.setPixelRatio=function(b){if(b===void 0)return;Ke=b,this.setSize(be,st,!1)},this.getSize=function(b){return b.set(be,st)},this.setSize=function(b,F,V=!0){if(se.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}if(be=b,st=F,t.width=Math.floor(b*Ke),t.height=Math.floor(F*Ke),V===!0)t.style.width=b+"px",t.style.height=F+"px";if(S!==null)S.setSize(t.width,t.height);this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(be*Ke,st*Ke).floor()},this.setDrawingBufferSize=function(b,F,V){be=b,st=F,Ke=V,t.width=Math.floor(b*V),t.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(v===Tn){De("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(Ae)},this.setViewport=function(b,F,V,z){if(b.isVector4)Ae.set(b.x,b.y,b.z,b.w);else Ae.set(b,F,V,z);fe.viewport(X.copy(Ae).multiplyScalar(Ke).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,F,V,z){if(b.isVector4)ge.set(b.x,b.y,b.z,b.w);else ge.set(b,F,V,z);fe.scissor(ee.copy(ge).multiplyScalar(Ke).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){fe.setScissorTest(Le=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,V=!0){let z=0;if(b){let k=!1;if(O!==null){let pe=O.texture.format;k=M.has(pe)}if(k){let pe=O.texture.type,ve=g.has(pe),de=ae.getClearColor(),Te=ae.getClearAlpha(),{r:Ce,g:ke,b:Ye}=de;if(ve)x[0]=Ce,x[1]=ke,x[2]=Ye,x[3]=Te,U.clearBufferuiv(U.COLOR,0,x);else T[0]=Ce,T[1]=ke,T[2]=Ye,T[3]=Te,U.clearBufferiv(U.COLOR,0,T)}else z|=U.COLOR_BUFFER_BIT}if(F)z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(V)z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(z!==0)U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),C=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),ae.dispose(),Y.dispose(),j.dispose(),Ne.dispose(),y.dispose(),te.dispose(),D.dispose(),oe.dispose(),ie.dispose(),se.dispose(),se.removeEventListener("sessionstart",Uc),se.removeEventListener("sessionend",Fc),Ti.stop()};function Me(b){b.preventDefault(),fr("WebGLRenderer: Context Lost."),H=!0}function ne(){fr("WebGLRenderer: Context Restored."),H=!1;let b=xt.autoReset,F=ye.enabled,V=ye.autoUpdate,z=ye.needsUpdate,k=ye.type;K(),xt.autoReset=b,ye.enabled=F,ye.autoUpdate=V,ye.needsUpdate=z,ye.type=k}function Re(b){De("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ze(b){let F=b.target;F.removeEventListener("dispose",ze),At(F)}function At(b){ot(b),Ne.remove(b)}function ot(b){let F=Ne.get(b).programs;if(F!==void 0){if(F.forEach(function(V){ie.releaseProgram(V)}),b.isShaderMaterial)ie.releaseShaderCache(b)}}this.renderBufferDirect=function(b,F,V,z,k,pe){if(F===null)F=Ot;let ve=k.isMesh&&k.matrixWorld.determinant()<0,de=pf(b,F,V,z,k);fe.setMaterial(z,ve);let Te=V.index,Ce=1;if(z.wireframe===!0){if(Te=Q.getWireframeAttribute(V),Te===void 0)return;Ce=2}let ke=V.drawRange,Ye=V.attributes.position,Ie=ke.start*Ce,lt=(ke.start+ke.count)*Ce;if(pe!==null)Ie=Math.max(Ie,pe.start*Ce),lt=Math.min(lt,(pe.start+pe.count)*Ce);if(Te!==null)Ie=Math.max(Ie,0),lt=Math.min(lt,Te.count);else if(Ye!==void 0&&Ye!==null)Ie=Math.max(Ie,0),lt=Math.min(lt,Ye.count);let Mt=lt-Ie;if(Mt<0||Mt===1/0)return;D.setup(k,z,de,V,Te);let yt,dt=Ue;if(Te!==null)yt=B.get(Te),dt=He,dt.setIndex(yt);if(k.isMesh)if(z.wireframe===!0)fe.setLineWidth(z.wireframeLinewidth*wt()),dt.setMode(U.LINES);else dt.setMode(U.TRIANGLES);else if(k.isLine){let kt=z.linewidth;if(kt===void 0)kt=1;if(fe.setLineWidth(kt*wt()),k.isLineSegments)dt.setMode(U.LINES);else if(k.isLineLoop)dt.setMode(U.LINE_LOOP);else dt.setMode(U.LINE_STRIP)}else if(k.isPoints)dt.setMode(U.POINTS);else if(k.isSprite)dt.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(!je.get("WEBGL_multi_draw")){let{_multiDrawStarts:kt,_multiDrawCounts:xe,_multiDrawCount:en}=k,Qe=Te?B.get(Te).bytesPerElement:1,cn=Ne.get(z).currentProgram.getUniforms();for(let An=0;An<en;An++)cn.setValue(U,"_gl_DrawID",An),dt.render(kt[An]/Qe,xe[An])}else dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)dt.renderInstances(Ie,Mt,k.count);else if(V.isInstancedBufferGeometry){let kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,kt);dt.renderInstances(Ie,Mt,xe)}else dt.render(Ie,Mt)};function wn(b,F,V){if(b.transparent===!0&&b.side===Kt&&b.forceSinglePass===!1)b.side=Vt,b.needsUpdate=!0,qr(b,F,V),b.side=pi,b.needsUpdate=!0,qr(b,F,V),b.side=Kt;else qr(b,F,V)}this.compile=function(b,F,V=null){if(V===null)V=b;if(L=j.get(V),L.init(F),P.push(L),V.traverseVisible(function(k){if(k.isLight&&k.layers.test(F.layers)){if(L.pushLight(k),k.castShadow)L.pushShadow(k)}}),b!==V)b.traverseVisible(function(k){if(k.isLight&&k.layers.test(F.layers)){if(L.pushLight(k),k.castShadow)L.pushShadow(k)}});L.setupLights();let z=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){let de=pe[ve];wn(de,V,k),z.add(de)}else wn(pe,V,k),z.add(pe)}),L=P.pop(),z},this.compileAsync=function(b,F,V=null){let z=this.compile(b,F,V);return new Promise((k)=>{function pe(){if(z.forEach(function(ve){if(Ne.get(ve).currentProgram.isReady())z.delete(ve)}),z.size===0){k(b);return}setTimeout(pe,10)}if(je.get("KHR_parallel_shader_compile")!==null)pe();else setTimeout(pe,10)})};let _n=null;function df(b){if(_n)_n(b)}function Uc(){Ti.stop()}function Fc(){Ti.start()}let Ti=new nd;if(Ti.setAnimationLoop(df),typeof self<"u")Ti.setContext(self);this.setAnimationLoop=function(b){_n=b,se.setAnimationLoop(b),b===null?Ti.stop():Ti.start()},se.addEventListener("sessionstart",Uc),se.addEventListener("sessionend",Fc),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C!==null)C.renderStart(b,F);let V=se.enabled===!0&&se.isPresenting===!0,z=S!==null&&(O===null||V)&&S.begin(R,O);if(b.matrixWorldAutoUpdate===!0)b.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(se.enabled===!0&&se.isPresenting===!0&&(S===null||S.isCompositing()===!1)){if(se.cameraAutoUpdate===!0)se.updateCamera(F);F=se.getCamera()}if(b.isScene===!0)b.onBeforeRender(R,b,F,O);if(L=j.get(b,P.length),L.init(F),L.state.textureUnits=A.getTextureUnits(),P.push(L),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ht,Dl,F.reversedDepth),$e=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,$e),w=Y.get(b,I.length),w.init(),I.push(w),se.enabled===!0&&se.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();if(ve!==null)po(ve,F,-1/0,R.sortObjects)}if(po(b,F,0,R.sortObjects),w.finish(),R.sortObjects===!0)w.sort(J,me);if(zt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,zt)ae.addToRenderList(w,b);if(this.info.render.frame++,Xe===!0)le.beginShadows();let k=L.state.shadowsArray;if(ye.render(k,b,F),Xe===!0)le.endShadows();if(this.info.autoReset===!0)this.info.reset();if((z&&S.hasRenderPass())===!1){let ve=w.opaque,de=w.transmissive;if(L.setupLights(),F.isArrayCamera){let Te=F.cameras;if(de.length>0)for(let Ce=0,ke=Te.length;Ce<ke;Ce++){let Ye=Te[Ce];Bc(ve,de,b,Ye)}if(zt)ae.render(b);for(let Ce=0,ke=Te.length;Ce<ke;Ce++){let Ye=Te[Ce];Oc(w,b,Ye,Ye.viewport)}}else{if(de.length>0)Bc(ve,de,b,F);if(zt)ae.render(b);Oc(w,b,F)}}if(O!==null&&Z===0)A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O);if(z)S.end(R);if(b.isScene===!0)b.onAfterRender(R,b,F);if(D.resetDefaultState(),q=-1,G=null,P.pop(),P.length>0){if(L=P[P.length-1],A.setTextureUnits(L.state.textureUnits),Xe===!0)le.setGlobalState(R.clippingPlanes,L.state.camera)}else L=null;if(I.pop(),I.length>0)w=I[I.length-1];else w=null;if(C!==null)C.renderEnd()};function po(b,F,V,z){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD){if(b.autoUpdate===!0)b.update(F)}else if(b.isLightProbeGrid)L.pushLightProbeGrid(b);else if(b.isLight){if(L.pushLight(b),b.castShadow)L.pushShadow(b)}else if(b.isSprite){if(!b.frustumCulled||nt.intersectsSprite(b)){if(z)Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let ve=te.update(b),de=b.material;if(de.visible)w.push(b,ve,de,V,Ve.z,null)}}else if(b.isMesh||b.isLine||b.isPoints){if(!b.frustumCulled||nt.intersectsObject(b)){let ve=te.update(b),de=b.material;if(z){if(b.boundingSphere!==void 0){if(b.boundingSphere===null)b.computeBoundingSphere();Ve.copy(b.boundingSphere.center)}else{if(ve.boundingSphere===null)ve.computeBoundingSphere();Ve.copy(ve.boundingSphere.center)}Ve.applyMatrix4(b.matrixWorld).applyMatrix4(ht)}if(Array.isArray(de)){let Te=ve.groups;for(let Ce=0,ke=Te.length;Ce<ke;Ce++){let Ye=Te[Ce],Ie=de[Ye.materialIndex];if(Ie&&Ie.visible)w.push(b,ve,Ie,V,Ve.z,Ye)}}else if(de.visible)w.push(b,ve,de,V,Ve.z,null)}}}let pe=b.children;for(let ve=0,de=pe.length;ve<de;ve++)po(pe[ve],F,V,z)}function Oc(b,F,V,z){let{opaque:k,transmissive:pe,transparent:ve}=b;if(L.setupLightsView(V),Xe===!0)le.setGlobalState(R.clippingPlanes,V);if(z)fe.viewport(X.copy(z));if(k.length>0)Xr(k,F,V);if(pe.length>0)Xr(pe,F,V);if(ve.length>0)Xr(ve,F,V);fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Bc(b,F,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[z.id]===void 0){let Ie=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[z.id]=new Ut(1,1,{generateMipmaps:!0,type:Ie?Yt:Tn,minFilter:In,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let pe=L.state.transmissionRenderTarget[z.id],ve=z.viewport||X;pe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),Te=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();if(R.setRenderTarget(pe),R.getClearColor(_e),Pe=R.getClearAlpha(),Pe<1)R.setClearColor(16777215,0.5);if(R.clear(),zt)ae.render(V);let ke=R.toneMapping;R.toneMapping=bn;let Ye=z.viewport;if(z.viewport!==void 0)z.viewport=void 0;if(L.setupLightsView(z),Xe===!0)le.setGlobalState(R.clippingPlanes,z);if(Xr(b,V,z),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let lt=0,Mt=F.length;lt<Mt;lt++){let yt=F[lt],{object:dt,geometry:kt,material:xe,group:en}=yt;if(xe.side===Kt&&dt.layers.test(z.layers)){let Qe=xe.side;xe.side=Vt,xe.needsUpdate=!0,zc(dt,V,z,kt,xe,en),xe.side=Qe,xe.needsUpdate=!0,Ie=!0}}if(Ie===!0)A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe)}if(R.setRenderTarget(de,Te,Ce),R.setClearColor(_e,Pe),Ye!==void 0)z.viewport=Ye;R.toneMapping=ke}function Xr(b,F,V){let z=F.isScene===!0?F.overrideMaterial:null;for(let k=0,pe=b.length;k<pe;k++){let ve=b[k],{object:de,geometry:Te,group:Ce}=ve,ke=ve.material;if(ke.allowOverride===!0&&z!==null)ke=z;if(de.layers.test(V.layers))zc(de,F,V,Te,ke,Ce)}}function zc(b,F,V,z,k,pe){if(b.onBeforeRender(R,F,V,z,k,pe),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(R,F,V,z,b,pe),k.transparent===!0&&k.side===Kt&&k.forceSinglePass===!1)k.side=Vt,k.needsUpdate=!0,R.renderBufferDirect(V,F,z,k,b,pe),k.side=pi,k.needsUpdate=!0,R.renderBufferDirect(V,F,z,k,b,pe),k.side=Kt;else R.renderBufferDirect(V,F,z,k,b,pe);b.onAfterRender(R,F,V,z,k,pe)}function qr(b,F,V){if(F.isScene!==!0)F=Ot;let z=Ne.get(b),k=L.state.lights,pe=L.state.shadowsArray,ve=k.state.version,de=ie.getParameters(b,k.state,pe,F,V,L.state.lightProbeGridArray),Te=ie.getProgramCacheKey(de),Ce=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;if(z.envMap=y.get(b.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ce===void 0)b.addEventListener("dispose",ze),Ce=new Map,z.programs=Ce;let Ye=Ce.get(Te);if(Ye!==void 0){if(z.currentProgram===Ye&&z.lightsStateVersion===ve)return Hc(b,de),Ye}else{if(de.uniforms=ie.getUniforms(b),C!==null&&b.isNodeMaterial)C.build(b,V,de);b.onBeforeCompile(de,R),Ye=ie.acquireProgram(de,Te),Ce.set(Te,Ye),z.uniforms=de.uniforms}let Ie=z.uniforms;if(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)Ie.clippingPlanes=le.uniform;if(Hc(b,de),z.needsLights=gf(b),z.lightsStateVersion=ve,z.needsLights)Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix;return z.lightProbeGrid=L.state.lightProbeGridArray.length>0,z.currentProgram=Ye,z.uniformsList=null,Ye}function kc(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=zr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Hc(b,F){let V=Ne.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function ff(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;E.setFromMatrixPosition(F.matrixWorld);for(let V=0,z=b.length;V<z;V++){let k=b[V];if(k.texture!==null&&k.boundingBox.containsPoint(E))return k}return null}function pf(b,F,V,z,k){if(F.isScene!==!0)F=Ot;A.resetTextureUnits();let pe=F.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,de=O===null?R.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ge.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ce=y.get(z.envMap||ve,Te),ke=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ye=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,Mt=!!V.morphAttributes.color,yt=bn;if(z.toneMapped){if(O===null||O.isXRRenderTarget===!0)yt=R.toneMapping}let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,kt=dt!==void 0?dt.length:0,xe=Ne.get(z),en=L.state.lights;if(Xe===!0){if($e===!0||b!==G){let mt=b===G&&z.id===q;le.setState(z,b,mt)}}let Qe=!1;if(z.version===xe.__version){if(xe.needsLights&&xe.lightsStateVersion!==en.state.version)Qe=!0;else if(xe.outputColorSpace!==de)Qe=!0;else if(k.isBatchedMesh&&xe.batching===!1)Qe=!0;else if(!k.isBatchedMesh&&xe.batching===!0)Qe=!0;else if(k.isBatchedMesh&&xe.batchingColor===!0&&k.colorTexture===null)Qe=!0;else if(k.isBatchedMesh&&xe.batchingColor===!1&&k.colorTexture!==null)Qe=!0;else if(k.isInstancedMesh&&xe.instancing===!1)Qe=!0;else if(!k.isInstancedMesh&&xe.instancing===!0)Qe=!0;else if(k.isSkinnedMesh&&xe.skinning===!1)Qe=!0;else if(!k.isSkinnedMesh&&xe.skinning===!0)Qe=!0;else if(k.isInstancedMesh&&xe.instancingColor===!0&&k.instanceColor===null)Qe=!0;else if(k.isInstancedMesh&&xe.instancingColor===!1&&k.instanceColor!==null)Qe=!0;else if(k.isInstancedMesh&&xe.instancingMorph===!0&&k.morphTexture===null)Qe=!0;else if(k.isInstancedMesh&&xe.instancingMorph===!1&&k.morphTexture!==null)Qe=!0;else if(xe.envMap!==Ce)Qe=!0;else if(z.fog===!0&&xe.fog!==pe)Qe=!0;else if(xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==le.numPlanes||xe.numIntersection!==le.numIntersection))Qe=!0;else if(xe.vertexAlphas!==ke)Qe=!0;else if(xe.vertexTangents!==Ye)Qe=!0;else if(xe.morphTargets!==Ie)Qe=!0;else if(xe.morphNormals!==lt)Qe=!0;else if(xe.morphColors!==Mt)Qe=!0;else if(xe.toneMapping!==yt)Qe=!0;else if(xe.morphTargetsCount!==kt)Qe=!0;else if(!!xe.lightProbeGrid!==L.state.lightProbeGridArray.length>0)Qe=!0}else Qe=!0,xe.__version=z.version;let cn=xe.currentProgram;if(Qe===!0){if(cn=qr(z,F,k),C&&z.isNodeMaterial)C.onUpdateProgram(z,cn,xe)}let An=!1,si=!1,ji=!1,ft=cn.getUniforms(),St=xe.uniforms;if(fe.useProgram(cn.program))An=!0,si=!0,ji=!0;if(z.id!==q)q=z.id,si=!0;if(xe.needsLights){let mt=ff(L.state.lightProbeGridArray,k);if(xe.lightProbeGrid!==mt)xe.lightProbeGrid=mt,si=!0}if(An||G!==b){if(fe.buffers.depth.getReversed()&&b.reversedDepth!==!0)b._reversedDepth=!0,b.updateProjectionMatrix();ft.setValue(U,"projectionMatrix",b.projectionMatrix),ft.setValue(U,"viewMatrix",b.matrixWorldInverse);let ai=ft.map.cameraPosition;if(ai!==void 0)ai.setValue(U,ut.setFromMatrixPosition(b.matrixWorld));if(et.logarithmicDepthBuffer)ft.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2));if(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)ft.setValue(U,"isOrthographic",b.isOrthographicCamera===!0);if(G!==b)G=b,si=!0,ji=!0}if(xe.needsLights){if(en.state.directionalShadowMap.length>0)ft.setValue(U,"directionalShadowMap",en.state.directionalShadowMap,A);if(en.state.spotShadowMap.length>0)ft.setValue(U,"spotShadowMap",en.state.spotShadowMap,A);if(en.state.pointShadowMap.length>0)ft.setValue(U,"pointShadowMap",en.state.pointShadowMap,A)}if(k.isSkinnedMesh){ft.setOptional(U,k,"bindMatrix"),ft.setOptional(U,k,"bindMatrixInverse");let mt=k.skeleton;if(mt){if(mt.boneTexture===null)mt.computeBoneTexture();ft.setValue(U,"boneTexture",mt.boneTexture,A)}}if(k.isBatchedMesh){if(ft.setOptional(U,k,"batchingTexture"),ft.setValue(U,"batchingTexture",k._matricesTexture,A),ft.setOptional(U,k,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",k._indirectTexture,A),ft.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null)ft.setValue(U,"batchingColorTexture",k._colorsTexture,A)}let ri=V.morphAttributes;if(ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)he.update(k,V,cn);if(si||xe.receiveShadow!==k.receiveShadow)xe.receiveShadow=k.receiveShadow,ft.setValue(U,"receiveShadow",k.receiveShadow);if((z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null)St.envMapIntensity.value=F.environmentIntensity;if(St.dfgLUT!==void 0)St.dfgLUT.value=ox();if(si){if(ft.setValue(U,"toneMappingExposure",R.toneMappingExposure),xe.needsLights)mf(St,ji);if(pe&&z.fog===!0)ce.refreshFogUniforms(St,pe);if(ce.refreshMaterialUniforms(St,z,Ke,st,L.state.transmissionRenderTarget[b.id]),xe.needsLights&&xe.lightProbeGrid){let mt=xe.lightProbeGrid;St.probesSH.value=mt.texture,St.probesMin.value.copy(mt.boundingBox.min),St.probesMax.value.copy(mt.boundingBox.max),St.probesResolution.value.copy(mt.resolution)}zr.upload(U,kc(xe),St,A)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0)zr.upload(U,kc(xe),St,A),z.uniformsNeedUpdate=!1;if(z.isSpriteMaterial)ft.setValue(U,"center",k.center);if(ft.setValue(U,"modelViewMatrix",k.modelViewMatrix),ft.setValue(U,"normalMatrix",k.normalMatrix),ft.setValue(U,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let mt=z.uniformsGroups;for(let ai=0,Qi=mt.length;ai<Qi;ai++){let Gc=mt[ai];oe.update(Gc,cn),oe.bind(Gc,cn)}}return cn}function mf(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function gf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,F,V){let z=Ne.get(b);if(z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1)z.__useRenderToTexture=!1;Ne.get(b.texture).__webglTexture=F,Ne.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let V=Ne.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};let _f=U.createFramebuffer();this.setRenderTarget=function(b,F=0,V=0){O=b,W=F,Z=V;let z=null,k=!1,pe=!1;if(b){let de=Ne.get(b);if(de.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),X.copy(b.viewport),ee.copy(b.scissor),re=b.scissorTest,fe.viewport(X),fe.scissor(ee),fe.setScissorTest(re),q=-1;return}else if(de.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(de.__hasExternalTextures)A.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ke=b.depthTexture;if(de.__boundDepthTexture!==ke){if(ke!==null&&Ne.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let Te=b.texture;if(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)pe=!0;let Ce=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget){if(Array.isArray(Ce[F]))z=Ce[F][V];else z=Ce[F];k=!0}else if(b.samples>0&&A.useMultisampledRTT(b)===!1)z=Ne.get(b).__webglMultisampledFramebuffer;else if(Array.isArray(Ce))z=Ce[V];else z=Ce;X.copy(b.viewport),ee.copy(b.scissor),re=b.scissorTest}else X.copy(Ae).multiplyScalar(Ke).floor(),ee.copy(ge).multiplyScalar(Ke).floor(),re=Le;if(V!==0)z=_f;if(fe.bindFramebuffer(U.FRAMEBUFFER,z))fe.drawBuffers(b,z);if(fe.viewport(X),fe.scissor(ee),fe.setScissorTest(re),k){let de=Ne.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,V)}else if(pe){let de=F;for(let Te=0;Te<b.textures.length;Te++){let Ce=Ne.get(b.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,V,de)}}else if(b!==null&&V!==0){let de=Ne.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,V)}q=-1},this.readRenderTargetPixels=function(b,F,V,z,k,pe,ve,de=0){if(!(b&&b.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0)Te=Te[ve];if(Te){fe.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ce=b.textures[de],{format:ke,type:Ye}=Ce;if(b.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+de);if(!et.textureFormatReadable(ke)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ye)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=b.width-z&&(V>=0&&V<=b.height-k))U.readPixels(F,V,z,k,qe.convert(ke),qe.convert(Ye),pe)}finally{let Ce=O!==null?Ne.get(O).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,F,V,z,k,pe,ve,de=0){if(!(b&&b.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0)Te=Te[ve];if(Te)if(F>=0&&F<=b.width-z&&(V>=0&&V<=b.height-k)){fe.bindFramebuffer(U.FRAMEBUFFER,Te);let Ce=b.textures[de],{format:ke,type:Ye}=Ce;if(b.textures.length>1)U.readBuffer(U.COLOR_ATTACHMENT0+de);if(!et.textureFormatReadable(ke))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ye))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(F,V,z,k,qe.convert(ke),qe.convert(Ye),0);let lt=O!==null?Ne.get(O).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,lt);let Mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bu(U,Mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.deleteBuffer(Ie),U.deleteSync(Mt),pe}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,V=0){let z=Math.pow(2,-V),k=Math.floor(b.image.width*z),pe=Math.floor(b.image.height*z),ve=F!==null?F.x:0,de=F!==null?F.y:0;A.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ve,de,k,pe),fe.unbindTexture()};let xf=U.createFramebuffer(),vf=U.createFramebuffer();if(this.copyTextureToTexture=function(b,F,V=null,z=null,k=0,pe=0){let ve,de,Te,Ce,ke,Ye,Ie,lt,Mt,yt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(V!==null)ve=V.max.x-V.min.x,de=V.max.y-V.min.y,Te=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,ke=V.min.y,Ye=V.isBox3?V.min.z:0;else{let St=Math.pow(2,-k);if(ve=Math.floor(yt.width*St),de=Math.floor(yt.height*St),b.isDataArrayTexture)Te=yt.depth;else if(b.isData3DTexture)Te=Math.floor(yt.depth*St);else Te=1;Ce=0,ke=0,Ye=0}if(z!==null)Ie=z.x,lt=z.y,Mt=z.z;else Ie=0,lt=0,Mt=0;let dt=qe.convert(F.format),kt=qe.convert(F.type),xe;if(F.isData3DTexture)A.setTexture3D(F,0),xe=U.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)A.setTexture2DArray(F,0),xe=U.TEXTURE_2D_ARRAY;else A.setTexture2D(F,0),xe=U.TEXTURE_2D;fe.activeTexture(U.TEXTURE0),fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),fe.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let en=fe.getParameter(U.UNPACK_ROW_LENGTH),Qe=fe.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=fe.getParameter(U.UNPACK_SKIP_PIXELS),An=fe.getParameter(U.UNPACK_SKIP_ROWS),si=fe.getParameter(U.UNPACK_SKIP_IMAGES);fe.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),fe.pixelStorei(U.UNPACK_SKIP_ROWS,ke),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);let ji=b.isDataArrayTexture||b.isData3DTexture,ft=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let St=Ne.get(b),ri=Ne.get(F),mt=Ne.get(St.__renderTarget),ai=Ne.get(ri.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,mt.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Qi=0;Qi<Te;Qi++){if(ji)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.get(b).__webglTexture,k,Ye+Qi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,pe,Mt+Qi);U.blitFramebuffer(Ce,ke,ve,de,Ie,lt,ve,de,U.DEPTH_BUFFER_BIT,U.NEAREST)}fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Ne.has(b)){let St=Ne.get(b),ri=Ne.get(F);fe.bindFramebuffer(U.READ_FRAMEBUFFER,xf),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,vf);for(let mt=0;mt<Te;mt++){if(ji)U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,k,Ye+mt);else U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,k);if(ft)U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ri.__webglTexture,pe,Mt+mt);else U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ri.__webglTexture,pe);if(k!==0)U.blitFramebuffer(Ce,ke,ve,de,Ie,lt,ve,de,U.COLOR_BUFFER_BIT,U.NEAREST);else if(ft)U.copyTexSubImage3D(xe,pe,Ie,lt,Mt+mt,Ce,ke,ve,de);else U.copyTexSubImage2D(xe,pe,Ie,lt,Ce,ke,ve,de)}fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ft)if(b.isDataTexture||b.isData3DTexture)U.texSubImage3D(xe,pe,Ie,lt,Mt,ve,de,Te,dt,kt,yt.data);else if(F.isCompressedArrayTexture)U.compressedTexSubImage3D(xe,pe,Ie,lt,Mt,ve,de,Te,dt,yt.data);else U.texSubImage3D(xe,pe,Ie,lt,Mt,ve,de,Te,dt,kt,yt);else if(b.isDataTexture)U.texSubImage2D(U.TEXTURE_2D,pe,Ie,lt,ve,de,dt,kt,yt.data);else if(b.isCompressedTexture)U.compressedTexSubImage2D(U.TEXTURE_2D,pe,Ie,lt,yt.width,yt.height,dt,yt.data);else U.texSubImage2D(U.TEXTURE_2D,pe,Ie,lt,ve,de,dt,kt,yt);if(fe.pixelStorei(U.UNPACK_ROW_LENGTH,en),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),fe.pixelStorei(U.UNPACK_SKIP_ROWS,An),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,si),pe===0&&F.generateMipmaps)U.generateMipmap(xe);fe.unbindTexture()},this.initRenderTarget=function(b){if(Ne.get(b).__webglFramebuffer===void 0)A.setupRenderTarget(b)},this.initTexture=function(b){if(b.isCubeTexture)A.setTextureCube(b,0);else if(b.isData3DTexture)A.setTexture3D(b,0);else if(b.isDataArrayTexture||b.isCompressedArrayTexture)A.setTexture2DArray(b,0);else A.setTexture2D(b,0);fe.unbindTexture()},this.resetState=function(){W=0,Z=0,O=null,fe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}var Xs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var lx=new ti(-1,1,1,-1,0,1);class gd extends _t{constructor(){super();this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}var cx=new gd;class qi{constructor(e){this._mesh=new Be(cx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fc extends fn{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=$n.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new qi(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ro extends fn{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;if(this.inverse)a=0,o=1;else a=1,o=0;if(r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class pc extends fn{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mc{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fc(Xs),this.copyPass.material.blending=un,this.timer=new Hs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled===!1)continue;if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(ro!==void 0){if(a instanceof ro)n=!0;else if(a instanceof pc)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gc extends fn{constructor(e,t,n=null,s=null,r=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;if(this.overrideMaterial!==null)a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(r);if(this.overrideMaterial!==null)this.scene.overrideMaterial=a;e.autoClear=s}}var _d={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Yi extends fn{constructor(e,t=1,n,s){super();this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new we(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:Yt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ut(r,a,{type:Yt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Ut(r,a,{type:Yt});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}let o=_d;this.highPassUniforms=$n.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let h=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$n.clone(Xs.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Xs.vertexShader,fragmentShader:Xs.fragmentShader,premultipliedAlpha:!0,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new we,this._oldClearAlpha=1,this._basic=new Bt,this._fsQuad=new qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),r)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Yi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Yi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(n),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(0.39894*Math.exp(-0.5*s*s/(n*n))/n);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(0.5,0.5)},direction:{value:new Se(0.5,0.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Yi.BlurDirectionX=new Se(1,0);Yi.BlurDirectionY=new Se(0,1);var kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class _c extends fn{constructor(){super();this.isOutputPass=!0,this.uniforms=$n.clone(kr.uniforms),this.material=new Dr({name:kr.name,uniforms:this.uniforms,vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader}),this._fsQuad=new qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===at)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===mr)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===gr)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===_r)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Ni)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===vr)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===yr)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===xr)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var Qt=34,pn=9,xd=240,Hr=16,vd=26,yd=40,xc=55,ao=110,Dn={x:0,y:50,z:27},oo={strength:0.9,radius:0.55,threshold:0.82},Md="#04050d",Sd="#241634",bd="#46243f",Td=658456,lo="../game-3d-assets";function Zi(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ed(e,t){let n=Zi(t),s=128,r=256,a=document.createElement("canvas");a.width=128,a.height=256;let o=a.getContext("2d");o.fillStyle="#000000",o.fillRect(0,0,128,256);let c=4,h=9,u=128/c,f=256/h;for(let p=0;p<h;p++)for(let _=0;_<c;_++){let v=n();if(v<0.42)continue;let M=n()<0.78;o.fillStyle=M?"#ffd9a0":e,o.globalAlpha=v>0.85?1:0.55,o.fillRect(_*u+u*0.26,p*f+f*0.24,u*0.48,f*0.5),o.globalAlpha=1}let m=new Us(a);return m.colorSpace=$t,m.magFilter=Jt,m.minFilter=Jt,m}function co(e,t,n){let s=document.createElement("canvas");s.width=512,s.height=192;let r=s.getContext("2d"),a=26;if(r.fillStyle="rgba(8, 10, 20, 0.82)",r.strokeStyle=t,r.lineWidth=6,r.beginPath(),r.roundRect(6,6,s.width-12,s.height-12,a),r.fill(),r.stroke(),r.textAlign="center",r.textBaseline="middle",r.fillStyle="#f4f6ff",r.font="700 52px 'JetBrains Mono', monospace",r.fillText(e.toUpperCase(),s.width/2,n?74:s.height/2,s.width-60),n)r.fillStyle=t,r.font="500 30px 'JetBrains Mono', monospace",r.fillText(n,s.width/2,134,s.width-60);let o=new Us(s);return o.colorSpace=$t,o}function wd(e,t,n){let s=document.createElement("canvas");s.width=16,s.height=512;let r=s.getContext("2d"),a=r.createLinearGradient(0,0,0,s.height);a.addColorStop(0,e),a.addColorStop(0.55,e),a.addColorStop(0.82,t),a.addColorStop(1,n),r.fillStyle=a,r.fillRect(0,0,s.width,s.height);let o=new Us(s);return o.colorSpace=$t,o}function vc(e,t){if(t===Il)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Rs||t===br){let n=e.getIndex();if(n===null){let o=[],c=e.getAttribute("position");if(c!==void 0){for(let h=0;h<c.count;h++)o.push(h);e.setIndex(o),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let s=n.count-2,r=[];if(t===Rs)for(let o=1;o<=s;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<s;o++)if(o%2===0)r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2));else r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o));if(r.length/3!==s)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=e.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Ad(e){let t=new Map,n=new Map,s=e.clone();return Rd(e,s,function(r,a){t.set(a,r),n.set(r,a)}),s.traverse(function(r){if(!r.isSkinnedMesh)return;let a=r,o=t.get(r),c=o.skeleton.bones;a.skeleton=o.skeleton.clone(),a.bindMatrix.copy(o.bindMatrix),a.skeleton.bones=c.map(function(h){return n.get(h)}),a.bind(a.skeleton,a.bindMatrix)}),s}function Rd(e,t,n){n(e,t);for(let s=0;s<e.children.length;s++)Rd(e.children[s],t.children[s],n)}class wc extends ei{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new bc(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bc(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kd(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let h=yi.extractUrlBase(e);a=yi.resolveURL(h,this.path)}else a=yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(h){if(s)s(h);else console.error(h);r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ur(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e==="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jd){try{a[Ze.KHR_BINARY_GLTF]=new $d(e)}catch(f){if(s)s(f);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){if(s)s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new nf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](h);if(!f.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],m=r.extensionsRequired||[];switch(f){case Ze.KHR_MATERIALS_UNLIT:a[f]=new Dd;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[f]=new jd(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[f]=new Qd;break;case Ze.KHR_MESH_QUANTIZATION:a[f]=new ef;break;default:if(m.indexOf(f)>=0&&o[f]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function hx(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Et(e,t,n){let s=e.json.materials[t];if(s.extensions&&s.extensions[n])return s.extensions[n];return null}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Nd{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],h,u=new we(16777215);if(c.color!==void 0)u.setRGB(c.color[0],c.color[1],c.color[2],rn);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new ks(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new zs(u),h.distance=f;break;case"spot":h=new Qa(u),h.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}if(h.position.set(0,0,0),Un(h,c),c.intensity!==void 0)h.intensity=c.intensity;return h.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Dd{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}if(r.baseColorTexture!==void 0)s.push(n.assignTexture(e,"map",r.baseColorTexture,$t))}return Promise.all(s)}}class Ud{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();if(n.emissiveStrength!==void 0)t.emissiveIntensity=n.emissiveStrength;return Promise.resolve()}}class Fd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0)t.clearcoat=n.clearcoatFactor;if(n.clearcoatTexture!==void 0)s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture));if(n.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=n.clearcoatRoughnessFactor;if(n.clearcoatRoughnessTexture!==void 0)s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture));if(n.clearcoatNormalTexture!==void 0){if(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(r,r)}}return Promise.all(s)}}class Od{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}}class Bd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.iridescenceFactor!==void 0)t.iridescence=n.iridescenceFactor;if(n.iridescenceTexture!==void 0)s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture));if(n.iridescenceIor!==void 0)t.iridescenceIOR=n.iridescenceIor;if(t.iridescenceThicknessRange===void 0)t.iridescenceThicknessRange=[100,400];if(n.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum;if(n.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum;if(n.iridescenceThicknessTexture!==void 0)s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture));return Promise.all(s)}}class zd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}if(n.sheenRoughnessFactor!==void 0)t.sheenRoughness=n.sheenRoughnessFactor;if(n.sheenColorTexture!==void 0)s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,$t));if(n.sheenRoughnessTexture!==void 0)s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture));return Promise.all(s)}}class kd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.transmissionFactor!==void 0)t.transmission=n.transmissionFactor;if(n.transmissionTexture!==void 0)s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture));return Promise.all(s)}}class Hd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0)s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture));t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],rn),Promise.all(s)}}class Gd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();if(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class Vd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0)s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];if(t.specularColor=new we().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0)s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,$t));return Promise.all(s)}}class Wd{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0)s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture));return Promise.all(s)}}class Xd{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Et(this.parser,e,this.name)!==null?on:null}extendMaterialParams(e,t){let n=Et(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.anisotropyStrength!==void 0)t.anisotropy=n.anisotropyStrength;if(n.anisotropyRotation!==void 0)t.anisotropyRotation=n.anisotropyRotation;if(n.anisotropyTexture!==void 0)s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture));return Promise.all(s)}}class qd{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,r.source,a)}}class Yd{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let h=n.options.manager.getHandler(o.uri);if(h!==null)c=h}return n.loadTextureImage(e,a.source,c)}}class Zd{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let h=n.options.manager.getHandler(o.uri);if(h!==null)c=h}return n.loadTextureImage(e,a.source,c)}}class bc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(o){let c=s.byteOffset||0,h=s.byteLength||0,{count:u,byteStride:f}=s,m=new Uint8Array(o,c,h);if(a.decodeGltfBufferAsync)return a.decodeGltfBufferAsync(u,f,m,s.mode,s.filter).then(function(p){return p.buffer});else return a.ready.then(function(){let p=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(p),u,f,m,s.mode,s.filter),p})})}else return null}}class Kd{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let h of s.primitives)if(h.mode!==mn.TRIANGLES&&h.mode!==mn.TRIANGLE_STRIP&&h.mode!==mn.TRIANGLE_FAN&&h.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let h in a)o.push(this.parser.getDependency("accessor",a[h]).then((u)=>(c[h]=u,c[h])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((h)=>{let u=h.pop(),f=u.isGroup?u.children:[u],m=h[0].count,p=[];for(let _ of f){let v=new Oe,M=new N,g=new dn,x=new N(1,1,1),T=new Va(_.geometry,_.material,m);for(let E=0;E<m;E++){if(c.TRANSLATION)M.fromBufferAttribute(c.TRANSLATION,E);if(c.ROTATION)g.fromBufferAttribute(c.ROTATION,E);if(c.SCALE)x.fromBufferAttribute(c.SCALE,E);T.setMatrixAt(E,v.compose(M,g,x))}for(let E in c)if(E==="_COLOR_0"){let w=c[E];T.instanceColor=new Ii(w.array,w.itemSize,w.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE")_.geometry.setAttribute(E,c[E]);pt.prototype.copy.call(T,_),this.parser.assignFinalMaterial(T),p.push(T)}if(u.isGroup)return u.clear(),u.add(...p),u;return p[0]})}}var Jd="glTF",Gr=12,Cd={JSON:1313821514,BIN:5130562};class $d{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jd)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Gr,r=new DataView(e,Gr),a=0;while(a<s){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Cd.JSON){let h=new Uint8Array(e,Gr+a,o);this.content=n.decode(h)}else if(c===Cd.BIN){let h=Gr+a;this.body=e.slice(h,h+o)}a+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class jd{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},h={};for(let u in a){let f=Tc[u]||u.toLowerCase();o[f]=a[u]}for(let u in e.attributes){let f=Tc[u]||u.toLowerCase();if(a[u]!==void 0){let m=n.accessors[e.attributes[u]],p=qs[m.componentType];h[f]=p.name,c[f]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,m){s.decodeDracoFile(u,function(p){for(let _ in p.attributes){let v=p.attributes[_],M=c[_];if(M!==void 0)v.normalized=M}f(p)},o,h,rn,m)})})}}class Qd{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);return e.needsUpdate=!0,e}}class ef{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Ac extends jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,u=s-t,f=(n-t)/u,m=f*f,p=m*f,_=e*h,v=_-h,M=-2*p+3*m,g=p-m,x=1-M,T=g-m+f;for(let E=0;E!==o;E++){let w=a[v+E+o],L=a[v+E+c]*u,I=a[_+E+o],P=a[_+E]*u;r[E]=x*w+T*L+M*I+g*P}return r}}var ux=new dn;class tf extends Ac{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ux.fromArray(r).normalize().toArray(r),r}}var mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Id={9728:Jt,9729:Dt,9984:Aa,9985:ws,9986:Ui,9987:In},Pd={33071:Es,33648:wa,10497:mi},yc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dx={CUBICSPLINE:void 0,LINEAR:Da,STEP:Cl},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fx(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi});return e.DefaultMaterial}function Ki(e,t,n){for(let s in n.extensions)if(e[s]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=n.extensions[s]}function Un(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function px(e,t,n){let s=!1,r=!1,a=!1;for(let u=0,f=t.length;u<f;u++){let m=t[u];if(m.POSITION!==void 0)s=!0;if(m.NORMAL!==void 0)r=!0;if(m.COLOR_0!==void 0)a=!0;if(s&&r&&a)break}if(!s&&!r&&!a)return Promise.resolve(e);let o=[],c=[],h=[];for(let u=0,f=t.length;u<f;u++){let m=t[u];if(s){let p=m.POSITION!==void 0?n.getDependency("accessor",m.POSITION):e.attributes.position;o.push(p)}if(r){let p=m.NORMAL!==void 0?n.getDependency("accessor",m.NORMAL):e.attributes.normal;c.push(p)}if(a){let p=m.COLOR_0!==void 0?n.getDependency("accessor",m.COLOR_0):e.attributes.color;h.push(p)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],m=u[1],p=u[2];if(s)e.morphAttributes.position=f;if(r)e.morphAttributes.normal=m;if(a)e.morphAttributes.color=p;return e.morphTargetsRelative=!0,e})}function mx(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,s=t.weights.length;n<s;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++)e.morphTargetDictionary[n[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gx(e){let t,n=e.extensions&&e.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(n)t="draco:"+n.bufferView+":"+n.indices+":"+Sc(n.attributes);else t=e.indices+":"+Sc(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let s=0,r=e.targets.length;s<r;s++)t+=":"+Sc(e.targets[s]);return t}function Sc(e){let t="",n=Object.keys(e).sort();for(let s=0,r=n.length;s<r;s++)t+=n[s]+":"+e[n[s]]+";";return t}function Ec(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _x(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var xx=new Oe;class nf{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||n&&s<17||r&&a<98)this.textureLoader=new Os(this.options.manager);else this.textureLoader=new eo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ki(r,o,s),Un(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];if(a.mesh!==void 0){if(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0)n[a.mesh].isSkinnedMesh=!0}if(a.camera!==void 0)this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);if(c!=null)this.associations.set(o,c);for(let[h,u]of a.children.entries())r(u,o.children[h])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);if(r)n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(yi.resolveURL(t.uri,s.path),r,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yc[s.type],o=qs[s.componentType],c=s.normalized===!0,h=new o(s.count*a);return Promise.resolve(new Tt(h,a,c))}let r=[];if(s.bufferView!==void 0)r.push(this.getDependency("bufferView",s.bufferView));else r.push(null);if(s.sparse!==void 0)r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView));return Promise.all(r).then(function(a){let o=a[0],c=yc[s.type],h=qs[s.componentType],u=h.BYTES_PER_ELEMENT,f=u*c,m=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0,v,M;if(p&&p!==f){let g=Math.floor(m/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,T=t.cache.get(x);if(!T)v=new h(o,g*p,s.count*p/u),T=new Is(v,p/u),t.cache.add(x,T);M=new fi(T,c,m%p/u,_)}else{if(o===null)v=new h(s.count*c);else v=new h(o,m,s.count*c);M=new Tt(v,c,_)}if(s.sparse!==void 0){let g=yc.SCALAR,x=qs[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,w=new x(a[1],T,s.sparse.count*g),L=new h(a[2],E,s.sparse.count*c);if(o!==null)M=new Tt(M.array.slice(),M.itemSize,M.normalized);M.normalized=!1;for(let I=0,P=w.length;I<P;I++){let S=w[I];if(M.setX(S,L[I*c]),c>=2)M.setY(S,L[I*c+1]);if(c>=3)M.setZ(S,L[I*c+2]);if(c>=4)M.setW(S,L[I*c+3]);if(c>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=_}return M})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);if(c!==null)o=c}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(t,n).then(function(u){if(u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)u.name=o.uri;let m=(r.samplers||{})[a.sampler]||{};return u.magFilter=Id[m.magFilter]||Dt,u.minFilter=Id[m.minFilter]||In,u.wrapS=Pd[m.wrapS]||mi,u.wrapT=Pd[m.wrapT]||mi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==Dt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((f)=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){h=!0;let m=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(m),c});else if(a.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(f){return new Promise(function(m,p){let _=m;if(t.isImageBitmapLoader===!0)_=function(v){let M=new bt(v);M.needsUpdate=!0,m(M)};t.load(yi.resolveURL(f,r.path),_,void 0,p)})}).then(function(f){if(h===!0)o.revokeObjectURL(c);return Un(f,a),f.userData.mimeType=a.mimeType||_x(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0)a=a.clone(),a.channel=n.texCoord;if(r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}if(s!==void 0)a.colorSpace=s;return e[t]=a,a})}assignFinalMaterial(e){let{geometry:t,material:n}=e,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);if(!c)c=new Hi,jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c);n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);if(!c)c=new Pr,jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c);n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";if(s)o+="derivative-tangents:";if(r)o+="vertex-colors:";if(a)o+="flat-shading:";let c=this.cache.get(o);if(!c){if(c=n.clone(),r)c.vertexColors=!0;if(a)c.flatShading=!0;if(s){if(c.normalScale)c.normalScale.y*=-1;if(c.clearcoatNormalScale)c.clearcoatNormalScale.y*=-1}this.cache.add(o,c),this.associations.set(c,this.associations.get(n))}n=c}e.material=n}getMaterialType(){return gt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},h=[];if(c[Ze.KHR_MATERIALS_UNLIT]){let f=s[Ze.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),h.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let m=f.baseColorFactor;o.color.setRGB(m[0],m[1],m[2],rn),o.opacity=m[3]}if(f.baseColorTexture!==void 0)h.push(t.assignTexture(o,"map",f.baseColorTexture,$t));if(o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0)h.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture));a=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,o)})))}if(r.doubleSided===!0)o.side=Kt;let u=r.alphaMode||Mc.OPAQUE;if(u===Mc.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,u===Mc.MASK)o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&a!==Bt){if(h.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Se(1,1),r.normalTexture.scale!==void 0){let f=r.normalTexture.scale;o.normalScale.set(f,f)}}if(r.occlusionTexture!==void 0&&a!==Bt){if(h.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)o.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&a!==Bt){let f=r.emissiveFactor;o.emissive=new we().setRGB(f[0],f[1],f[2],rn)}if(r.emissiveTexture!==void 0&&a!==Bt)h.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,$t));return Promise.all(h).then(function(){let f=new a(o);if(r.name)f.name=r.name;if(Un(f,r),t.associations.set(f,{materials:e}),r.extensions)Ki(s,f,r);return f})}createUniqueName(e){let t=it.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ld(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let h=e[o],u=gx(h),f=s[u];if(f)a.push(f.promise);else{let m;if(h.extensions&&h.extensions[Ze.KHR_DRACO_MESH_COMPRESSION])m=r(h);else m=Ld(new _t,h,t);s[u]={primitive:h,promise:m},a.push(m)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,h=a.length;c<h;c++){let u=a[c].material===void 0?fx(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let h=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let p=0,_=u.length;p<_;p++){let v=u[p],M=a[p],g,x=h[p];if(M.mode===mn.TRIANGLES||M.mode===mn.TRIANGLE_STRIP||M.mode===mn.TRIANGLE_FAN||M.mode===void 0){if(g=r.isSkinnedMesh===!0?new Ga(v,x):new Be(v,x),g.isSkinnedMesh===!0)g.normalizeSkinWeights();if(M.mode===mn.TRIANGLE_STRIP)g.geometry=vc(g.geometry,br);else if(M.mode===mn.TRIANGLE_FAN)g.geometry=vc(g.geometry,Rs)}else if(M.mode===mn.LINES)g=new Wa(v,x);else if(M.mode===mn.LINE_STRIP)g=new Ns(v,x);else if(M.mode===mn.LINE_LOOP)g=new Xa(v,x);else if(M.mode===mn.POINTS)g=new Ds(v,x);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);if(Object.keys(g.geometry.morphAttributes).length>0)mx(g,r);if(g.name=t.createUniqueName(r.name||"mesh_"+e),Un(g,r),M.extensions)Ki(s,g,M);t.assignFinalMaterial(g),f.push(g)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1){if(r.extensions)Ki(s,f[0],r);return f[0]}let m=new vt;if(r.extensions)Ki(s,m,r);t.associations.set(m,{meshes:e});for(let p=0,_=f.length;p<_;p++)m.add(f[p]);return m})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(n.type==="perspective")t=new It(Cs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2000000);else if(n.type==="orthographic")t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar);if(n.name)t.name=this.createUniqueName(n.name);return Un(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));if(t.inverseBindMatrices!==void 0)n.push(this.getDependency("accessor",t.inverseBindMatrices));else n.push(null);return Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let h=0,u=a.length;h<u;h++){let f=a[h];if(f){o.push(f);let m=new Oe;if(r!==null)m.fromArray(r.array,h*16);c.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Cr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],h=[],u=[];for(let f=0,m=s.channels.length;f<m;f++){let p=s.channels[f],_=s.samplers[p.sampler],v=p.target,M=v.node,g=s.parameters!==void 0?s.parameters[_.input]:_.input,x=s.parameters!==void 0?s.parameters[_.output]:_.output;if(v.node===void 0)continue;a.push(this.getDependency("node",M)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",x)),h.push(_),u.push(v)}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(u)]).then(function(f){let m=f[0],p=f[1],_=f[2],v=f[3],M=f[4],g=[];for(let T=0,E=m.length;T<E;T++){let w=m[T],L=p[T],I=_[T],P=v[T],S=M[T];if(w===void 0)continue;if(w.updateMatrix)w.updateMatrix();let R=n._createAnimationTracks(w,L,I,P,S);if(R)for(let H=0;H<R.length;H++)g.push(R[H])}let x=new Ka(r,void 0,g);return Un(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];if(s.mesh===void 0)return null;return n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);if(s.weights!==void 0)a.traverse(function(o){if(!o.isMesh)return;for(let c=0,h=s.weights.length;c<h;c++)o.morphTargetInfluences[c]=s.weights[c]});return a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let h=0,u=o.length;h<u;h++)a.push(n.getDependency("node",o[h]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(h){let u=h[0],f=h[1],m=h[2];if(m!==null)u.traverse(function(p){if(!p.isSkinnedMesh)return;p.bind(m,xx)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);if(u.userData.pivot!==void 0&&f.length>0){let p=u.userData.pivot,_=f[0];u.pivot=new N().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],_.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});if(c)o.push(c);if(r.camera!==void 0)o.push(s.getDependency("camera",r.camera).then(function(h){return s._getNodeRef(s.cameraCache,r.camera,h)}));return s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let u;if(r.isBone===!0)u=new Ar;else if(h.length>1)u=new vt;else if(h.length===1)u=h[0];else u=new pt;if(u!==h[0])for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(r.name)u.userData.name=r.name,u.name=a;if(Un(u,r),r.extensions)Ki(n,u,r);if(r.matrix!==void 0){let f=new Oe;f.fromArray(r.matrix),u.applyMatrix4(f)}else{if(r.translation!==void 0)u.position.fromArray(r.translation);if(r.rotation!==void 0)u.quaternion.fromArray(r.rotation);if(r.scale!==void 0)u.scale.fromArray(r.scale)}if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new vt;if(n.name)r.name=s.createUniqueName(n.name);if(Un(r,n),n.extensions)Ki(t,r,n);let a=n.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++){let m=c[u];if(m.parent!==null)r.add(Ad(m));else r.add(m)}let h=(u)=>{let f=new Map;for(let[m,p]of s.associations)if(m instanceof jt||m instanceof bt)f.set(m,p);return u.traverse((m)=>{let p=s.associations.get(m);if(p!=null)f.set(m,p)}),f};return s.associations=h(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function h(p){if(p.morphTargetInfluences)c.push(p.name?p.name:p.uuid)}if(Si[r.path]===Si.weights){if(h(e),e.isGroup)e.children.forEach(h)}else c.push(o);let u;switch(Si[r.path]){case Si.weights:u=qn;break;case Si.rotation:u=Qn;break;case Si.translation:case Si.scale:u=Yn;break;default:switch(n.itemSize){case 1:u=qn;break;case 2:case 3:default:u=Yn;break}break}let f=s.interpolation!==void 0?dx[s.interpolation]:Da,m=this._getArrayFromAccessor(n);for(let p=0,_=c.length;p<_;p++){let v=new u(c[p]+"."+Si[r.path],t.array,m,f);if(s.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(v);a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ec(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){return new(this instanceof Qn?tf:Ac)(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vx(e,t,n){let s=t.attributes,r=new Ft;if(s.POSITION!==void 0){let c=n.json.accessors[s.POSITION],{min:h,max:u}=c;if(h!==void 0&&u!==void 0){if(r.set(new N(h[0],h[1],h[2]),new N(u[0],u[1],u[2])),c.normalized){let f=Ec(qs[c.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=t.targets;if(a!==void 0){let c=new N,h=new N;for(let u=0,f=a.length;u<f;u++){let m=a[u];if(m.POSITION!==void 0){let p=n.json.accessors[m.POSITION],{min:_,max:v}=p;if(_!==void 0&&v!==void 0){if(h.setX(Math.max(Math.abs(_[0]),Math.abs(v[0]))),h.setY(Math.max(Math.abs(_[1]),Math.abs(v[1]))),h.setZ(Math.max(Math.abs(_[2]),Math.abs(v[2]))),p.normalized){let M=Ec(qs[p.componentType]);h.multiplyScalar(M)}c.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}e.boundingBox=r;let o=new an;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=o}function Ld(e,t,n){let s=t.attributes,r=[];function a(o,c){return n.getDependency("accessor",o).then(function(h){e.setAttribute(c,h)})}for(let o in s){let c=Tc[o]||o.toLowerCase();if(c in e.attributes)continue;r.push(a(s[o],c))}if(t.indices!==void 0&&!e.index){let o=n.getDependency("accessor",t.indices).then(function(c){e.setIndex(c)});r.push(o)}if(Ge.workingColorSpace!==rn&&"COLOR_0"in s)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`);return Un(e,t),vx(e,t,n),Promise.all(r).then(function(){return t.targets!==void 0?px(e,t.targets,n):e})}var yx=new wc,Mx=new Os;async function Rc(e){try{let t=await fetch(e,{method:"HEAD"});if(!t.ok)return!1;return!(t.headers.get("content-type")??"").includes("text/html")}catch{return!1}}async function Cc(e){let t=`${lo}/models/${e}.glb`;if(!await Rc(t))return null;try{return(await yx.loadAsync(t)).scene}catch(n){return console.warn(`[game3d] failed to load ${t}`,n),null}}function Ys(e,t,n,s=0){Cc(t).then((r)=>{if(!r)return;let o=new Ft().setFromObject(r).getSize(new N),c=Math.max(o.x,o.z,0.001),h=n/c;r.scale.setScalar(h);let u=new Ft().setFromObject(r);r.position.y+=s-u.min.y,r.traverse((f)=>{if(f.isMesh)f.castShadow=!0,f.receiveShadow=!0}),e.clear(),e.add(r)})}async function Ic(e){for(let t of["png","jpg","webp"]){let n=`${lo}/textures/${e}.${t}`;if(await Rc(n))try{let s=await Mx.loadAsync(n);return s.colorSpace=$t,s}catch(s){console.warn(`[game3d] failed to load ${n}`,s)}}return null}async function ho(e){let t=`${lo}/audio/${e}.mp3`;if(!await Rc(t))return null;let n=new Audio(t);return n.preload="auto",n}function Sx(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}var bx=l.map((e)=>({id:Sx(e.company),kind:"role",title:e.company,subtitle:e.role,period:e.period,location:e.location,note:e.note,color:e.brand??"#6c9bff",bullets:e.highlights,chips:e.stack??[],years:Math.max(0.5,e.end-e.start),current:e.current})),Tx=[...new Set(d.flatMap((e)=>e.tags))].slice(0,8),Ex={id:"projects-park",kind:"projects",title:"Side Projects Park",subtitle:"Built for the love of it",note:"Games, tools and experiments outside of work.",color:"#db2777",bullets:d.map((e)=>{let t=e.description.split(/(?<=\.)\s/)[0]??e.description;return`${e.name}: ${t}`}),chips:Tx,years:2.2},Pc=[...bx,Ex],Zs=i;function sf(e,t){wx(e),Ax(e),Rx(e,t),Cx(e),Ix(e,t),Px(e)}function wx(e){let t=new Bt({map:wd(Md,Sd,bd),side:Vt,fog:!1,depthWrite:!1}),n=new Be(new En(480,24,16),t);e.add(n),Ic("sky-panorama").then((u)=>{if(!u)return;u.mapping=Ts,t.map=u,t.needsUpdate=!0});let s=Zi(7),r=700,a=new Float32Array(r*3);for(let u=0;u<r;u++){let f=s()*Math.PI*2,m=Math.acos(s()*0.85),p=430;a[u*3]=430*Math.sin(m)*Math.cos(f),a[u*3+1]=430*Math.cos(m)+10,a[u*3+2]=430*Math.sin(m)*Math.sin(f)}let o=new _t;o.setAttribute("position",new Tt(a,3));let c=new Ds(o,new Hi({color:13621503,size:1.4,sizeAttenuation:!1,fog:!1}));e.add(c);let h=new Be(new Fs(13,24),new Bt({color:16774095,fog:!1,toneMapped:!1}));h.position.set(-170,130,-300),h.lookAt(0,0,0),e.add(h)}function Ax(e){let t=new Fs(xd,96);t.rotateX(-Math.PI/2);let n=Zi(42),s=t.attributes.position;for(let o=0;o<s.count;o++){let c=s.getX(o),h=s.getZ(o),u=Math.hypot(c,h),f=Math.max(0,u-(Qt+pn+14));s.setY(o,f>0?n()*Math.min(f*0.12,7):0)}t.computeVertexNormals();let r=new gt({color:1251884,roughness:1,flatShading:!0}),a=new Be(t,r);a.receiveShadow=!0,e.add(a),Ic("ground").then((o)=>{if(!o)return;o.wrapS=o.wrapT=mi,o.repeat.set(24,24),r.map=o,r.color.set(16777215),r.needsUpdate=!0})}function Rx(e,t){let n=new gt({color:1777712,roughness:0.95}),s=new Be(new Nr(Qt-3,Qt+3,96),n);s.rotation.x=-Math.PI/2,s.position.y=0.03,s.receiveShadow=!0,e.add(s);for(let r of t){let a=new Be(new Gi(3.4,Qt),n);a.rotation.x=-Math.PI/2,a.rotation.z=-r-Math.PI/2,a.position.set(Math.cos(r)*Qt/2,0.02,Math.sin(r)*Qt/2),a.receiveShadow=!0,e.add(a)}}function Cx(e){let t=new Zt(0.08,0.1,3.4,6),n=new En(0.28,8,6),s=new gt({color:2765126,roughness:0.7}),r=new gt({color:3350278,emissive:16760934,emissiveIntensity:3}),a=new vt,o=22;for(let c=0;c<22;c++){let h=c/22*Math.PI*2+0.14,u=Qt+4.6,f=new vt,m=new Be(t,s);m.position.y=1.7;let p=new Be(n,r);p.position.y=3.5,f.add(m,p),f.position.set(Math.cos(h)*u,0,Math.sin(h)*u),a.add(f)}e.add(a)}function Ix(e,t){let n=Zi(1337),s=new Zt(0.16,0.22,1,5),r=new gt({color:3811872,roughness:1}),a=new Lr(1.15,2.6,6),o=[1919542,2185788,1523012].map((f)=>new gt({color:f,roughness:1,flatShading:!0})),c=t.map((f)=>({x:Math.cos(f)*Qt,z:Math.sin(f)*Qt})),h=new vt,u=0;while(u<110){let f=12+n()*95,m=n()*Math.PI*2,p=Math.cos(m)*f,_=Math.sin(m)*f;if(Math.abs(f-Qt)<5.5)continue;if(c.some((T)=>Math.hypot(p-T.x,_-T.z)<pn+3))continue;let v=new vt,M=0.7+n()*1,g=new Be(s,r);g.position.y=0.5*M,g.scale.setScalar(M);let x=new Be(a,o[Math.floor(n()*o.length)]);x.position.y=2.3*M,x.scale.setScalar(M),x.castShadow=!0,v.add(g,x),v.position.set(p,0,_),v.rotation.y=n()*Math.PI,h.add(v),u++}e.add(h),Cc("tree").then((f)=>{if(!f)return;let p=new Ft().setFromObject(f).getSize(new N),_=Math.max(p.x,p.z,0.001);for(let v of h.children){let M=v.children[1]?.scale.x??1,g=f.clone();g.scale.setScalar(2.6/_*M);let x=new Ft().setFromObject(g);g.position.y-=x.min.y,v.clear(),v.add(g)}})}function Px(e){let t=new Be(new Zt(7,7.8,0.5,24),new gt({color:2239040,roughness:0.8,flatShading:!0}));t.position.y=0.25,t.receiveShadow=!0,e.add(t);let n=new Be(new Vi(5.6,0.14,8,48),new gt({color:1053988,emissive:7117823,emissiveIntensity:2.4}));n.rotation.x=-Math.PI/2,n.position.y=0.55,e.add(n);let s=new Ps(new ki({map:co(Zs.name,"#6c9bff",Zs.title),toneMapped:!1,depthWrite:!1}));s.scale.set(13,4.9,1),s.position.set(0,8.5,0),s.name="plaza-sign",e.add(s);let r=new vt;r.position.set(0,0.5,0),e.add(r),Ys(r,"monument",6)}function rf(e){let t=Pc.length;return Pc.map((n,s)=>{let r=-Math.PI/2+s/t*Math.PI*2,a=new N(Math.cos(r)*Qt,0,Math.sin(r)*Qt);return Lx(e,n,r,a,s)})}function Lx(e,t,n,s,r){let a=Zi(1000+r*97),o=new vt;o.position.copy(s),e.add(o);let c=new we(t.color),h=new we(1317678).lerp(c,0.12),u=new Be(new Zt(pn,pn+0.7,0.34,24),new gt({color:h,roughness:0.9,flatShading:!0}));u.position.y=0.17,u.receiveShadow=!0,o.add(u);let f=new gt({color:790816,emissive:c,emissiveIntensity:0.35}),m=new Be(new Vi(pn+0.25,0.16,8,56),f);m.rotation.x=-Math.PI/2,m.position.y=0.4,o.add(m);let p=[],_=Math.min(7,3+Math.floor(t.years*0.9));for(let E=0;E<_;E++){let w=E/_*Math.PI*2+a()*0.5,L=E===0?0:3.2+a()*3.4,I=2+a()*1.4,P=2+a()*1.4,S=3.2+t.years*1.7+a()*2.4-(E===0?0:a()*2),R=new gt({color:new we(2305092).offsetHSL(0,0,(a()-0.5)*0.05),roughness:0.85,flatShading:!0,emissive:16777215,emissiveMap:Ed(t.color,r*31+E),emissiveIntensity:1.05}),H=new Be(new Jn(I,S,P),R);if(H.position.set(Math.cos(w)*L,S/2+0.34,Math.sin(w)*L),H.rotation.y=a()*Math.PI*0.5,H.castShadow=!0,H.receiveShadow=!0,o.add(H),p.push({mesh:H,mat:R,phase:a()*Math.PI*2}),E===0){let C=new Be(new Jn(I*0.7,0.22,P*0.7),new gt({color:790816,emissive:c,emissiveIntensity:2.2}));C.position.set(H.position.x,S+0.45,H.position.z),C.rotation.y=H.rotation.y,o.add(C);let W=new Be(new Zt(0.05,0.05,1.6,5),new gt({color:3752284}));W.position.set(H.position.x,S+1.3,H.position.z),o.add(W);let Z=new Be(new En(0.16,8,6),new gt({color:2098437,emissive:16729173,emissiveIntensity:3}));Z.position.set(H.position.x,S+2.15,H.position.z),o.add(Z)}}let v=new Ps(new ki({map:co(t.title,t.color,t.kind==="role"?t.period:t.subtitle),toneMapped:!1,depthWrite:!1})),M=new Se(10,3.75);v.scale.set(M.x,M.y,1);let x=3.2+t.years*1.7+2.4+3.6;v.position.set(0,x,0),o.add(v);let T=new vt;return T.position.set(0,0.34,0),o.add(T),Ys(T,`landmark-${t.id}`,pn*1.1),{def:t,angle:n,center:s,group:o,ringMat:f,sign:v,signBaseScale:M,signBaseY:x,buildings:p,activation:0}}function af(e,t,n,s){for(let r of e){let a=r===t?1:0;r.activation+=(a-r.activation)*Math.min(1,n*4);let o=r.activation;r.ringMat.emissiveIntensity=0.35+o*(2.6+Math.sin(s*5)*0.5);for(let h of r.buildings){h.mat.emissiveIntensity=1.05+o*1.2;let u=1+o*0.07*(1+Math.sin(s*3+h.phase)*0.4);h.mesh.scale.y+=(u-h.mesh.scale.y)*Math.min(1,n*6)}let c=1+o*0.18;r.sign.scale.set(r.signBaseScale.x*c,r.signBaseScale.y*c,1),r.sign.position.y=r.signBaseY+o*0.9+Math.sin(s*1.6+r.angle)*0.18,r.sign.material.opacity=1-o*0.92}}function of(e,t){let n=new vt;e.add(n);let s=new vt;n.add(s);let r=new gt({color:10135232,metalness:0.7,roughness:0.3,flatShading:!0}),a=new Be(new Zt(2.7,1.4,0.7,12),r);s.add(a);let o=new Be(new Zt(1.4,0.7,0.5,12),r);o.position.y=-0.55,s.add(o);let c=new Be(new En(1.15,12,8,0,Math.PI*2,0,Math.PI/2),new gt({color:9426175,metalness:0.1,roughness:0.15,transparent:!0,opacity:0.85,emissive:2782888,emissiveIntensity:0.6}));c.position.y=0.35,s.add(c);let h=new vt,u=new En(0.16,8,6),f=new gt({color:404016,emissive:8188927,emissiveIntensity:3});for(let T=0;T<10;T++){let E=T/10*Math.PI*2,w=new Be(u,f);w.position.set(Math.cos(E)*2.45,-0.1,Math.sin(E)*2.45),h.add(w)}s.add(h),s.traverse((T)=>{if(T.isMesh)T.castShadow=!0}),Ys(s,"ufo",5.4,-1);let m=new Bt({color:9431295,transparent:!0,opacity:0,side:Kt,depthWrite:!1,blending:Li}),p=new Be(new Zt(0.7,5.6,Hr,24,1,!0),m);p.position.y=-Hr/2,n.add(p);let _=new zs(8177919,60,40,1.8);_.position.y=-1.2,n.add(_);let v=new N(0,Hr,9),M=new N,g=0;function x(T,E,w,L,I){let P=w?yd:vd;M.x+=E.x*xc*T,M.z+=E.z*xc*T;let S=Math.exp(-2.6*T);if(M.multiplyScalar(S),M.length()>P)M.setLength(P);v.x+=M.x*T,v.z+=M.z*T;let R=Math.hypot(v.x,v.z);if(R>ao)v.x*=ao/R,v.z*=ao/R;let H=t?0:Math.sin(I*2.1)*0.3;if(v.y=Hr+H,n.position.copy(v),n.rotation.z=Cs.lerp(n.rotation.z,-M.x*0.011,0.12),n.rotation.x=Cs.lerp(n.rotation.x,M.z*0.011,0.12),s.rotation.y+=T*(t?0.2:0.7),h.rotation.y-=T*1.6,g=L?0.16:0,m.opacity+=(g-m.opacity)*Math.min(1,T*5),p.visible=m.opacity>0.01,p.visible&&!t)p.rotation.y+=T*0.8,p.scale.x=p.scale.z=1+Math.sin(I*6)*0.04;_.intensity=L?110:60}return{group:n,position:v,velocity:M,beamMat:m,update:x}}class Lc{keys=new Set;dragOrigin=null;dragVec={x:0,z:0};steered=!1;constructor(e){window.addEventListener("keydown",(n)=>{if(n.repeat)return;if(this.keys.add(n.key.toLowerCase()),this.dir().x!==0||this.dir().z!==0)this.steered=!0}),window.addEventListener("keyup",(n)=>this.keys.delete(n.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear()),e.addEventListener("pointerdown",(n)=>{this.dragOrigin={x:n.clientX,y:n.clientY},e.setPointerCapture(n.pointerId)}),e.addEventListener("pointermove",(n)=>{if(!this.dragOrigin)return;let s=(n.clientX-this.dragOrigin.x)/70,r=(n.clientY-this.dragOrigin.y)/70,a=Math.hypot(s,r),o=a>1?1/a:1;if(this.dragVec={x:s*o,z:r*o},a>0.15)this.steered=!0});let t=()=>{this.dragOrigin=null,this.dragVec={x:0,z:0}};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}dir(){let e=0,t=0;if(this.keys.has("w")||this.keys.has("arrowup"))t-=1;if(this.keys.has("s")||this.keys.has("arrowdown"))t+=1;if(this.keys.has("a")||this.keys.has("arrowleft"))e-=1;if(this.keys.has("d")||this.keys.has("arrowright"))e+=1;e+=this.dragVec.x,t+=this.dragVec.z;let n=Math.hypot(e,t);if(n>1)e/=n,t/=n;return{x:e,z:t}}boost(){return this.keys.has("shift")}}var Nx=4;function lf(e){e.insertAdjacentHTML("beforeend",`
    <div class="g3d-topbar">
      <div class="g3d-brand">
        <span class="g3d-brand-dot"></span>
        <span class="g3d-brand-name">${Zs.name}</span>
        <span class="g3d-brand-sub">UFO city tour</span>
      </div>
      <div class="g3d-actions">
        <button class="g3d-btn" data-action="tour">▶ Tour</button>
        <button class="g3d-btn" data-action="sound">\uD83D\uDD0A Sound</button>
        <a class="g3d-btn" href="../">← Portfolio</a>
      </div>
    </div>
    <div class="g3d-hint">WASD / arrows / drag to fly · Shift to boost · hover a district to scan it</div>
    <aside class="g3d-card" aria-live="polite"></aside>
    <div class="g3d-intro">
      <div class="g3d-intro-panel">
        <div class="g3d-intro-kicker">${Zs.title}</div>
        <h1>Jevgeni City</h1>
        <p>A low-poly flyover of my career. Every district is a company I worked at; hover above one with your saucer and it lights up with the story.</p>
        <button class="g3d-btn g3d-btn-primary" data-action="start">\uD83D\uDEF8 Take off</button>
      </div>
    </div>
  `);let t=e.querySelector(".g3d-card"),n=e.querySelector(".g3d-intro"),s=e.querySelector(".g3d-hint"),r=e.querySelector('[data-action="tour"]'),a=e.querySelector('[data-action="sound"]'),o=e.querySelector('[data-action="start"]'),c=null;function h(f){if(c===f.id)return;c=f.id;let m=f.bullets.slice(0,Nx),p=f.bullets.length-m.length;t.style.setProperty("--accent",f.color),t.innerHTML=`
      <header>
        <span class="g3d-card-dot"></span>
        <div>
          <h2>${Ji(f.title)}${f.current?'<span class="g3d-now">now</span>':""}</h2>
          <div class="g3d-card-role">${Ji(f.subtitle)}</div>
          ${f.period?`<div class="g3d-card-meta">${Ji(f.period)}${f.location?" · "+Ji(f.location):""}</div>`:""}
        </div>
      </header>
      ${f.note?`<p class="g3d-card-note">${Ji(f.note)}</p>`:""}
      <ul>
        ${m.map((_,v)=>`<li style="--i:${v}">${Ji(_)}</li>`).join("")}
      </ul>
      ${p>0?`<div class="g3d-card-more">+ ${p} more in the CV</div>`:""}
      <div class="g3d-chips">
        ${f.chips.map((_)=>`<span>${Ji(_)}</span>`).join("")}
      </div>
    `,t.classList.remove("visible"),t.offsetWidth,t.classList.add("visible")}function u(){c=null,t.classList.remove("visible")}return{showCard:h,hideCard:u,onStart(f){o.addEventListener("click",()=>{n.classList.add("g3d-hidden"),s.classList.add("g3d-show"),window.setTimeout(()=>s.classList.add("g3d-fade"),7000),f()})},onTour(f){r.addEventListener("click",()=>{let m=f();r.textContent=m?"⏸ Stop tour":"▶ Tour"})},onSound(f){a.addEventListener("click",()=>{let m=f();a.textContent=m?"\uD83D\uDD0A Sound":"\uD83D\uDD07 Muted"})},setTourActive(f){r.textContent=f?"⏸ Stop tour":"▶ Tour"}}}function Ji(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Dx=["ambient-town","ufo-hum"],Ux=["scan-reveal","ui-click","takeoff"];class Nc{loops=new Map;sfx=new Map;voice=null;voices=new Map;enabled=!0;started=!1;async preload(e){await Promise.all([...Dx.map(async(t)=>{let n=await ho(t);if(n)n.loop=!0,n.volume=t==="ambient-town"?0.35:0.22,this.loops.set(t,n)}),...Ux.map(async(t)=>{let n=await ho(t);if(n)this.sfx.set(t,n)}),...e.map(async(t)=>{let n=await ho(`vo-${t}`);if(n)n.volume=0.9,this.voices.set(t,n)})])}start(){if(this.started=!0,!this.enabled)return;for(let e of this.loops.values())e.play().catch(()=>{});this.play("takeoff")}play(e){if(!this.enabled||!this.started)return;let t=this.sfx.get(e);if(!t)return;t.currentTime=0,t.play().catch(()=>{})}playVoice(e){if(!this.enabled||!this.started)return;this.stopVoice();let t=this.voices.get(e)??null;if(this.voice=t,t)t.currentTime=0,t.play().catch(()=>{})}stopVoice(){if(this.voice)this.voice.pause();this.voice=null}toggle(){if(this.enabled=!this.enabled,!this.enabled){for(let e of this.loops.values())e.pause();this.stopVoice()}else if(this.started)for(let e of this.loops.values())e.play().catch(()=>{});return this.enabled}}var cf=document.getElementById("app"),hf=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Fn=new dc({antialias:!0});Fn.setPixelRatio(Math.min(window.devicePixelRatio,2));Fn.setSize(window.innerWidth,window.innerHeight);Fn.shadowMap.enabled=!0;Fn.shadowMap.type=Pi;Fn.toneMapping=Ni;Fn.toneMappingExposure=1.05;cf.appendChild(Fn.domElement);var bi=new za;bi.fog=new wr(Td,110,360);var js=new It(55,window.innerWidth/window.innerHeight,0.1,900);bi.add(new Ja(4478335,922144,1));var ii=new ks(12570879,0.9);ii.position.set(-60,90,-40);ii.castShadow=!0;ii.shadow.mapSize.set(2048,2048);ii.shadow.camera.left=-75;ii.shadow.camera.right=75;ii.shadow.camera.top=75;ii.shadow.camera.bottom=-75;ii.shadow.camera.far=260;bi.add(ii);var Qs=rf(bi);sf(bi,Qs.map((e)=>e.angle));var ni=of(bi,hf),Wr=new mc(Fn);Wr.addPass(new gc(bi,js));var Fx=new Yi(new Se(window.innerWidth,window.innerHeight),oo.strength,oo.radius,oo.threshold);Wr.addPass(Fx);Wr.addPass(new _c);var Js=lf(cf),$s=new Nc;$s.preload(Qs.map((e)=>e.def.id));var uo=new Lc(Fn.domElement),Vr=!1;Js.onStart(()=>{Vr=!0,$s.start()});Js.onSound(()=>$s.toggle());var $i=!1,Ks=-1,fo=0;Js.onTour(()=>{if($i=!$i,$i)uo.steered=!1,Ks=-1,fo=0;return $i});function Ox(e){if(Ks===-1)Ks=0;let t=Qs[Ks].center,n=t.x-ni.position.x,s=t.z-ni.position.z,r=Math.hypot(n,s);if(r<pn*0.4){if(fo+=e,fo>7)fo=0,Ks=(Ks+1)%Qs.length;return{x:0,z:0}}let a=Math.min(1,r/14);return{x:n/r*a,z:s/r*a}}var gn=null;function Bx(){let e=ni.position.x,t=ni.position.z;if(gn){if(Math.hypot(e-gn.center.x,t-gn.center.z)<pn+4)return gn}let n=null,s=pn+1;for(let r of Qs){let a=Math.hypot(e-r.center.x,t-r.center.z);if(a<s)s=a,n=r}return n}window.addEventListener("resize",()=>{js.aspect=window.innerWidth/window.innerHeight,js.updateProjectionMatrix(),Fn.setSize(window.innerWidth,window.innerHeight),Wr.setSize(window.innerWidth,window.innerHeight)});var Dc=new Hs;js.position.set(Dn.x,Dn.y+16,Dn.z+20);function uf(){requestAnimationFrame(uf),Dc.update();let e=Math.min(Dc.getDelta(),0.05),t=Dc.getElapsed(),n={x:0,z:0};if(Vr){if($i&&uo.steered)$i=!1,Js.setTourActive(!1);n=$i?Ox(e):uo.dir()}ni.update(e,n,uo.boost(),gn!==null,t);let s=gn;if(gn=Vr?Bx():null,gn!==s)if(gn)Js.showCard(gn.def),$s.play("scan-reveal"),$s.playVoice(gn.def.id);else Js.hideCard(),$s.stopVoice();af(Qs,gn,e,t);let r=bi.getObjectByName("plaza-sign");if(r){let o=Vr?0:1;r.material.opacity+=(o-r.material.opacity)*Math.min(1,e*2),r.visible=r.material.opacity>0.02}let a=Vr?new N(ni.position.x+Dn.x,Dn.y+(hf?0:Math.sin(t*0.7)*0.4),ni.position.z+Dn.z):new N(Dn.x,Dn.y+16,Dn.z+20);js.position.lerp(a,Math.min(1,e*3)),js.lookAt(ni.position.x,2,ni.position.z),Wr.render()}uf();

//# debugId=A310041F0CEF8A1264756E2164756E21
//# sourceMappingURL=index-1mk518ta.js.map
