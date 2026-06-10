import{s as tK,v as eK,w as CW}from"./index-w9p9s7t5.js";var BY="184";var zY=0,h$=1,_Y=2;var w9=1,CY=2,R6=3,U9=0,g8=1,c8=2,XJ=0,U7=1,I9=2,x$=3,g$=4,wY=5;var k6=100,IY=101,PY=102,AY=103,TY=104,SY=200,jY=201,vY=202,yY=203,fY=204,bY=205,hY=206,xY=207,gY=208,pY=209,lY=210,mY=211,uY=212,dY=213,cY=214,nY=0,sY=1,iY=2,p$=3,oY=4,aY=5,rY=6,tY=7,eY=0,JX=1,QX=2,LJ=0,G7=1,E7=2,q7=3,P9=4,N7=5,F7=6,O7=7;var L6=301,A9=302,D6=303,VQ=304,R7=306,G9=1000,V6=1001,MQ=1002,n8=1003,BQ=1004;var T9=1005;var T8=1006,M6=1007;var CJ=1008;var DJ=1009,$X=1010,ZX=1011,k7=1012,l$=1013,E9=1014,uJ=1015,u8=1016,m$=1017,u$=1018,B6=1020,WX=35902,YX=35899,XX=1021,KX=1022,wJ=1023,S9=1026,j9=1027,HX=1028,d$=1029,v9=1030,c$=1031;var n$=1033,zQ=33776,_Q=33777,CQ=33778,wQ=33779,s$=35840,i$=35841,o$=35842,a$=35843,r$=36196,t$=37492,e$=37496,JZ=37488,QZ=37489,IQ=37490,$Z=37491,ZZ=37808,WZ=37809,YZ=37810,XZ=37811,KZ=37812,HZ=37813,UZ=37814,GZ=37815,EZ=37816,qZ=37817,NZ=37818,FZ=37819,OZ=37820,RZ=37821,kZ=36492,LZ=36494,DZ=36495,VZ=36283,MZ=36284,PQ=36285,BZ=36286;var zZ=2300,AQ=2301;var _Z=0,L7=1,z6=2;var CZ=0,UX=1,y9="",s8="srgb",JJ="srgb-linear",wZ="linear",$8="srgb";var GX=512,EX=513,qX=514,TQ=515,NX=516,FX=517,SQ=518,OX=519;var IZ="300 es",PZ=2000;function RH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function kH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function F6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function RX(){let J=F6("canvas");return J.style.display="block",J}var xW={},O6=null;function H7(...J){let Q="THREE."+J.shift();if(O6)O6("log",Q,...J);else console.log(Q,...J)}function kX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function M0(...J){J=kX(J);let Q="THREE."+J.shift();if(O6)O6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function T0(...J){J=kX(J);let Q="THREE."+J.shift();if(O6)O6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function kQ(...J){let Q=J.join(" ");if(Q in xW)return;xW[Q]=!0,M0(...J)}function LX(J,Q,$){return new Promise(function(Z,W){function Y(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(Y,$);break;default:Z()}}setTimeout(Y,$)})}var DX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class dJ{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,Y=Z.length;W<Y;W++)Z[W].call(this,J);J.target=null}}}var h8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gW=1234567,X7=Math.PI/180,_9=180/Math.PI;function kJ(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(h8[J&255]+h8[J>>8&255]+h8[J>>16&255]+h8[J>>24&255]+"-"+h8[Q&255]+h8[Q>>8&255]+"-"+h8[Q>>16&15|64]+h8[Q>>24&255]+"-"+h8[$&63|128]+h8[$>>8&255]+"-"+h8[$>>16&255]+h8[$>>24&255]+h8[Z&255]+h8[Z>>8&255]+h8[Z>>16&255]+h8[Z>>24&255]).toLowerCase()}function n0(J,Q,$){return Math.max(Q,Math.min($,J))}function AZ(J,Q){return(J%Q+Q)%Q}function LH(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function DH(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function K7(J,Q,$){return(1-$)*J+$*Q}function VH(J,Q,$,Z){return K7(J,Q,1-Math.exp(-$*Z))}function MH(J,Q=1){return Q-Math.abs(AZ(J,Q*2)-Q)}function BH(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function zH(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function _H(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function CH(J,Q){return J+Math.random()*(Q-J)}function wH(J){return J*(0.5-Math.random())}function IH(J){if(J!==void 0)gW=J;let Q=gW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function PH(J){return J*X7}function AH(J){return J*_9}function TH(J){return(J&J-1)===0&&J!==0}function SH(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function jH(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function vH(J,Q,$,Z,W){let{cos:Y,sin:X}=Math,K=Y($/2),H=X($/2),U=Y((Q+Z)/2),G=X((Q+Z)/2),q=Y((Q-Z)/2),E=X((Q-Z)/2),F=Y((Z-Q)/2),R=X((Z-Q)/2);switch(W){case"XYX":J.set(K*G,H*q,H*E,K*U);break;case"YZY":J.set(H*E,K*G,H*q,K*U);break;case"ZXZ":J.set(H*q,H*E,K*G,K*U);break;case"XZX":J.set(K*G,H*R,H*F,K*U);break;case"YXY":J.set(H*F,K*G,H*R,K*U);break;case"ZYZ":J.set(H*R,H*F,K*G,K*U);break;default:M0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function RJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function Q8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var _6={DEG2RAD:X7,RAD2DEG:_9,generateUUID:kJ,clamp:n0,euclideanModulo:AZ,mapLinear:LH,inverseLerp:DH,lerp:K7,damp:VH,pingpong:MH,smoothstep:BH,smootherstep:zH,randInt:_H,randFloat:CH,randFloatSpread:wH,seededRandom:IH,degToRad:PH,radToDeg:AH,isPowerOfTwo:TH,ceilPowerOfTwo:SH,floorPowerOfTwo:jH,setQuaternionFromProperEuler:vH,normalize:Q8,denormalize:RJ};class L0{static{L0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,Y=this.y-J.y;return this.x=W*$-Y*Z+J.x,this.y=W*Z+Y*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class KJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,Y,X){let K=$[Z+0],H=$[Z+1],U=$[Z+2],G=$[Z+3],q=W[Y+0],E=W[Y+1],F=W[Y+2],R=W[Y+3];if(G!==R||K!==q||H!==E||U!==F){let L=K*q+H*E+U*F+G*R;if(L<0)q=-q,E=-E,F=-F,R=-R,L=-L;let N=1-X;if(L<0.9995){let O=Math.acos(L),M=Math.sin(O);N=Math.sin(N*O)/M,X=Math.sin(X*O)/M,K=K*N+q*X,H=H*N+E*X,U=U*N+F*X,G=G*N+R*X}else{K=K*N+q*X,H=H*N+E*X,U=U*N+F*X,G=G*N+R*X;let O=1/Math.sqrt(K*K+H*H+U*U+G*G);K*=O,H*=O,U*=O,G*=O}}J[Q]=K,J[Q+1]=H,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,Y){let X=$[Z],K=$[Z+1],H=$[Z+2],U=$[Z+3],G=W[Y],q=W[Y+1],E=W[Y+2],F=W[Y+3];return J[Q]=X*F+U*G+K*E-H*q,J[Q+1]=K*F+U*q+H*G-X*E,J[Q+2]=H*F+U*E+X*q-K*G,J[Q+3]=U*F-X*G-K*q-H*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:Y}=J,X=Math.cos,K=Math.sin,H=X($/2),U=X(Z/2),G=X(W/2),q=K($/2),E=K(Z/2),F=K(W/2);switch(Y){case"XYZ":this._x=q*U*G+H*E*F,this._y=H*E*G-q*U*F,this._z=H*U*F+q*E*G,this._w=H*U*G-q*E*F;break;case"YXZ":this._x=q*U*G+H*E*F,this._y=H*E*G-q*U*F,this._z=H*U*F-q*E*G,this._w=H*U*G+q*E*F;break;case"ZXY":this._x=q*U*G-H*E*F,this._y=H*E*G+q*U*F,this._z=H*U*F+q*E*G,this._w=H*U*G-q*E*F;break;case"ZYX":this._x=q*U*G-H*E*F,this._y=H*E*G+q*U*F,this._z=H*U*F-q*E*G,this._w=H*U*G+q*E*F;break;case"YZX":this._x=q*U*G+H*E*F,this._y=H*E*G+q*U*F,this._z=H*U*F-q*E*G,this._w=H*U*G-q*E*F;break;case"XZY":this._x=q*U*G-H*E*F,this._y=H*E*G-q*U*F,this._z=H*U*F+q*E*G,this._w=H*U*G+q*E*F;break;default:M0("Quaternion: .setFromEuler() encountered an unknown order: "+Y)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],Y=Q[1],X=Q[5],K=Q[9],H=Q[2],U=Q[6],G=Q[10],q=$+X+G;if(q>0){let E=0.5/Math.sqrt(q+1);this._w=0.25/E,this._x=(U-K)*E,this._y=(W-H)*E,this._z=(Y-Z)*E}else if($>X&&$>G){let E=2*Math.sqrt(1+$-X-G);this._w=(U-K)/E,this._x=0.25*E,this._y=(Z+Y)/E,this._z=(W+H)/E}else if(X>G){let E=2*Math.sqrt(1+X-$-G);this._w=(W-H)/E,this._x=(Z+Y)/E,this._y=0.25*E,this._z=(K+U)/E}else{let E=2*Math.sqrt(1+G-$-X);this._w=(Y-Z)/E,this._x=(W+H)/E,this._y=(K+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(n0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:Y}=J,X=Q._x,K=Q._y,H=Q._z,U=Q._w;return this._x=$*U+Y*X+Z*H-W*K,this._y=Z*U+Y*K+W*X-$*H,this._z=W*U+Y*H+$*K-Z*X,this._w=Y*U-$*X-Z*K-W*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:Y}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,W=-W,Y=-Y,X=-X;let K=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);K=Math.sin(K*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*K+$*Q,this._y=this._y*K+Z*Q,this._z=this._z*K+W*Q,this._w=this._w*K+Y*Q,this._onChangeCallback()}else this._x=this._x*K+$*Q,this._y=this._y*K+Z*Q,this._z=this._z*K+W*Q,this._w=this._w*K+Y*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{static{T.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(pW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(pW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,Y=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*Y,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*Y,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*Y,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,Y=J.y,X=J.z,K=J.w,H=2*(Y*Z-X*$),U=2*(X*Q-W*Z),G=2*(W*$-Y*Q);return this.x=Q+K*H+Y*G-X*U,this.y=$+K*U+X*H-W*G,this.z=Z+K*G+W*U-Y*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,Y=Q.x,X=Q.y,K=Q.z;return this.x=Z*K-W*X,this.y=W*Y-$*K,this.z=$*X-Z*Y,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return U$.copy(this).projectOnVector(J),this.sub(U$)}reflect(J){return this.sub(U$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var U$=new T,pW=new KJ;class j0{static{j0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,Y,X,K,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,Y,X,K,H)}set(J,Q,$,Z,W,Y,X,K,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=X,U[3]=Q,U[4]=W,U[5]=K,U[6]=$,U[7]=Y,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,Y=$[0],X=$[3],K=$[6],H=$[1],U=$[4],G=$[7],q=$[2],E=$[5],F=$[8],R=Z[0],L=Z[3],N=Z[6],O=Z[1],M=Z[4],B=Z[7],z=Z[2],A=Z[5],I=Z[8];return W[0]=Y*R+X*O+K*z,W[3]=Y*L+X*M+K*A,W[6]=Y*N+X*B+K*I,W[1]=H*R+U*O+G*z,W[4]=H*L+U*M+G*A,W[7]=H*N+U*B+G*I,W[2]=q*R+E*O+F*z,W[5]=q*L+E*M+F*A,W[8]=q*N+E*B+F*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],K=J[6],H=J[7],U=J[8];return Q*Y*U-Q*X*H-$*W*U+$*X*K+Z*W*H-Z*Y*K}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],K=J[6],H=J[7],U=J[8],G=U*Y-X*H,q=X*K-U*W,E=H*W-Y*K,F=Q*G+$*q+Z*E;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=G*R,J[1]=(Z*H-U*$)*R,J[2]=(X*$-Z*Y)*R,J[3]=q*R,J[4]=(U*Q-Z*K)*R,J[5]=(Z*W-X*Q)*R,J[6]=E*R,J[7]=($*K-H*Q)*R,J[8]=(Y*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,Y,X){let K=Math.cos(W),H=Math.sin(W);return this.set($*K,$*H,-$*(K*Y+H*X)+Y+J,-Z*H,Z*K,-Z*(-H*Y+K*X)+X+Q,0,0,1),this}scale(J,Q){return this.premultiply(G$.makeScale(J,Q)),this}rotate(J){return this.premultiply(G$.makeRotation(-J)),this}translate(J,Q){return this.premultiply(G$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var G$=new j0,lW=new j0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),mW=new j0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function yH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,Y,X){if(this.enabled===!1||Y===X||!Y||!X)return W;if(this.spaces[Y].transfer==="srgb")W.r=gJ(W.r),W.g=gJ(W.g),W.b=gJ(W.b);if(this.spaces[Y].primaries!==this.spaces[X].primaries)W.applyMatrix3(this.spaces[Y].toXYZ),W.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")W.r=N6(W.r),W.g=N6(W.g),W.b=N6(W.b);return W},workingToColorSpace:function(W,Y){return this.convert(W,this.workingColorSpace,Y)},colorSpaceToWorking:function(W,Y){return this.convert(W,Y,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,Y=this.workingColorSpace){return W.fromArray(this.spaces[Y].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,Y,X){return W.copy(this.spaces[Y].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,Y){return kQ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,Y)},toWorkingColorSpace:function(W,Y){return kQ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,Y)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:lW,fromXYZ:mW,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:lW,fromXYZ:mW,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var x0=yH();function gJ(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function N6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var o9;class TZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(o9===void 0)o9=F6("canvas");o9.width=J.width,o9.height=J.height;let Z=o9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=o9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=F6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let Y=0;Y<W.length;Y++)W[Y]=gJ(W[Y]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(gJ(Q[$]/255)*255);else Q[$]=gJ(Q[$]);return{data:Q,width:J.width,height:J.height}}else return M0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var fH=0;class D7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fH++}),this.uuid=kJ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let Y=0,X=Z.length;Y<X;Y++)if(Z[Y].isDataTexture)W.push(E$(Z[Y].image));else W.push(E$(Z[Y]))}else W=E$(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function E$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return TZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return M0("Texture: Unable to serialize Texture."),{}}var bH=0,q$=new T;class D8 extends dJ{constructor(J=D8.DEFAULT_IMAGE,Q=D8.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,Y=1008,X=1023,K=1009,H=D8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:bH++}),this.uuid=kJ(),this.name="",this.source=new D7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=Y,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=K,this.offset=new L0(0,0),this.repeat=new L0(1,1),this.center=new L0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(q$).x}get height(){return this.source.getSize(q$).y}get depth(){return this.source.getSize(q$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){M0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){M0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}D8.DEFAULT_IMAGE=null;D8.DEFAULT_MAPPING=300;D8.DEFAULT_ANISOTROPY=1;class Y8{static{Y8.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,Y=J.elements;return this.x=Y[0]*Q+Y[4]*$+Y[8]*Z+Y[12]*W,this.y=Y[1]*Q+Y[5]*$+Y[9]*Z+Y[13]*W,this.z=Y[2]*Q+Y[6]*$+Y[10]*Z+Y[14]*W,this.w=Y[3]*Q+Y[7]*$+Y[11]*Z+Y[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,Y=0.01,X=0.1,K=J.elements,H=K[0],U=K[4],G=K[8],q=K[1],E=K[5],F=K[9],R=K[2],L=K[6],N=K[10];if(Math.abs(U-q)<0.01&&Math.abs(G-R)<0.01&&Math.abs(F-L)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(G+R)<0.1&&Math.abs(F+L)<0.1&&Math.abs(H+E+N-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(H+1)/2,B=(E+1)/2,z=(N+1)/2,A=(U+q)/4,I=(G+R)/4,P=(F+L)/4;if(M>B&&M>z)if(M<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(M),Z=A/$,W=I/$;else if(B>z)if(B<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(B),$=A/Z,W=P/Z;else if(z<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(z),$=I/W,Z=P/W;return this.set($,Z,W,Q),this}let O=Math.sqrt((L-F)*(L-F)+(G-R)*(G-R)+(q-U)*(q-U));if(Math.abs(O)<0.001)O=1;return this.x=(L-F)/O,this.y=(G-R)/O,this.z=(q-U)/O,this.w=Math.acos((H+E+N-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this.w=n0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this.w=n0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SZ extends dJ{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new Y8(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y8(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},W=new D8(Z),Y=$.count;for(let X=0;X<Y;X++)this.textures[X]=W.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new D7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class S8 extends SZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class jQ extends D8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class jZ extends D8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v0{static{v0.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,Y,X,K,H,U,G,q,E,F,R,L){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,Y,X,K,H,U,G,q,E,F,R,L)}set(J,Q,$,Z,W,Y,X,K,H,U,G,q,E,F,R,L){let N=this.elements;return N[0]=J,N[4]=Q,N[8]=$,N[12]=Z,N[1]=W,N[5]=Y,N[9]=X,N[13]=K,N[2]=H,N[6]=U,N[10]=G,N[14]=q,N[3]=E,N[7]=F,N[11]=R,N[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new v0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/a9.setFromMatrixColumn(J,0).length(),W=1/a9.setFromMatrixColumn(J,1).length(),Y=1/a9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*Y,Q[9]=$[9]*Y,Q[10]=$[10]*Y,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,Y=Math.cos($),X=Math.sin($),K=Math.cos(Z),H=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let q=Y*U,E=Y*G,F=X*U,R=X*G;Q[0]=K*U,Q[4]=-K*G,Q[8]=H,Q[1]=E+F*H,Q[5]=q-R*H,Q[9]=-X*K,Q[2]=R-q*H,Q[6]=F+E*H,Q[10]=Y*K}else if(J.order==="YXZ"){let q=K*U,E=K*G,F=H*U,R=H*G;Q[0]=q+R*X,Q[4]=F*X-E,Q[8]=Y*H,Q[1]=Y*G,Q[5]=Y*U,Q[9]=-X,Q[2]=E*X-F,Q[6]=R+q*X,Q[10]=Y*K}else if(J.order==="ZXY"){let q=K*U,E=K*G,F=H*U,R=H*G;Q[0]=q-R*X,Q[4]=-Y*G,Q[8]=F+E*X,Q[1]=E+F*X,Q[5]=Y*U,Q[9]=R-q*X,Q[2]=-Y*H,Q[6]=X,Q[10]=Y*K}else if(J.order==="ZYX"){let q=Y*U,E=Y*G,F=X*U,R=X*G;Q[0]=K*U,Q[4]=F*H-E,Q[8]=q*H+R,Q[1]=K*G,Q[5]=R*H+q,Q[9]=E*H-F,Q[2]=-H,Q[6]=X*K,Q[10]=Y*K}else if(J.order==="YZX"){let q=Y*K,E=Y*H,F=X*K,R=X*H;Q[0]=K*U,Q[4]=R-q*G,Q[8]=F*G+E,Q[1]=G,Q[5]=Y*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=E*G+F,Q[10]=q-R*G}else if(J.order==="XZY"){let q=Y*K,E=Y*H,F=X*K,R=X*H;Q[0]=K*U,Q[4]=-G,Q[8]=H*U,Q[1]=q*G+R,Q[5]=Y*U,Q[9]=E*G-F,Q[2]=F*G-E,Q[6]=X*U,Q[10]=R*G+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(hH,J,xH)}lookAt(J,Q,$){let Z=this.elements;if(r8.subVectors(J,Q),r8.lengthSq()===0)r8.z=1;if(r8.normalize(),$9.crossVectors($,r8),$9.lengthSq()===0){if(Math.abs($.z)===1)r8.x+=0.0001;else r8.z+=0.0001;r8.normalize(),$9.crossVectors($,r8)}return $9.normalize(),m7.crossVectors(r8,$9),Z[0]=$9.x,Z[4]=m7.x,Z[8]=r8.x,Z[1]=$9.y,Z[5]=m7.y,Z[9]=r8.y,Z[2]=$9.z,Z[6]=m7.z,Z[10]=r8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,Y=$[0],X=$[4],K=$[8],H=$[12],U=$[1],G=$[5],q=$[9],E=$[13],F=$[2],R=$[6],L=$[10],N=$[14],O=$[3],M=$[7],B=$[11],z=$[15],A=Z[0],I=Z[4],P=Z[8],D=Z[12],C=Z[1],x=Z[5],w=Z[9],l=Z[13],c=Z[2],y=Z[6],u=Z[10],g=Z[14],m=Z[3],a=Z[7],Q0=Z[11],N0=Z[15];return W[0]=Y*A+X*C+K*c+H*m,W[4]=Y*I+X*x+K*y+H*a,W[8]=Y*P+X*w+K*u+H*Q0,W[12]=Y*D+X*l+K*g+H*N0,W[1]=U*A+G*C+q*c+E*m,W[5]=U*I+G*x+q*y+E*a,W[9]=U*P+G*w+q*u+E*Q0,W[13]=U*D+G*l+q*g+E*N0,W[2]=F*A+R*C+L*c+N*m,W[6]=F*I+R*x+L*y+N*a,W[10]=F*P+R*w+L*u+N*Q0,W[14]=F*D+R*l+L*g+N*N0,W[3]=O*A+M*C+B*c+z*m,W[7]=O*I+M*x+B*y+z*a,W[11]=O*P+M*w+B*u+z*Q0,W[15]=O*D+M*l+B*g+z*N0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],Y=J[1],X=J[5],K=J[9],H=J[13],U=J[2],G=J[6],q=J[10],E=J[14],F=J[3],R=J[7],L=J[11],N=J[15],O=K*E-H*q,M=X*E-H*G,B=X*q-K*G,z=Y*E-H*U,A=Y*q-K*U,I=Y*G-X*U;return Q*(R*O-L*M+N*B)-$*(F*O-L*z+N*A)+Z*(F*M-R*z+N*I)-W*(F*B-R*A+L*I)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],Y=J[4],X=J[5],K=J[6],H=J[7],U=J[8],G=J[9],q=J[10],E=J[11],F=J[12],R=J[13],L=J[14],N=J[15],O=Q*X-$*Y,M=Q*K-Z*Y,B=Q*H-W*Y,z=$*K-Z*X,A=$*H-W*X,I=Z*H-W*K,P=U*R-G*F,D=U*L-q*F,C=U*N-E*F,x=G*L-q*R,w=G*N-E*R,l=q*N-E*L,c=O*l-M*w+B*x+z*C-A*D+I*P;if(c===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/c;return J[0]=(X*l-K*w+H*x)*y,J[1]=(Z*w-$*l-W*x)*y,J[2]=(R*I-L*A+N*z)*y,J[3]=(q*A-G*I-E*z)*y,J[4]=(K*C-Y*l-H*D)*y,J[5]=(Q*l-Z*C+W*D)*y,J[6]=(L*B-F*I-N*M)*y,J[7]=(U*I-q*B+E*M)*y,J[8]=(Y*w-X*C+H*P)*y,J[9]=($*C-Q*w-W*P)*y,J[10]=(F*A-R*B+N*O)*y,J[11]=(G*B-U*A-E*O)*y,J[12]=(X*D-Y*x-K*P)*y,J[13]=(Q*x-$*D+Z*P)*y,J[14]=(R*M-F*z-L*O)*y,J[15]=(U*z-G*M+q*O)*y,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,Y=J.x,X=J.y,K=J.z,H=W*Y,U=W*X;return this.set(H*Y+$,H*X-Z*K,H*K+Z*X,0,H*X+Z*K,U*X+$,U*K-Z*Y,0,H*K-Z*X,U*K+Z*Y,W*K*K+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,Y){return this.set(1,$,W,0,J,1,Y,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,Y=Q._y,X=Q._z,K=Q._w,H=W+W,U=Y+Y,G=X+X,q=W*H,E=W*U,F=W*G,R=Y*U,L=Y*G,N=X*G,O=K*H,M=K*U,B=K*G,z=$.x,A=$.y,I=$.z;return Z[0]=(1-(R+N))*z,Z[1]=(E+B)*z,Z[2]=(F-M)*z,Z[3]=0,Z[4]=(E-B)*A,Z[5]=(1-(q+N))*A,Z[6]=(L+O)*A,Z[7]=0,Z[8]=(F+M)*I,Z[9]=(L-O)*I,Z[10]=(1-(q+R))*I,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinant();if(W===0)return $.set(1,1,1),Q.identity(),this;let Y=a9.set(Z[0],Z[1],Z[2]).length(),X=a9.set(Z[4],Z[5],Z[6]).length(),K=a9.set(Z[8],Z[9],Z[10]).length();if(W<0)Y=-Y;NJ.copy(this);let H=1/Y,U=1/X,G=1/K;return NJ.elements[0]*=H,NJ.elements[1]*=H,NJ.elements[2]*=H,NJ.elements[4]*=U,NJ.elements[5]*=U,NJ.elements[6]*=U,NJ.elements[8]*=G,NJ.elements[9]*=G,NJ.elements[10]*=G,Q.setFromRotationMatrix(NJ),$.x=Y,$.y=X,$.z=K,this}makePerspective(J,Q,$,Z,W,Y,X=2000,K=!1){let H=this.elements,U=2*W/(Q-J),G=2*W/($-Z),q=(Q+J)/(Q-J),E=($+Z)/($-Z),F,R;if(K)F=W/(Y-W),R=Y*W/(Y-W);else if(X===2000)F=-(Y+W)/(Y-W),R=-2*Y*W/(Y-W);else if(X===2001)F=-Y/(Y-W),R=-Y*W/(Y-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=q,H[12]=0,H[1]=0,H[5]=G,H[9]=E,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=R,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,W,Y,X=2000,K=!1){let H=this.elements,U=2/(Q-J),G=2/($-Z),q=-(Q+J)/(Q-J),E=-($+Z)/($-Z),F,R;if(K)F=1/(Y-W),R=Y/(Y-W);else if(X===2000)F=-2/(Y-W),R=-(Y+W)/(Y-W);else if(X===2001)F=-1/(Y-W),R=-W/(Y-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=q,H[1]=0,H[5]=G,H[9]=0,H[13]=E,H[2]=0,H[6]=0,H[10]=F,H[14]=R,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var a9=new T,NJ=new v0,hH=new T(0,0,0),xH=new T(1,1,1),$9=new T,m7=new T,r8=new T,uW=new v0,dW=new KJ;class pJ{constructor(J=0,Q=0,$=0,Z=pJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],Y=Z[4],X=Z[8],K=Z[1],H=Z[5],U=Z[9],G=Z[2],q=Z[6],E=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(n0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-Y,W);else this._x=Math.atan2(q,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-n0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,E),this._z=Math.atan2(K,H);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(n0(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-G,E),this._z=Math.atan2(-Y,H);else this._y=0,this._z=Math.atan2(K,W);break;case"ZYX":if(this._y=Math.asin(-n0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(q,E),this._z=Math.atan2(K,W);else this._x=0,this._z=Math.atan2(-Y,H);break;case"YZX":if(this._z=Math.asin(n0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(X,E);break;case"XZY":if(this._z=Math.asin(-n0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(q,H),this._y=Math.atan2(X,W);else this._x=Math.atan2(-U,E),this._y=0;break;default:M0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return uW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(uW,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return dW.setFromEuler(this),this.setFromQuaternion(dW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pJ.DEFAULT_ORDER="XYZ";class vQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var gH=0,cW=new T,r9=new KJ,jJ=new v0,u7=new T,o6=new T,pH=new T,lH=new KJ,nW=new T(1,0,0),sW=new T(0,1,0),iW=new T(0,0,1),oW={type:"added"},mH={type:"removed"},t9={type:"childadded",child:null},N$={type:"childremoved",child:null};class G8 extends dJ{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:gH++}),this.uuid=kJ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=G8.DEFAULT_UP.clone();let J=new T,Q=new pJ,$=new KJ,Z=new T(1,1,1);function W(){$.setFromEuler(Q,!1)}function Y(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(Y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new v0},normalMatrix:{value:new j0}}),this.matrix=new v0,this.matrixWorld=new v0,this.matrixAutoUpdate=G8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=G8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return r9.setFromAxisAngle(J,Q),this.quaternion.multiply(r9),this}rotateOnWorldAxis(J,Q){return r9.setFromAxisAngle(J,Q),this.quaternion.premultiply(r9),this}rotateX(J){return this.rotateOnAxis(nW,J)}rotateY(J){return this.rotateOnAxis(sW,J)}rotateZ(J){return this.rotateOnAxis(iW,J)}translateOnAxis(J,Q){return cW.copy(J).applyQuaternion(this.quaternion),this.position.add(cW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(nW,J)}translateY(J){return this.translateOnAxis(sW,J)}translateZ(J){return this.translateOnAxis(iW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(jJ.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)u7.copy(J);else u7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),o6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)jJ.lookAt(o6,u7,this.up);else jJ.lookAt(u7,o6,this.up);if(this.quaternion.setFromRotationMatrix(jJ),Z)jJ.extractRotation(Z.matrixWorld),r9.setFromRotationMatrix(jJ),this.quaternion.premultiply(r9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return T0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(oW),t9.child=J,this.dispatchEvent(t9),t9.child=null;else T0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(mH),N$.child=J,this.dispatchEvent(N$),N$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),jJ.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),jJ.multiply(J.parent.matrixWorld);return J.applyMatrix4(jJ),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(oW),t9.child=J,this.dispatchEvent(t9),t9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let Y=this.children[$].getObjectByProperty(J,Q);if(Y!==void 0)return Y}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,Y=Z.length;W<Y;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(o6,J,pH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(o6,lH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,Y=Z.length;W<Y;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(X,K){if(X[K.uuid]===void 0)X[K.uuid]=K.toJSON(J);return K.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let K=X.shapes;if(Array.isArray(K))for(let H=0,U=K.length;H<U;H++){let G=K[H];W(J.shapes,G)}else W(J.shapes,K)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let K=0,H=this.material.length;K<H;K++)X.push(W(J.materials,this.material[K]));Z.material=X}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let K=this.animations[X];Z.animations.push(W(J.animations,K))}}if(Q){let X=Y(J.geometries),K=Y(J.materials),H=Y(J.textures),U=Y(J.images),G=Y(J.shapes),q=Y(J.skeletons),E=Y(J.animations),F=Y(J.nodes);if(X.length>0)$.geometries=X;if(K.length>0)$.materials=K;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(q.length>0)$.skeletons=q;if(E.length>0)$.animations=E;if(F.length>0)$.nodes=F}return $.object=Z,$;function Y(X){let K=[];for(let H in X){let U=X[H];delete U.metadata,K.push(U)}return K}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}G8.DEFAULT_UP=new T(0,1,0);G8.DEFAULT_MATRIX_AUTO_UPDATE=!0;G8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class O8 extends G8{constructor(){super();this.isGroup=!0,this.type="Group"}}var uH={type:"move"};class V7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new O8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new O8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new O8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,Y=null,X=this._targetRay,K=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){Y=!0;for(let R of J.hand.values()){let L=Q.getJointPose(R,$),N=this._getHandJoint(H,R);if(L!==null)N.matrix.fromArray(L.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=L.radius;N.visible=L!==null}let U=H.joints["index-finger-tip"],G=H.joints["thumb-tip"],q=U.position.distanceTo(G.position),E=0.02,F=0.005;if(H.inputState.pinching&&q>E+F)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&q<=E-F)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(K!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1;if(K.eventsEnabled)K.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(uH)}}}if(X!==null)X.visible=Z!==null;if(K!==null)K.visible=W!==null;if(H!==null)H.visible=Y!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new O8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var VX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Z9={h:0,s:0,l:0},d7={h:0,s:0,l:0};function F$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class B0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,x0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=x0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,x0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=x0.workingColorSpace){if(J=AZ(J,1),Q=n0(Q,0,1),$=n0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,Y=2*$-W;this.r=F$(Y,W,J+0.3333333333333333),this.g=F$(Y,W,J),this.b=F$(Y,W,J-0.3333333333333333)}return x0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)M0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,Y=Z[1],X=Z[2];switch(Y){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:M0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],Y=W.length;if(Y===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(Y===6)return this.setHex(parseInt(W,16),Q);else M0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=VX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else M0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=gJ(J.r),this.g=gJ(J.g),this.b=gJ(J.b),this}copyLinearToSRGB(J){return this.r=N6(J.r),this.g=N6(J.g),this.b=N6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return x0.workingToColorSpace(x8.copy(this),J),Math.round(n0(x8.r*255,0,255))*65536+Math.round(n0(x8.g*255,0,255))*256+Math.round(n0(x8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=x0.workingColorSpace){x0.workingToColorSpace(x8.copy(this),Q);let{r:$,g:Z,b:W}=x8,Y=Math.max($,Z,W),X=Math.min($,Z,W),K,H,U=(X+Y)/2;if(X===Y)K=0,H=0;else{let G=Y-X;switch(H=U<=0.5?G/(Y+X):G/(2-Y-X),Y){case $:K=(Z-W)/G+(Z<W?6:0);break;case Z:K=(W-$)/G+2;break;case W:K=($-Z)/G+4;break}K/=6}return J.h=K,J.s=H,J.l=U,J}getRGB(J,Q=x0.workingColorSpace){return x0.workingToColorSpace(x8.copy(this),Q),J.r=x8.r,J.g=x8.g,J.b=x8.b,J}getStyle(J="srgb"){x0.workingToColorSpace(x8.copy(this),J);let{r:Q,g:$,b:Z}=x8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(Z9),this.setHSL(Z9.h+J,Z9.s+Q,Z9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(Z9),J.getHSL(d7);let $=K7(Z9.h,d7.h,Q),Z=K7(Z9.s,d7.s,Q),W=K7(Z9.l,d7.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var x8=new B0;B0.NAMES=VX;class M7{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new B0(J),this.near=Q,this.far=$}clone(){return new M7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yQ extends G8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pJ,this.environmentIntensity=1,this.environmentRotation=new pJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var FJ=new T,vJ=new T,O$=new T,yJ=new T,e9=new T,J6=new T,aW=new T,R$=new T,k$=new T,L$=new T,D$=new Y8,V$=new Y8,M$=new Y8;class e8{constructor(J=new T,Q=new T,$=new T){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),FJ.subVectors(J,Q),Z.cross(FJ);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){FJ.subVectors(Z,Q),vJ.subVectors($,Q),O$.subVectors(J,Q);let Y=FJ.dot(FJ),X=FJ.dot(vJ),K=FJ.dot(O$),H=vJ.dot(vJ),U=vJ.dot(O$),G=Y*H-X*X;if(G===0)return W.set(0,0,0),null;let q=1/G,E=(H*K-X*U)*q,F=(Y*U-X*K)*q;return W.set(1-E-F,F,E)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,yJ)===null)return!1;return yJ.x>=0&&yJ.y>=0&&yJ.x+yJ.y<=1}static getInterpolation(J,Q,$,Z,W,Y,X,K){if(this.getBarycoord(J,Q,$,Z,yJ)===null){if(K.x=0,K.y=0,"z"in K)K.z=0;if("w"in K)K.w=0;return null}return K.setScalar(0),K.addScaledVector(W,yJ.x),K.addScaledVector(Y,yJ.y),K.addScaledVector(X,yJ.z),K}static getInterpolatedAttribute(J,Q,$,Z,W,Y){return D$.setScalar(0),V$.setScalar(0),M$.setScalar(0),D$.fromBufferAttribute(J,Q),V$.fromBufferAttribute(J,$),M$.fromBufferAttribute(J,Z),Y.setScalar(0),Y.addScaledVector(D$,W.x),Y.addScaledVector(V$,W.y),Y.addScaledVector(M$,W.z),Y}static isFrontFacing(J,Q,$,Z){return FJ.subVectors($,Q),vJ.subVectors(J,Q),FJ.cross(vJ).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return FJ.subVectors(this.c,this.b),vJ.subVectors(this.a,this.b),FJ.cross(vJ).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return e8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return e8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return e8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return e8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return e8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,Y,X;e9.subVectors(Z,$),J6.subVectors(W,$),R$.subVectors(J,$);let K=e9.dot(R$),H=J6.dot(R$);if(K<=0&&H<=0)return Q.copy($);k$.subVectors(J,Z);let U=e9.dot(k$),G=J6.dot(k$);if(U>=0&&G<=U)return Q.copy(Z);let q=K*G-U*H;if(q<=0&&K>=0&&U<=0)return Y=K/(K-U),Q.copy($).addScaledVector(e9,Y);L$.subVectors(J,W);let E=e9.dot(L$),F=J6.dot(L$);if(F>=0&&E<=F)return Q.copy(W);let R=E*H-K*F;if(R<=0&&H>=0&&F<=0)return X=H/(H-F),Q.copy($).addScaledVector(J6,X);let L=U*F-E*G;if(L<=0&&G-U>=0&&E-F>=0)return aW.subVectors(W,Z),X=(G-U)/(G-U+(E-F)),Q.copy(Z).addScaledVector(aW,X);let N=1/(L+R+q);return Y=R*N,X=q*N,Q.copy($).addScaledVector(e9,Y).addScaledVector(J6,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class j8{constructor(J=new T(1/0,1/0,1/0),Q=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(OJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(OJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=OJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let Y=0,X=W.count;Y<X;Y++){if(J.isMesh===!0)J.getVertexPosition(Y,OJ);else OJ.fromBufferAttribute(W,Y);OJ.applyMatrix4(J.matrixWorld),this.expandByPoint(OJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();c7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();c7.copy($.boundingBox)}c7.applyMatrix4(J.matrixWorld),this.union(c7)}}let Z=J.children;for(let W=0,Y=Z.length;W<Y;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,OJ),OJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(a6),n7.subVectors(this.max,a6),Q6.subVectors(J.a,a6),$6.subVectors(J.b,a6),Z6.subVectors(J.c,a6),W9.subVectors($6,Q6),Y9.subVectors(Z6,$6),V9.subVectors(Q6,Z6);let Q=[0,-W9.z,W9.y,0,-Y9.z,Y9.y,0,-V9.z,V9.y,W9.z,0,-W9.x,Y9.z,0,-Y9.x,V9.z,0,-V9.x,-W9.y,W9.x,0,-Y9.y,Y9.x,0,-V9.y,V9.x,0];if(!B$(Q,Q6,$6,Z6,n7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!B$(Q,Q6,$6,Z6,n7))return!1;return s7.crossVectors(W9,Y9),Q=[s7.x,s7.y,s7.z],B$(Q,Q6,$6,Z6,n7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,OJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(OJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return fJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),fJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),fJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),fJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),fJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),fJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),fJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),fJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(fJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var fJ=[new T,new T,new T,new T,new T,new T,new T,new T],OJ=new T,c7=new j8,Q6=new T,$6=new T,Z6=new T,W9=new T,Y9=new T,V9=new T,a6=new T,n7=new T,s7=new T,M9=new T;function B$(J,Q,$,Z,W){for(let Y=0,X=J.length-3;Y<=X;Y+=3){M9.fromArray(J,Y);let K=W.x*Math.abs(M9.x)+W.y*Math.abs(M9.y)+W.z*Math.abs(M9.z),H=Q.dot(M9),U=$.dot(M9),G=Z.dot(M9);if(Math.max(-Math.max(H,U,G),Math.min(H,U,G))>K)return!1}return!0}var _8=new T,i7=new L0,dH=0;class V8 extends dJ{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)i7.fromBufferAttribute(this,Q),i7.applyMatrix3(J),this.setXY(Q,i7.x,i7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)_8.fromBufferAttribute(this,Q),_8.applyMatrix3(J),this.setXYZ(Q,_8.x,_8.y,_8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)_8.fromBufferAttribute(this,Q),_8.applyMatrix4(J),this.setXYZ(Q,_8.x,_8.y,_8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)_8.fromBufferAttribute(this,Q),_8.applyNormalMatrix(J),this.setXYZ(Q,_8.x,_8.y,_8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)_8.fromBufferAttribute(this,Q),_8.transformDirection(J),this.setXYZ(Q,_8.x,_8.y,_8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=RJ($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=Q8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=RJ(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=RJ(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=RJ(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=RJ(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),Z=Q8(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),Z=Q8(Z,this.array),W=Q8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class fQ extends V8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class bQ extends V8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class r0 extends V8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var cH=new j8,r6=new T,z$=new T;class QJ{constructor(J=new T,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else cH.setFromPoints(J).getCenter($);let Z=0;for(let W=0,Y=J.length;W<Y;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;r6.subVectors(J,this.center);let Q=r6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(r6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else z$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(r6.copy(J.center).add(z$)),this.expandByPoint(r6.copy(J.center).sub(z$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var nH=0,YJ=new v0,_$=new G8,W6=new T,t8=new j8,t6=new j8,A8=new T;class N8 extends dJ{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nH++}),this.uuid=kJ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((RH(J))?bQ:fQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new j0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return YJ.makeRotationFromQuaternion(J),this.applyMatrix4(YJ),this}rotateX(J){return YJ.makeRotationX(J),this.applyMatrix4(YJ),this}rotateY(J){return YJ.makeRotationY(J),this.applyMatrix4(YJ),this}rotateZ(J){return YJ.makeRotationZ(J),this.applyMatrix4(YJ),this}translate(J,Q,$){return YJ.makeTranslation(J,Q,$),this.applyMatrix4(YJ),this}scale(J,Q,$){return YJ.makeScale(J,Q,$),this.applyMatrix4(YJ),this}lookAt(J){return _$.lookAt(J),_$.updateMatrix(),this.applyMatrix4(_$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(W6).negate(),this.translate(W6.x,W6.y,W6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let Y=J[Z];$.push(Y.x,Y.y,Y.z||0)}this.setAttribute("position",new r0($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)M0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new j8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(t8.setFromBufferAttribute(W),this.morphTargetsRelative)A8.addVectors(this.boundingBox.min,t8.min),this.boundingBox.expandByPoint(A8),A8.addVectors(this.boundingBox.max,t8.max),this.boundingBox.expandByPoint(A8);else this.boundingBox.expandByPoint(t8.min),this.boundingBox.expandByPoint(t8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))T0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new QJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){T0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(J){let $=this.boundingSphere.center;if(t8.setFromBufferAttribute(J),Q)for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W];if(t6.setFromBufferAttribute(X),this.morphTargetsRelative)A8.addVectors(t8.min,t6.min),t8.expandByPoint(A8),A8.addVectors(t8.max,t6.max),t8.expandByPoint(A8);else t8.expandByPoint(t6.min),t8.expandByPoint(t6.max)}t8.getCenter($);let Z=0;for(let W=0,Y=J.count;W<Y;W++)A8.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(A8));if(Q)for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W],K=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(A8.fromBufferAttribute(X,H),K)W6.fromBufferAttribute(J,H),A8.add(W6);Z=Math.max(Z,$.distanceToSquared(A8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))T0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){T0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new V8(new Float32Array(4*$.count),4));let Y=this.getAttribute("tangent"),X=[],K=[];for(let P=0;P<$.count;P++)X[P]=new T,K[P]=new T;let H=new T,U=new T,G=new T,q=new L0,E=new L0,F=new L0,R=new T,L=new T;function N(P,D,C){H.fromBufferAttribute($,P),U.fromBufferAttribute($,D),G.fromBufferAttribute($,C),q.fromBufferAttribute(W,P),E.fromBufferAttribute(W,D),F.fromBufferAttribute(W,C),U.sub(H),G.sub(H),E.sub(q),F.sub(q);let x=1/(E.x*F.y-F.x*E.y);if(!isFinite(x))return;R.copy(U).multiplyScalar(F.y).addScaledVector(G,-E.y).multiplyScalar(x),L.copy(G).multiplyScalar(E.x).addScaledVector(U,-F.x).multiplyScalar(x),X[P].add(R),X[D].add(R),X[C].add(R),K[P].add(L),K[D].add(L),K[C].add(L)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let P=0,D=O.length;P<D;++P){let C=O[P],x=C.start,w=C.count;for(let l=x,c=x+w;l<c;l+=3)N(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let M=new T,B=new T,z=new T,A=new T;function I(P){z.fromBufferAttribute(Z,P),A.copy(z);let D=X[P];M.copy(D),M.sub(z.multiplyScalar(z.dot(D))).normalize(),B.crossVectors(A,D);let x=B.dot(K[P])<0?-1:1;Y.setXYZW(P,M.x,M.y,M.z,x)}for(let P=0,D=O.length;P<D;++P){let C=O[P],x=C.start,w=C.count;for(let l=x,c=x+w;l<c;l+=3)I(J.getX(l+0)),I(J.getX(l+1)),I(J.getX(l+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new V8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let q=0,E=$.count;q<E;q++)$.setXYZ(q,0,0,0);let Z=new T,W=new T,Y=new T,X=new T,K=new T,H=new T,U=new T,G=new T;if(J)for(let q=0,E=J.count;q<E;q+=3){let F=J.getX(q+0),R=J.getX(q+1),L=J.getX(q+2);Z.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,R),Y.fromBufferAttribute(Q,L),U.subVectors(Y,W),G.subVectors(Z,W),U.cross(G),X.fromBufferAttribute($,F),K.fromBufferAttribute($,R),H.fromBufferAttribute($,L),X.add(U),K.add(U),H.add(U),$.setXYZ(F,X.x,X.y,X.z),$.setXYZ(R,K.x,K.y,K.z),$.setXYZ(L,H.x,H.y,H.z)}else for(let q=0,E=Q.count;q<E;q+=3)Z.fromBufferAttribute(Q,q+0),W.fromBufferAttribute(Q,q+1),Y.fromBufferAttribute(Q,q+2),U.subVectors(Y,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(q+0,U.x,U.y,U.z),$.setXYZ(q+1,U.x,U.y,U.z),$.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)A8.fromBufferAttribute(J,Q),A8.normalize(),J.setXYZ(Q,A8.x,A8.y,A8.z)}toNonIndexed(){function J(X,K){let{array:H,itemSize:U,normalized:G}=X,q=new H.constructor(K.length*U),E=0,F=0;for(let R=0,L=K.length;R<L;R++){if(X.isInterleavedBufferAttribute)E=K[R]*X.data.stride+X.offset;else E=K[R]*U;for(let N=0;N<U;N++)q[F++]=H[E++]}return new V8(q,U,G)}if(this.index===null)return M0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new N8,$=this.index.array,Z=this.attributes;for(let X in Z){let K=Z[X],H=J(K,$);Q.setAttribute(X,H)}let W=this.morphAttributes;for(let X in W){let K=[],H=W[X];for(let U=0,G=H.length;U<G;U++){let q=H[U],E=J(q,$);K.push(E)}Q.morphAttributes[X]=K}Q.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;for(let X=0,K=Y.length;X<K;X++){let H=Y[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let K=this.parameters;for(let H in K)if(K[H]!==void 0)J[H]=K[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let K in $){let H=$[K];J.data.attributes[K]=H.toJSON(J.data)}let Z={},W=!1;for(let K in this.morphAttributes){let H=this.morphAttributes[K],U=[];for(let G=0,q=H.length;G<q;G++){let E=H[G];U.push(E.toJSON(J.data))}if(U.length>0)Z[K]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let Y=this.groups;if(Y.length>0)J.data.groups=JSON.parse(JSON.stringify(Y));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let W=J.morphAttributes;for(let H in W){let U=[],G=W[H];for(let q=0,E=G.length;q<E;q++)U.push(G[q].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let Y=J.groups;for(let H=0,U=Y.length;H<U;H++){let G=Y[H];this.addGroup(G.start,G.count,G.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let K=J.boundingSphere;if(K!==null)this.boundingSphere=K.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class C6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=kJ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=kJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=kJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var m8=new T;class H9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)m8.fromBufferAttribute(this,Q),m8.applyMatrix4(J),this.setXYZ(Q,m8.x,m8.y,m8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)m8.fromBufferAttribute(this,Q),m8.applyNormalMatrix(J),this.setXYZ(Q,m8.x,m8.y,m8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)m8.fromBufferAttribute(this,Q),m8.transformDirection(J),this.setXYZ(Q,m8.x,m8.y,m8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=RJ($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=Q8($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=Q8(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=RJ(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=RJ(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=RJ(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=RJ(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),Z=Q8(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=Q8(Q,this.array),$=Q8($,this.array),Z=Q8(Z,this.array),W=Q8(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){H7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new V8(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new H9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){H7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var sH=0;class i8 extends dJ{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:sH++}),this.uuid=kJ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){M0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){M0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let Y=[];for(let X in W){let K=W[X];delete K.metadata,Y.push(K)}return Y}if(Q){let W=Z(J.textures),Y=Z(J.images);if(W.length>0)$.textures=W;if(Y.length>0)$.images=Y}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class f9 extends i8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new B0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var Y6,e6=new T,X6=new T,K6=new T,H6=new L0,J7=new L0,MX=new v0,o7=new T,Q7=new T,a7=new T,rW=new L0,C$=new L0,tW=new L0;class w6 extends G8{constructor(J=new f9){super();if(this.isSprite=!0,this.type="Sprite",Y6===void 0){Y6=new N8;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new C6(Q,5);Y6.setIndex([0,1,2,0,2,3]),Y6.setAttribute("position",new H9($,3,0,!1)),Y6.setAttribute("uv",new H9($,2,3,!1))}this.geometry=Y6,this.material=J,this.center=new L0(0.5,0.5),this.count=1}raycast(J,Q){if(J.camera===null)T0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(X6.setFromMatrixScale(this.matrixWorld),MX.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),K6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)X6.multiplyScalar(-K6.z);let $=this.material.rotation,Z,W;if($!==0)W=Math.cos($),Z=Math.sin($);let Y=this.center;r7(o7.set(-0.5,-0.5,0),K6,Y,X6,Z,W),r7(Q7.set(0.5,-0.5,0),K6,Y,X6,Z,W),r7(a7.set(0.5,0.5,0),K6,Y,X6,Z,W),rW.set(0,0),C$.set(1,0),tW.set(1,1);let X=J.ray.intersectTriangle(o7,Q7,a7,!1,e6);if(X===null){if(r7(Q7.set(-0.5,0.5,0),K6,Y,X6,Z,W),C$.set(0,1),X=J.ray.intersectTriangle(o7,a7,Q7,!1,e6),X===null)return}let K=J.ray.origin.distanceTo(e6);if(K<J.near||K>J.far)return;Q.push({distance:K,point:e6.clone(),uv:e8.getInterpolation(e6,o7,Q7,a7,rW,C$,tW,new L0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function r7(J,Q,$,Z,W,Y){if(H6.subVectors(J,$).addScalar(0.5).multiply(Z),W!==void 0)J7.x=Y*H6.x-W*H6.y,J7.y=W*H6.x+Y*H6.y;else J7.copy(H6);J.copy(Q),J.x+=J7.x,J.y+=J7.y,J.applyMatrix4(MX)}var bJ=new T,w$=new T,t7=new T,X9=new T,I$=new T,e7=new T,P$=new T;class I6{constructor(J=new T,Q=new T(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,bJ)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=bJ.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return bJ.copy(this.origin).addScaledVector(this.direction,Q),bJ.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){w$.copy(J).add(Q).multiplyScalar(0.5),t7.copy(Q).sub(J).normalize(),X9.copy(this.origin).sub(w$);let W=J.distanceTo(Q)*0.5,Y=-this.direction.dot(t7),X=X9.dot(this.direction),K=-X9.dot(t7),H=X9.lengthSq(),U=Math.abs(1-Y*Y),G,q,E,F;if(U>0)if(G=Y*K-X,q=Y*X-K,F=W*U,G>=0)if(q>=-F)if(q<=F){let R=1/U;G*=R,q*=R,E=G*(G+Y*q+2*X)+q*(Y*G+q+2*K)+H}else q=W,G=Math.max(0,-(Y*q+X)),E=-G*G+q*(q+2*K)+H;else q=-W,G=Math.max(0,-(Y*q+X)),E=-G*G+q*(q+2*K)+H;else if(q<=-F)G=Math.max(0,-(-Y*W+X)),q=G>0?-W:Math.min(Math.max(-W,-K),W),E=-G*G+q*(q+2*K)+H;else if(q<=F)G=0,q=Math.min(Math.max(-W,-K),W),E=q*(q+2*K)+H;else G=Math.max(0,-(Y*W+X)),q=G>0?W:Math.min(Math.max(-W,-K),W),E=-G*G+q*(q+2*K)+H;else q=Y>0?-W:W,G=Math.max(0,-(Y*q+X)),E=-G*G+q*(q+2*K)+H;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(w$).addScaledVector(t7,q);return E}intersectSphere(J,Q){bJ.subVectors(J.center,this.origin);let $=bJ.dot(this.direction),Z=bJ.dot(bJ)-$*$,W=J.radius*J.radius;if(Z>W)return null;let Y=Math.sqrt(W-Z),X=$-Y,K=$+Y;if(K<0)return null;if(X<0)return this.at(K,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,Y,X,K,H=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,q=this.origin;if(H>=0)$=(J.min.x-q.x)*H,Z=(J.max.x-q.x)*H;else $=(J.max.x-q.x)*H,Z=(J.min.x-q.x)*H;if(U>=0)W=(J.min.y-q.y)*U,Y=(J.max.y-q.y)*U;else W=(J.max.y-q.y)*U,Y=(J.min.y-q.y)*U;if($>Y||W>Z)return null;if(W>$||isNaN($))$=W;if(Y<Z||isNaN(Z))Z=Y;if(G>=0)X=(J.min.z-q.z)*G,K=(J.max.z-q.z)*G;else X=(J.max.z-q.z)*G,K=(J.min.z-q.z)*G;if($>K||X>Z)return null;if(X>$||$!==$)$=X;if(K<Z||Z!==Z)Z=K;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,bJ)!==null}intersectTriangle(J,Q,$,Z,W){I$.subVectors(Q,J),e7.subVectors($,J),P$.crossVectors(I$,e7);let Y=this.direction.dot(P$),X;if(Y>0){if(Z)return null;X=1}else if(Y<0)X=-1,Y=-Y;else return null;X9.subVectors(this.origin,J);let K=X*this.direction.dot(e7.crossVectors(X9,e7));if(K<0)return null;let H=X*this.direction.dot(I$.cross(X9));if(H<0)return null;if(K+H>Y)return null;let U=-X*X9.dot(P$);if(U<0)return null;return this.at(U/Y,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y8 extends i8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new B0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var eW=new v0,B9=new I6,JQ=new QJ,JY=new T,QQ=new T,$Q=new T,ZQ=new T,A$=new T,WQ=new T,QY=new T,YQ=new T;class y0 extends G8{constructor(J=new N8,Q=new y8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,Y=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(W&&X){WQ.set(0,0,0);for(let K=0,H=W.length;K<H;K++){let U=X[K],G=W[K];if(U===0)continue;if(A$.fromBufferAttribute(G,J),Y)WQ.addScaledVector(A$,U);else WQ.addScaledVector(A$.sub(Q),U)}Q.add(WQ)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(JQ.copy($.boundingSphere),JQ.applyMatrix4(W),B9.copy(J.ray).recast(J.near),JQ.containsPoint(B9.origin)===!1){if(B9.intersectSphere(JQ,JY)===null)return;if(B9.origin.distanceToSquared(JY)>(J.far-J.near)**2)return}if(eW.copy(W).invert(),B9.copy(J.ray).applyMatrix4(eW),$.boundingBox!==null){if(B9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,B9)}_computeIntersections(J,Q,$){let Z,W=this.geometry,Y=this.material,X=W.index,K=W.attributes.position,H=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,q=W.groups,E=W.drawRange;if(X!==null)if(Array.isArray(Y))for(let F=0,R=q.length;F<R;F++){let L=q[F],N=Y[L.materialIndex],O=Math.max(L.start,E.start),M=Math.min(X.count,Math.min(L.start+L.count,E.start+E.count));for(let B=O,z=M;B<z;B+=3){let A=X.getX(B),I=X.getX(B+1),P=X.getX(B+2);if(Z=XQ(this,N,J,$,H,U,G,A,I,P),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=L.materialIndex,Q.push(Z)}}else{let F=Math.max(0,E.start),R=Math.min(X.count,E.start+E.count);for(let L=F,N=R;L<N;L+=3){let O=X.getX(L),M=X.getX(L+1),B=X.getX(L+2);if(Z=XQ(this,Y,J,$,H,U,G,O,M,B),Z)Z.faceIndex=Math.floor(L/3),Q.push(Z)}}else if(K!==void 0)if(Array.isArray(Y))for(let F=0,R=q.length;F<R;F++){let L=q[F],N=Y[L.materialIndex],O=Math.max(L.start,E.start),M=Math.min(K.count,Math.min(L.start+L.count,E.start+E.count));for(let B=O,z=M;B<z;B+=3){let A=B,I=B+1,P=B+2;if(Z=XQ(this,N,J,$,H,U,G,A,I,P),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=L.materialIndex,Q.push(Z)}}else{let F=Math.max(0,E.start),R=Math.min(K.count,E.start+E.count);for(let L=F,N=R;L<N;L+=3){let O=L,M=L+1,B=L+2;if(Z=XQ(this,Y,J,$,H,U,G,O,M,B),Z)Z.faceIndex=Math.floor(L/3),Q.push(Z)}}}}function iH(J,Q,$,Z,W,Y,X,K){let H;if(Q.side===1)H=Z.intersectTriangle(X,Y,W,!0,K);else H=Z.intersectTriangle(W,Y,X,Q.side===0,K);if(H===null)return null;YQ.copy(K),YQ.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(YQ);if(U<$.near||U>$.far)return null;return{distance:U,point:YQ.clone(),object:J}}function XQ(J,Q,$,Z,W,Y,X,K,H,U){J.getVertexPosition(K,QQ),J.getVertexPosition(H,$Q),J.getVertexPosition(U,ZQ);let G=iH(J,Q,$,Z,QQ,$Q,ZQ,QY);if(G){let q=new T;if(e8.getBarycoord(QY,QQ,$Q,ZQ,q),W)G.uv=e8.getInterpolatedAttribute(W,K,H,U,q,new L0);if(Y)G.uv1=e8.getInterpolatedAttribute(Y,K,H,U,q,new L0);if(X){if(G.normal=e8.getInterpolatedAttribute(X,K,H,U,q,new T),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let E={a:K,b:H,c:U,normal:new T,materialIndex:0};e8.getNormal(QQ,$Q,ZQ,E.normal),G.face=E,G.barycoord=q}return G}var $7=new Y8,$Y=new Y8,ZY=new Y8,oH=new Y8,WY=new v0,KQ=new T,T$=new QJ,YY=new v0,S$=new I6;class hQ extends y0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new v0,this.bindMatrixInverse=new v0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new j8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,KQ),this.boundingBox.expandByPoint(KQ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new QJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,KQ),this.boundingSphere.expandByPoint(KQ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(T$.copy(this.boundingSphere),T$.applyMatrix4(Z),J.ray.intersectsSphere(T$)===!1)return;if(YY.copy(Z).invert(),S$.copy(J.ray).applyMatrix4(YY),this.boundingBox!==null){if(S$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,S$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new Y8,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else M0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if($Y.fromBufferAttribute(Z.attributes.skinIndex,J),ZY.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)$7.copy(Q),Q.set(0,0,0,0);else $7.set(...Q,1),Q.set(0,0,0);$7.applyMatrix4(this.bindMatrix);for(let W=0;W<4;W++){let Y=ZY.getComponent(W);if(Y!==0){let X=$Y.getComponent(W);WY.multiplyMatrices($.bones[X].matrixWorld,$.boneInverses[X]),Q.addScaledVector(oH.copy($7).applyMatrix4(WY),Y)}}if(Q.isVector4)Q.w=$7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class B7 extends G8{constructor(){super();this.isBone=!0,this.type="Bone"}}class z7 extends D8{constructor(J=null,Q=1,$=1,Z,W,Y,X,K,H=1003,U=1003,G,q){super(null,Y,X,K,H,U,Z,W,G,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var XY=new v0,aH=new v0;class _7{constructor(J=[],Q=[]){this.uuid=kJ(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){M0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new v0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new v0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,Y=J.length;W<Y;W++){let X=J[W]?J[W].matrixWorld:aH;XY.multiplyMatrices(X,Q[W]),XY.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new _7(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new z7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],Y=Q[W];if(Y===void 0)M0("Skeleton: No bone found with UUID:",W),Y=new B7;this.bones.push(Y),this.boneInverses.push(new v0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let Y=Q[Z];J.bones.push(Y.uuid);let X=$[Z];J.boneInverses.push(X.toArray())}return J}}class C9 extends V8{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var U6=new v0,KY=new v0,HQ=[],HY=new j8,rH=new v0,Z7=new y0,W7=new QJ;class xQ extends y0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new C9(new Float32Array($*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,rH)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new j8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,U6),HY.copy(J.boundingBox).applyMatrix4(U6),this.boundingBox.union(HY)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new QJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,U6),W7.copy(J.boundingSphere).applyMatrix4(U6),this.boundingSphere.union(W7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.previousInstanceMatrix!==null)this.previousInstanceMatrix=J.previousInstanceMatrix.clone();if(J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,Y=J*W+1;for(let X=0;X<$.length;X++)$[X]=Z[Y+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(Z7.geometry=this.geometry,Z7.material=this.material,Z7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(W7.copy(this.boundingSphere),W7.applyMatrix4($),J.ray.intersectsSphere(W7)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,U6),KY.multiplyMatrices($,U6),Z7.matrixWorld=KY,Z7.raycast(J,HQ);for(let Y=0,X=HQ.length;Y<X;Y++){let K=HQ[Y];K.instanceId=W,K.object=this,Q.push(K)}HQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new C9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new z7(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,Y=0;for(let H=0;H<$.length;H++)Y+=$[H];let X=this.geometry.morphTargetsRelative?1:1-Y,K=Z*J;return W[K]=X,W.set($,K+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var j$=new T,tH=new T,eH=new j0;class xJ{constructor(J=new T(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=j$.subVectors($,Q).cross(tH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(j$),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let Y=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(Y<0||Y>1))return null;return Q.copy(J.start).addScaledVector(Z,Y)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||eH.getNormalMatrix(J),Z=this.coplanarPoint(j$).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var z9=new QJ,JU=new L0(0.5,0.5),UQ=new T;class C7{constructor(J=new xJ,Q=new xJ,$=new xJ,Z=new xJ,W=new xJ,Y=new xJ){this.planes=[J,Q,$,Z,W,Y]}set(J,Q,$,Z,W,Y){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(W),X[5].copy(Y),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,Y=W[0],X=W[1],K=W[2],H=W[3],U=W[4],G=W[5],q=W[6],E=W[7],F=W[8],R=W[9],L=W[10],N=W[11],O=W[12],M=W[13],B=W[14],z=W[15];if(Z[0].setComponents(H-Y,E-U,N-F,z-O).normalize(),Z[1].setComponents(H+Y,E+U,N+F,z+O).normalize(),Z[2].setComponents(H+X,E+G,N+R,z+M).normalize(),Z[3].setComponents(H-X,E-G,N-R,z-M).normalize(),$)Z[4].setComponents(K,q,L,B).normalize(),Z[5].setComponents(H-K,E-q,N-L,z-B).normalize();else if(Z[4].setComponents(H-K,E-q,N-L,z-B).normalize(),Q===2000)Z[5].setComponents(H+K,E+q,N+L,z+B).normalize();else if(Q===2001)Z[5].setComponents(K,q,L,B).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();z9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();z9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(z9)}intersectsSprite(J){z9.center.set(0,0,0);let Q=JU.distanceTo(J.center);return z9.radius=0.7071067811865476+Q,z9.applyMatrix4(J.matrixWorld),this.intersectsSphere(z9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(UQ.x=Z.normal.x>0?J.max.x:J.min.x,UQ.y=Z.normal.y>0?J.max.y:J.min.y,UQ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(UQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w7 extends i8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new B0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var LQ=new T,DQ=new T,UY=new v0,Y7=new I6,GQ=new QJ,v$=new T,GY=new T;class P6 extends G8{constructor(J=new N8,Q=new w7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)LQ.fromBufferAttribute(Q,Z-1),DQ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=LQ.distanceTo(DQ);J.setAttribute("lineDistance",new r0($,1))}else M0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,Y=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(GQ.copy($.boundingSphere),GQ.applyMatrix4(Z),GQ.radius+=W,J.ray.intersectsSphere(GQ)===!1)return;UY.copy(Z).invert(),Y7.copy(J.ray).applyMatrix4(UY);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),K=X*X,H=this.isLineSegments?2:1,U=$.index,q=$.attributes.position;if(U!==null){let E=Math.max(0,Y.start),F=Math.min(U.count,Y.start+Y.count);for(let R=E,L=F-1;R<L;R+=H){let N=U.getX(R),O=U.getX(R+1),M=EQ(this,J,Y7,K,N,O,R);if(M)Q.push(M)}if(this.isLineLoop){let R=U.getX(F-1),L=U.getX(E),N=EQ(this,J,Y7,K,R,L,F-1);if(N)Q.push(N)}}else{let E=Math.max(0,Y.start),F=Math.min(q.count,Y.start+Y.count);for(let R=E,L=F-1;R<L;R+=H){let N=EQ(this,J,Y7,K,R,R+1,R);if(N)Q.push(N)}if(this.isLineLoop){let R=EQ(this,J,Y7,K,F-1,E,F-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function EQ(J,Q,$,Z,W,Y,X){let K=J.geometry.attributes.position;if(LQ.fromBufferAttribute(K,W),DQ.fromBufferAttribute(K,Y),$.distanceSqToSegment(LQ,DQ,v$,GY)>Z)return;v$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(v$);if(U<Q.near||U>Q.far)return;return{distance:U,point:GY.clone().applyMatrix4(J.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:J}}var EY=new T,qY=new T;class gQ extends P6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)EY.fromBufferAttribute(Q,Z),qY.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+EY.distanceTo(qY);J.setAttribute("lineDistance",new r0($,1))}else M0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pQ extends P6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class b9 extends i8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new B0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var NY=new v0,b$=new I6,qQ=new QJ,NQ=new T;class A6 extends G8{constructor(J=new N8,Q=new b9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,Y=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(qQ.copy($.boundingSphere),qQ.applyMatrix4(Z),qQ.radius+=W,J.ray.intersectsSphere(qQ)===!1)return;NY.copy(Z).invert(),b$.copy(J.ray).applyMatrix4(NY);let X=W/((this.scale.x+this.scale.y+this.scale.z)/3),K=X*X,H=$.index,G=$.attributes.position;if(H!==null){let q=Math.max(0,Y.start),E=Math.min(H.count,Y.start+Y.count);for(let F=q,R=E;F<R;F++){let L=H.getX(F);NQ.fromBufferAttribute(G,L),FY(NQ,L,K,Z,J,Q,this)}}else{let q=Math.max(0,Y.start),E=Math.min(G.count,Y.start+Y.count);for(let F=q,R=E;F<R;F++)NQ.fromBufferAttribute(G,F),FY(NQ,F,K,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,Y=Z.length;W<Y;W++){let X=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=W}}}}}function FY(J,Q,$,Z,W,Y,X){let K=b$.distanceSqToPoint(J);if(K<$){let H=new T;b$.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=W.ray.origin.distanceTo(H);if(U<W.near||U>W.far)return;Y.push({distance:U,distanceToRay:Math.sqrt(K),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:X})}}class lQ extends D8{constructor(J=[],Q=301,$,Z,W,Y,X,K,H,U){super(J,Q,$,Z,W,Y,X,K,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class T6 extends D8{constructor(J,Q,$,Z,W,Y,X,K,H){super(J,Q,$,Z,W,Y,X,K,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class q9 extends D8{constructor(J,Q,$=1014,Z,W,Y,X=1003,K=1003,H,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:G};super(q,Z,W,Y,X,K,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new D7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class vZ extends q9{constructor(J,Q=1014,$=301,Z,W,Y=1003,X=1003,K,H=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,Y,X,K,H);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class mQ extends D8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class cJ extends N8{constructor(J=1,Q=1,$=1,Z=1,W=1,Y=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:Y};let X=this;Z=Math.floor(Z),W=Math.floor(W),Y=Math.floor(Y);let K=[],H=[],U=[],G=[],q=0,E=0;F("z","y","x",-1,-1,$,Q,J,Y,W,0),F("z","y","x",1,-1,$,Q,-J,Y,W,1),F("x","z","y",1,1,J,$,Q,Z,Y,2),F("x","z","y",1,-1,J,$,-Q,Z,Y,3),F("x","y","z",1,-1,J,Q,$,Z,W,4),F("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(K),this.setAttribute("position",new r0(H,3)),this.setAttribute("normal",new r0(U,3)),this.setAttribute("uv",new r0(G,2));function F(R,L,N,O,M,B,z,A,I,P,D){let C=B/I,x=z/P,w=B/2,l=z/2,c=A/2,y=I+1,u=P+1,g=0,m=0,a=new T;for(let Q0=0;Q0<u;Q0++){let N0=Q0*x-l;for(let I0=0;I0<y;I0++){let D0=I0*C-w;a[R]=D0*O,a[L]=N0*M,a[N]=c,H.push(a.x,a.y,a.z),a[R]=0,a[L]=0,a[N]=A>0?1:-1,U.push(a.x,a.y,a.z),G.push(I0/I),G.push(1-Q0/P),g+=1}}for(let Q0=0;Q0<P;Q0++)for(let N0=0;N0<I;N0++){let I0=q+N0+y*Q0,D0=q+N0+y*(Q0+1),J8=q+(N0+1)+y*(Q0+1),c0=q+(N0+1)+y*Q0;K.push(I0,D0,c0),K.push(D0,J8,c0),m+=6}X.addGroup(E,m,D),E+=m,q+=g}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new cJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class S6 extends N8{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let W=[],Y=[],X=[],K=[],H=new T,U=new L0;Y.push(0,0,0),X.push(0,0,1),K.push(0.5,0.5);for(let G=0,q=3;G<=Q;G++,q+=3){let E=$+G/Q*Z;H.x=J*Math.cos(E),H.y=J*Math.sin(E),Y.push(H.x,H.y,H.z),X.push(0,0,1),U.x=(Y[q]/J+1)/2,U.y=(Y[q+1]/J+1)/2,K.push(U.x,U.y)}for(let G=1;G<=Q;G++)W.push(G,G+1,0);this.setIndex(W),this.setAttribute("position",new r0(Y,3)),this.setAttribute("normal",new r0(X,3)),this.setAttribute("uv",new r0(K,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S6(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class d8 extends N8{constructor(J=1,Q=1,$=1,Z=32,W=1,Y=!1,X=0,K=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:Y,thetaStart:X,thetaLength:K};let H=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],G=[],q=[],E=[],F=0,R=[],L=$/2,N=0;if(O(),Y===!1){if(J>0)M(!0);if(Q>0)M(!1)}this.setIndex(U),this.setAttribute("position",new r0(G,3)),this.setAttribute("normal",new r0(q,3)),this.setAttribute("uv",new r0(E,2));function O(){let B=new T,z=new T,A=0,I=(Q-J)/$;for(let P=0;P<=W;P++){let D=[],C=P/W,x=C*(Q-J)+J;for(let w=0;w<=Z;w++){let l=w/Z,c=l*K+X,y=Math.sin(c),u=Math.cos(c);z.x=x*y,z.y=-C*$+L,z.z=x*u,G.push(z.x,z.y,z.z),B.set(y,I,u).normalize(),q.push(B.x,B.y,B.z),E.push(l,1-C),D.push(F++)}R.push(D)}for(let P=0;P<Z;P++)for(let D=0;D<W;D++){let C=R[D][P],x=R[D+1][P],w=R[D+1][P+1],l=R[D][P+1];if(J>0||D!==0)U.push(C,x,l),A+=3;if(Q>0||D!==W-1)U.push(x,w,l),A+=3}H.addGroup(N,A,0),N+=A}function M(B){let z=F,A=new L0,I=new T,P=0,D=B===!0?J:Q,C=B===!0?1:-1;for(let w=1;w<=Z;w++)G.push(0,L*C,0),q.push(0,C,0),E.push(0.5,0.5),F++;let x=F;for(let w=0;w<=Z;w++){let c=w/Z*K+X,y=Math.cos(c),u=Math.sin(c);I.x=D*u,I.y=L*C,I.z=D*y,G.push(I.x,I.y,I.z),q.push(0,C,0),A.x=y*0.5+0.5,A.y=u*0.5*C+0.5,E.push(A.x,A.y),F++}for(let w=0;w<Z;w++){let l=z+w,c=x+w;if(B===!0)U.push(c,c+1,l);else U.push(c+1,c,l);P+=3}H.addGroup(N,P,B===!0?1:2),N+=P}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new d8(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class I7 extends d8{constructor(J=1,Q=1,$=32,Z=1,W=!1,Y=0,X=Math.PI*2){super(0,J,Q,$,Z,W,Y,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:W,thetaStart:Y,thetaLength:X}}static fromJSON(J){return new I7(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class h9 extends N8{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,Y=Q/2,X=Math.floor($),K=Math.floor(Z),H=X+1,U=K+1,G=J/X,q=Q/K,E=[],F=[],R=[],L=[];for(let N=0;N<U;N++){let O=N*q-Y;for(let M=0;M<H;M++){let B=M*G-W;F.push(B,-O,0),R.push(0,0,1),L.push(M/X),L.push(1-N/K)}}for(let N=0;N<K;N++)for(let O=0;O<X;O++){let M=O+H*N,B=O+H*(N+1),z=O+1+H*(N+1),A=O+1+H*N;E.push(M,B,A),E.push(B,z,A)}this.setIndex(E),this.setAttribute("position",new r0(F,3)),this.setAttribute("normal",new r0(R,3)),this.setAttribute("uv",new r0(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.width,J.height,J.widthSegments,J.heightSegments)}}class P7 extends N8{constructor(J=0.5,Q=1,$=32,Z=1,W=0,Y=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:Z,thetaStart:W,thetaLength:Y},$=Math.max(3,$),Z=Math.max(1,Z);let X=[],K=[],H=[],U=[],G=J,q=(Q-J)/Z,E=new T,F=new L0;for(let R=0;R<=Z;R++){for(let L=0;L<=$;L++){let N=W+L/$*Y;E.x=G*Math.cos(N),E.y=G*Math.sin(N),K.push(E.x,E.y,E.z),H.push(0,0,1),F.x=(E.x/Q+1)/2,F.y=(E.y/Q+1)/2,U.push(F.x,F.y)}G+=q}for(let R=0;R<Z;R++){let L=R*($+1);for(let N=0;N<$;N++){let O=N+L,M=O,B=O+$+1,z=O+$+2,A=O+1;X.push(M,B,A),X.push(B,z,A)}}this.setIndex(X),this.setAttribute("position",new r0(K,3)),this.setAttribute("normal",new r0(H,3)),this.setAttribute("uv",new r0(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new P7(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class VJ extends N8{constructor(J=1,Q=32,$=16,Z=0,W=Math.PI*2,Y=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:W,thetaStart:Y,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let K=Math.min(Y+X,Math.PI),H=0,U=[],G=new T,q=new T,E=[],F=[],R=[],L=[];for(let N=0;N<=$;N++){let O=[],M=N/$,B=0;if(N===0&&Y===0)B=0.5/Q;else if(N===$&&K===Math.PI)B=-0.5/Q;for(let z=0;z<=Q;z++){let A=z/Q;G.x=-J*Math.cos(Z+A*W)*Math.sin(Y+M*X),G.y=J*Math.cos(Y+M*X),G.z=J*Math.sin(Z+A*W)*Math.sin(Y+M*X),F.push(G.x,G.y,G.z),q.copy(G).normalize(),R.push(q.x,q.y,q.z),L.push(A+B,1-M),O.push(H++)}U.push(O)}for(let N=0;N<$;N++)for(let O=0;O<Q;O++){let M=U[N][O+1],B=U[N][O],z=U[N+1][O],A=U[N+1][O+1];if(N!==0||Y>0)E.push(M,B,A);if(N!==$-1||K<Math.PI)E.push(B,z,A)}this.setIndex(E),this.setAttribute("position",new r0(F,3)),this.setAttribute("normal",new r0(R,3)),this.setAttribute("uv",new r0(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new VJ(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class x9 extends N8{constructor(J=1,Q=0.4,$=12,Z=48,W=Math.PI*2,Y=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:W,thetaStart:Y,thetaLength:X},$=Math.floor($),Z=Math.floor(Z);let K=[],H=[],U=[],G=[],q=new T,E=new T,F=new T;for(let R=0;R<=$;R++){let L=Y+R/$*X;for(let N=0;N<=Z;N++){let O=N/Z*W;E.x=(J+Q*Math.cos(L))*Math.cos(O),E.y=(J+Q*Math.cos(L))*Math.sin(O),E.z=Q*Math.sin(L),H.push(E.x,E.y,E.z),q.x=J*Math.cos(O),q.y=J*Math.sin(O),F.subVectors(E,q).normalize(),U.push(F.x,F.y,F.z),G.push(N/Z),G.push(R/$)}}for(let R=1;R<=$;R++)for(let L=1;L<=Z;L++){let N=(Z+1)*R+L-1,O=(Z+1)*(R-1)+L-1,M=(Z+1)*(R-1)+L,B=(Z+1)*R+L;K.push(N,O,B),K.push(O,M,B)}this.setIndex(K),this.setAttribute("position",new r0(H,3)),this.setAttribute("normal",new r0(U,3)),this.setAttribute("uv",new r0(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}function g9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(OY(W))if(W.isRenderTargetTexture)M0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(OY(W[0])){let Y=[];for(let X=0,K=W.length;X<K;X++)Y[X]=W[X].clone();Q[$][Z]=Y}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function p8(J){let Q={};for(let $=0;$<J.length;$++){let Z=g9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function OY(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function QU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function yZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return x0.workingColorSpace}var nJ={clone:g9,merge:p8},$U=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class C8 extends i8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$U,this.fragmentShader=ZU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=g9(J.uniforms),this.uniformsGroups=QU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let Y=this.uniforms[Z].value;if(Y&&Y.isTexture)Q.uniforms[Z]={type:"t",value:Y.toJSON(J).uuid};else if(Y&&Y.isColor)Q.uniforms[Z]={type:"c",value:Y.getHex()};else if(Y&&Y.isVector2)Q.uniforms[Z]={type:"v2",value:Y.toArray()};else if(Y&&Y.isVector3)Q.uniforms[Z]={type:"v3",value:Y.toArray()};else if(Y&&Y.isVector4)Q.uniforms[Z]={type:"v4",value:Y.toArray()};else if(Y&&Y.isMatrix3)Q.uniforms[Z]={type:"m3",value:Y.toArray()};else if(Y&&Y.isMatrix4)Q.uniforms[Z]={type:"m4",value:Y.toArray()};else Q.uniforms[Z]={value:Y}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class A7 extends C8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q8 extends i8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new B0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pJ,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class $J extends q8{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return n0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new B0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new B0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new B0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class fZ extends i8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class bZ extends i8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function FQ(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function WU(J){function Q(W,Y){return J[W]-J[Y]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function RY(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let Y=0,X=0;X!==Z;++Y){let K=$[Y]*Q;for(let H=0;H!==Q;++H)W[X++]=J[K+H]}return W}function BX(J,Q,$,Z){let W=1,Y=J[0];while(Y!==void 0&&Y[Z]===void 0)Y=J[W++];if(Y===void 0)return;let X=Y[Z];if(X===void 0)return;if(Array.isArray(X))do{if(X=Y[Z],X!==void 0)Q.push(Y.time),$.push(...X);Y=J[W++]}while(Y!==void 0);else if(X.toArray!==void 0)do{if(X=Y[Z],X!==void 0)Q.push(Y.time),X.toArray($,$.length);Y=J[W++]}while(Y!==void 0);else do{if(X=Y[Z],X!==void 0)Q.push(Y.time),$.push(X);Y=J[W++]}while(Y!==void 0)}class sJ{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let Y;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(W=Z,Z=Q[++$],J<Z)break J}Y=Q.length;break Q}if(!(J>=W)){let X=Q[1];if(J<X)$=2,W=X;for(let K=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===K)break;if(Z=W,W=Q[--$-1],J>=W)break J}Y=$,$=0;break Q}break $}while($<Y){let X=$+Y>>>1;if(J<Q[X])Y=X;else $=X+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let Y=0;Y!==Z;++Y)Q[Y]=$[W+Y];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class hZ extends sJ{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,Y=J+1,X=Z[W],K=Z[Y];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,X=2*Q-$;break;case 2402:W=Z.length-2,X=Q+Z[W]-Z[W+1];break;default:W=J,X=$}if(K===void 0)switch(this.getSettings_().endingEnd){case 2401:Y=J,K=2*$-Q;break;case 2402:Y=1,K=$+Z[1]-Z[0];break;default:Y=J-1,K=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(K-$),this._offsetPrev=W*U,this._offsetNext=Y*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,K=J*X,H=K-X,U=this._offsetPrev,G=this._offsetNext,q=this._weightPrev,E=this._weightNext,F=($-Q)/(Z-Q),R=F*F,L=R*F,N=-q*L+2*q*R-q*F,O=(1+q)*L+(-1.5-2*q)*R+(-0.5+q)*F+1,M=(-1-E)*L+(1.5+E)*R+0.5*F,B=E*L-E*R;for(let z=0;z!==X;++z)W[z]=N*Y[U+z]+O*Y[H+z]+M*Y[K+z]+B*Y[G+z];return W}}class xZ extends sJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,K=J*X,H=K-X,U=($-Q)/(Z-Q),G=1-U;for(let q=0;q!==X;++q)W[q]=Y[H+q]*G+Y[K+q]*U;return W}}class gZ extends sJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class pZ extends sJ{interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,K=J*X,H=K-X,U=this.settings||this.DefaultSettings_,G=U.inTangents,q=U.outTangents;if(!G||!q){let R=($-Q)/(Z-Q),L=1-R;for(let N=0;N!==X;++N)W[N]=Y[H+N]*L+Y[K+N]*R;return W}let E=X*2,F=J-1;for(let R=0;R!==X;++R){let L=Y[H+R],N=Y[K+R],O=F*E+R*2,M=q[O],B=q[O+1],z=J*E+R*2,A=G[z],I=G[z+1],P=($-Q)/(Z-Q),D,C,x,w,l;for(let c=0;c<8;c++){D=P*P,C=D*P,x=1-P,w=x*x,l=w*x;let u=l*Q+3*w*P*M+3*x*D*A+C*Z-$;if(Math.abs(u)<0.0000000001)break;let g=3*w*(M-Q)+6*x*P*(A-M)+3*D*(Z-A);if(Math.abs(g)<0.0000000001)break;P=P-u/g,P=Math.max(0,Math.min(1,P))}W[R]=l*L+3*w*P*B+3*x*D*I+C*N}return W}}class ZJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=FQ(Q,this.TimeBufferType),this.values=FQ($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:FQ(J.times,Array),values:FQ(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new gZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new xZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new hZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new pZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.settings=this.settings;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return M0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,Y=Z-1;while(W!==Z&&$[W]<J)++W;while(Y!==-1&&$[Y]>Q)--Y;if(++Y,W!==0||Y!==Z){if(W>=Y)Y=Math.max(Y,1),W=Y-1;let X=this.getValueSize();this.times=$.slice(W,Y),this.values=this.values.slice(W*X,Y*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)T0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)T0("KeyframeTrack: Track is empty.",this),J=!1;let Y=null;for(let X=0;X!==W;X++){let K=$[X];if(typeof K==="number"&&isNaN(K)){T0("KeyframeTrack: Time is not a valid number.",this,X,K),J=!1;break}if(Y!==null&&Y>K){T0("KeyframeTrack: Out of order keys.",this,X,K,Y),J=!1;break}Y=K}if(Z!==void 0){if(kH(Z))for(let X=0,K=Z.length;X!==K;++X){let H=Z[X];if(isNaN(H)){T0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,Y=1;for(let X=1;X<W;++X){let K=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!Z){let G=X*$,q=G-$,E=G+$;for(let F=0;F!==$;++F){let R=Q[G+F];if(R!==Q[q+F]||R!==Q[E+F]){K=!0;break}}}else K=!0;if(K){if(X!==Y){J[Y]=J[X];let G=X*$,q=Y*$;for(let E=0;E!==$;++E)Q[q+E]=Q[G+E]}++Y}}if(W>0){J[Y]=J[W];for(let X=W*$,K=Y*$,H=0;H!==$;++H)Q[K+H]=Q[X+H];++Y}if(Y!==J.length)this.times=J.slice(0,Y),this.values=Q.slice(0,Y*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}ZJ.prototype.ValueTypeName="";ZJ.prototype.TimeBufferType=Float32Array;ZJ.prototype.ValueBufferType=Float32Array;ZJ.prototype.DefaultInterpolation=2301;class N9 extends ZJ{constructor(J,Q,$){super(J,Q,$)}}N9.prototype.ValueTypeName="bool";N9.prototype.ValueBufferType=Array;N9.prototype.DefaultInterpolation=2300;N9.prototype.InterpolantFactoryMethodLinear=void 0;N9.prototype.InterpolantFactoryMethodSmooth=void 0;class uQ extends ZJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}uQ.prototype.ValueTypeName="color";class lJ extends ZJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}lJ.prototype.ValueTypeName="number";class lZ extends sJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,K=($-Q)/(Z-Q),H=J*X;for(let U=H+X;H!==U;H+=4)KJ.slerpFlat(W,0,Y,H-X,Y,H,K);return W}}class iJ extends ZJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new lZ(this.times,this.values,this.getValueSize(),J)}}iJ.prototype.ValueTypeName="quaternion";iJ.prototype.InterpolantFactoryMethodSmooth=void 0;class F9 extends ZJ{constructor(J,Q,$){super(J,Q,$)}}F9.prototype.ValueTypeName="string";F9.prototype.ValueBufferType=Array;F9.prototype.DefaultInterpolation=2300;F9.prototype.InterpolantFactoryMethodLinear=void 0;F9.prototype.InterpolantFactoryMethodSmooth=void 0;class mJ extends ZJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}mJ.prototype.ValueTypeName="vector";class dQ{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=kJ(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let Y=0,X=$.length;Y!==X;++Y)Q.push(XU($[Y]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,Y=$.length;W!==Y;++W)Q.push(ZJ.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,Y=[];for(let X=0;X<W;X++){let K=[],H=[];K.push((X+W-1)%W,X,(X+1)%W),H.push(0,1,0);let U=WU(K);if(K=RY(K,1,U),H=RY(H,1,U),!Z&&K[0]===0)K.push(W),H.push(H[0]);Y.push(new lJ(".morphTargetInfluences["+Q[X].name+"]",K,H).scale(1/$))}return new this(J,-1,Y)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let X=0,K=J.length;X<K;X++){let H=J[X],U=H.name.match(W);if(U&&U.length>1){let G=U[1],q=Z[G];if(!q)Z[G]=q=[];q.push(H)}}let Y=[];for(let X in Z)Y.push(this.CreateFromMorphTargetSequence(X,Z[X],Q,$));return Y}static parseAnimation(J,Q){if(M0("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return T0("AnimationClip: No animation in JSONLoader data."),null;let $=function(G,q,E,F,R){if(E.length!==0){let L=[],N=[];if(BX(E,L,N,F),L.length!==0)R.push(new G(q,L,N))}},Z=[],W=J.name||"default",Y=J.fps||30,X=J.blendMode,K=J.length||-1,H=J.hierarchy||[];for(let G=0;G<H.length;G++){let q=H[G].keys;if(!q||q.length===0)continue;if(q[0].morphTargets){let E={},F;for(F=0;F<q.length;F++)if(q[F].morphTargets)for(let R=0;R<q[F].morphTargets.length;R++)E[q[F].morphTargets[R]]=-1;for(let R in E){let L=[],N=[];for(let O=0;O!==q[F].morphTargets.length;++O){let M=q[F];L.push(M.time),N.push(M.morphTarget===R?1:0)}Z.push(new lJ(".morphTargetInfluence["+R+"]",L,N))}K=E.length*Y}else{let E=".bones["+Q[G].name+"]";$(mJ,E+".position",q,"pos",Z),$(iJ,E+".quaternion",q,"rot",Z),$(mJ,E+".scale",q,"scl",Z)}}if(Z.length===0)return null;return new this(W,K,Z,X)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function YU(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lJ;case"vector":case"vector2":case"vector3":case"vector4":return mJ;case"color":return uQ;case"quaternion":return iJ;case"bool":case"boolean":return N9;case"string":return F9}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function XU(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=YU(J.type);if(J.times===void 0){let $=[],Z=[];BX(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var _J={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(kY(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(kY(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function kY(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class mZ{constructor(J,Q,$){let Z=this,W=!1,Y=0,X=0,K=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,Y,X)}W=!0},this.itemEnd=function(U){if(Y++,Z.onProgress!==void 0)Z.onProgress(U,Y,X);if(Y===X){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(K)return K(U);return U},this.setURLModifier=function(U){return K=U,this},this.addHandler=function(U,G){return H.push(U,G),this},this.removeHandler=function(U){let G=H.indexOf(U);if(G!==-1)H.splice(G,2);return this},this.getHandler=function(U){for(let G=0,q=H.length;G<q;G+=2){let E=H[G],F=H[G+1];if(E.global)E.lastIndex=0;if(E.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var zX=new mZ;class oJ{constructor(J){if(this.manager=J!==void 0?J:zX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}oJ.DEFAULT_MATERIAL_NAME="__DEFAULT";var hJ={};class _X extends Error{constructor(J,Q){super(J);this.response=Q}}class T7 extends oJ{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=_J.get(`file:${J}`);if(W!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0);return}if(hJ[J]!==void 0){hJ[J].push({onLoad:Q,onProgress:$,onError:Z});return}hJ[J]=[],hJ[J].push({onLoad:Q,onProgress:$,onError:Z});let Y=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),X=this.mimeType,K=this.responseType;fetch(Y).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)M0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=hJ[J],G=H.body.getReader(),q=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),E=q?parseInt(q):0,F=E!==0,R=0,L=new ReadableStream({start(N){O();function O(){G.read().then(({done:M,value:B})=>{if(M)N.close();else{R+=B.byteLength;let z=new ProgressEvent("progress",{lengthComputable:F,loaded:R,total:E});for(let A=0,I=U.length;A<I;A++){let P=U[A];if(P.onProgress)P.onProgress(z)}N.enqueue(B),O()}},(M)=>{N.error(M)})}}});return new Response(L)}else throw new _X(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(K){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,X)});case"json":return H.json();default:if(X==="")return H.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(X),q=G&&G[1]?G[1].toLowerCase():void 0,E=new TextDecoder(q);return H.arrayBuffer().then((F)=>E.decode(F))}}}).then((H)=>{_J.add(`file:${J}`,H);let U=hJ[J];delete hJ[J];for(let G=0,q=U.length;G<q;G++){let E=U[G];if(E.onLoad)E.onLoad(H)}}).catch((H)=>{let U=hJ[J];if(U===void 0)throw this.manager.itemError(J),H;delete hJ[J];for(let G=0,q=U.length;G<q;G++){let E=U[G];if(E.onError)E.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var G6=new WeakMap;class uZ extends oJ{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=_J.get(`image:${J}`);if(Y!==void 0){if(Y.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(Y);W.manager.itemEnd(J)},0);else{let G=G6.get(Y);if(G===void 0)G=[],G6.set(Y,G);G.push({onLoad:Q,onError:Z})}return Y}let X=F6("img");function K(){if(U(),Q)Q(this);let G=G6.get(this)||[];for(let q=0;q<G.length;q++){let E=G[q];if(E.onLoad)E.onLoad(this)}G6.delete(this),W.manager.itemEnd(J)}function H(G){if(U(),Z)Z(G);_J.remove(`image:${J}`);let q=G6.get(this)||[];for(let E=0;E<q.length;E++){let F=q[E];if(F.onError)F.onError(G)}G6.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){X.removeEventListener("load",K,!1),X.removeEventListener("error",H,!1)}if(X.addEventListener("load",K,!1),X.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return _J.add(`image:${J}`,X),W.manager.itemStart(J),X.src=J,X}}class j6 extends oJ{constructor(J){super(J)}load(J,Q,$,Z){let W=new D8,Y=new uZ(this.manager);return Y.setCrossOrigin(this.crossOrigin),Y.setPath(this.path),Y.load(J,function(X){if(W.image=X,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class v6 extends G8{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new B0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class cQ extends v6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(G8.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var y$=new v0,LY=new T,DY=new T;class nQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new v0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new C7,this._frameExtents=new L0(1,1),this._viewportCount=1,this._viewports=[new Y8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(LY.setFromMatrixPosition(J.matrixWorld),Q.position.copy(LY),DY.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(DY),Q.updateMatrixWorld(),y$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(y$,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(y$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var OQ=new T,RQ=new KJ,zJ=new T;class sQ extends G8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new v0,this.projectionMatrix=new v0,this.projectionMatrixInverse=new v0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(OQ,RQ,zJ),zJ.x===1&&zJ.y===1&&zJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(OQ,RQ,zJ.set(1,1,1)).invert()}updateWorldMatrix(J,Q){if(super.updateWorldMatrix(J,Q),this.matrixWorld.decompose(OQ,RQ,zJ),zJ.x===1&&zJ.y===1&&zJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(OQ,RQ,zJ.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var K9=new T,VY=new L0,MY=new L0;class w8 extends sQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=_9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(X7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return _9*2*Math.atan(Math.tan(X7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){K9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(K9.x,K9.y).multiplyScalar(-J/K9.z),K9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(K9.x,K9.y).multiplyScalar(-J/K9.z)}getViewSize(J,Q){return this.getViewBounds(J,VY,MY),Q.subVectors(MY,VY)}setViewOffset(J,Q,$,Z,W,Y){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(X7*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,Y=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:K,fullHeight:H}=Y;W+=Y.offsetX*Z/K,Q-=Y.offsetY*$/H,Z*=Y.width/K,$*=Y.height/H}let X=this.filmOffset;if(X!==0)W+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class CX extends nQ{constructor(){super(new w8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=_9*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class iQ extends v6{constructor(J,Q,$=0,Z=Math.PI/3,W=0,Y=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(G8.DEFAULT_UP),this.updateMatrix(),this.target=new G8,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=Y,this.map=null,this.shadow=new CX}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class wX extends nQ{constructor(){super(new w8(90,1,0.5,500));this.isPointLightShadow=!0}}class y6 extends v6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new wX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class aJ extends sQ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,Y=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=Y,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,Y){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=Y,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,Y=$+J,X=Z+Q,K=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=H*this.view.offsetX,Y=W+H*this.view.width,X-=U*this.view.offsetY,K=X-U*this.view.height}this.projectionMatrix.makeOrthographic(W,Y,X,K,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class IX extends nQ{constructor(){super(new aJ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class f6 extends v6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(G8.DEFAULT_UP),this.updateMatrix(),this.target=new G8,this.shadow=new IX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class O9{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var f$=new WeakMap;class oQ extends oJ{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")M0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")M0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,Y=_J.get(`image-bitmap:${J}`);if(Y!==void 0){if(W.manager.itemStart(J),Y.then){Y.then((H)=>{if(f$.has(Y)===!0){if(Z)Z(f$.get(Y));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(H);W.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(Y);W.manager.itemEnd(J)},0);return}let X={};X.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",X.headers=this.requestHeader,X.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let K=fetch(J,X).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(H){if(_J.add(`image-bitmap:${J}`,H),Q)Q(H);W.manager.itemEnd(J)}).catch(function(H){if(Z)Z(H);f$.set(K,H),_J.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});_J.add(`image-bitmap:${J}`,K),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var E6=-90,q6=1;class dZ extends G8{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new w8(E6,q6,J,Q);Z.layers=this.layers,this.add(Z);let W=new w8(E6,q6,J,Q);W.layers=this.layers,this.add(W);let Y=new w8(E6,q6,J,Q);Y.layers=this.layers,this.add(Y);let X=new w8(E6,q6,J,Q);X.layers=this.layers,this.add(X);let K=new w8(E6,q6,J,Q);K.layers=this.layers,this.add(K);let H=new w8(E6,q6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,Y,X,K]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),Y.up.set(0,0,1),Y.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),K.up.set(0,1,0),K.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),Y.up.set(0,0,-1),Y.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),K.up.set(0,-1,0),K.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,Y,X,K,H,U]=this.children,G=J.getRenderTarget(),q=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let L=!1;if(J.isWebGLRenderer===!0)L=J.state.buffers.depth.getReversed();else L=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,2,Z),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,4,Z),L&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),L&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,q,E),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class cZ extends w8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class b6{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=KU.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function KU(){if(this._document.hidden===!1)this.reset()}var nZ="\\[\\]\\.:\\/",HU=new RegExp("["+nZ+"]","g"),sZ="[^"+nZ+"]",UU="[^"+nZ.replace("\\.","")+"]",GU=/((?:WC+[\/:])*)/.source.replace("WC",sZ),EU=/(WCOD+)?/.source.replace("WCOD",UU),qU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sZ),NU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sZ),FU=new RegExp("^"+GU+EU+qU+NU+"$"),OU=["material","materials","bones","map"];class PX{constructor(J,Q,$){let Z=$||e0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class e0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||e0.parseTrackName(Q),this.node=e0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new e0(J,Q,$);else return new e0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(HU,"")}static parseTrackName(J){let Q=FU.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(OU.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let Y=0;Y<W.length;Y++){let X=W[Y];if(X.name===Q||X.uuid===Q)return X;let K=$(X.children);if(K)return K}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=e0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){M0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){T0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){T0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){T0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){T0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){T0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){T0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let Y=J[Z];if(Y===void 0){let H=Q.nodeName;T0("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let K=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){T0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}K=this.BindingType.ArrayElement,this.resolvedProperty=Y,this.propertyIndex=W}else if(Y.fromArray!==void 0&&Y.toArray!==void 0)K=this.BindingType.HasFromToArray,this.resolvedProperty=Y;else if(Array.isArray(Y))K=this.BindingType.EntireArray,this.resolvedProperty=Y;else this.propertyName=Z;this.getValue=this.GetterByBindingType[K],this.setValue=this.SetterByBindingTypeAndVersioning[K][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}e0.Composite=PX;e0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};e0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};e0.prototype.GetterByBindingType=[e0.prototype._getValue_direct,e0.prototype._getValue_array,e0.prototype._getValue_arrayElement,e0.prototype._getValue_toArray];e0.prototype.SetterByBindingTypeAndVersioning=[[e0.prototype._setValue_direct,e0.prototype._setValue_direct_setNeedsUpdate,e0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_array,e0.prototype._setValue_array_setNeedsUpdate,e0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_arrayElement,e0.prototype._setValue_arrayElement_setNeedsUpdate,e0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_fromArray,e0.prototype._setValue_fromArray_setNeedsUpdate,e0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fq=new Float32Array(1);class iZ{static{iZ.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}function oZ(J,Q,$,Z){let W=RU(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function RU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));if(typeof window<"u")if(window.__THREE__)M0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="184";function rX(){let J=null,Q=!1,$=null,Z=null;function W(Y,X){$(Y,X),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(Y){$=Y},setContext:function(Y){J=Y}}}function kU(J){let Q=new WeakMap;function $(K,H){let{array:U,usage:G}=K,q=U.byteLength,E=J.createBuffer();J.bindBuffer(H,E),J.bufferData(H,U,G),K.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(K.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:K.version,size:q}}function Z(K,H,U){let{array:G,updateRanges:q}=H;if(J.bindBuffer(U,K),q.length===0)J.bufferSubData(U,0,G);else{q.sort((F,R)=>F.start-R.start);let E=0;for(let F=1;F<q.length;F++){let R=q[E],L=q[F];if(L.start<=R.start+R.count+1)R.count=Math.max(R.count,L.start+L.count-R.start);else++E,q[E]=L}q.length=E+1;for(let F=0,R=q.length;F<R;F++){let L=q[F];J.bufferSubData(U,L.start*G.BYTES_PER_ELEMENT,G,L.start,L.count)}H.clearUpdateRanges()}H.onUploadCallback()}function W(K){if(K.isInterleavedBufferAttribute)K=K.data;return Q.get(K)}function Y(K){if(K.isInterleavedBufferAttribute)K=K.data;let H=Q.get(K);if(H)J.deleteBuffer(H.buffer),Q.delete(K)}function X(K,H){if(K.isInterleavedBufferAttribute)K=K.data;if(K.isGLBufferAttribute){let G=Q.get(K);if(!G||G.version<K.version)Q.set(K,{buffer:K.buffer,type:K.type,bytesPerElement:K.elementSize,version:K.version});return}let U=Q.get(K);if(U===void 0)Q.set(K,$(K,H));else if(U.version<K.version){if(U.size!==K.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,K,H),U.version=K.version}}return{get:W,remove:Y,update:X}}var LU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DU=`#ifdef USE_ALPHAHASH
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
#endif`,VU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_U=`#ifdef USE_AOMAP
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
#endif`,CU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wU=`#ifdef USE_BATCHING
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
#endif`,IU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SU=`#ifdef USE_IRIDESCENCE
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
#endif`,jU=`#ifdef USE_BUMPMAP
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
#endif`,vU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lU=`#define PI 3.141592653589793
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
} // validated`,mU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uU=`vec3 transformedNormal = objectNormal;
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
#endif`,dU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iU="gl_FragColor = linearToOutputTexel( gl_FragColor );",oU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aU=`#ifdef USE_ENVMAP
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
#endif`,rU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tU=`#ifdef USE_ENVMAP
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
#endif`,eU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J5=`#ifdef USE_ENVMAP
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
#endif`,Q5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y5=`#ifdef USE_GRADIENTMAP
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
}`,X5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U5=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,G5=`#ifdef USE_ENVMAP
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
#endif`,E5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O5=`PhysicalMaterial material;
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
#endif`,R5=`uniform sampler2D dfgLUT;
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
}`,k5=`
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
#endif`,L5=`#if defined( RE_IndirectDiffuse )
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
#endif`,D5=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V5=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,M5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P5=`#if defined( USE_POINTS_UV )
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
#endif`,A5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j5=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y5=`#ifdef USE_MORPHTARGETS
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
#endif`,f5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l5=`#ifdef USE_NORMALMAP
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
#endif`,m5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$G=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZG=`float getShadowMask() {
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
}`,WG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YG=`#ifdef USE_SKINNING
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
#endif`,XG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KG=`#ifdef USE_SKINNING
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
#endif`,HG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EG=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qG=`#ifdef USE_TRANSMISSION
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
#endif`,NG=`#ifdef USE_TRANSMISSION
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
#endif`,FG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DG=`uniform sampler2D t2D;
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
}`,VG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_G=`#include <common>
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
}`,CG=`#if DEPTH_PACKING == 3200
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
}`,wG=`#define DISTANCE
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
}`,IG=`#define DISTANCE
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
}`,PG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TG=`uniform float scale;
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
}`,SG=`uniform vec3 diffuse;
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
}`,jG=`#include <common>
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
}`,vG=`uniform vec3 diffuse;
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
}`,yG=`#define LAMBERT
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
}`,fG=`#define LAMBERT
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
}`,bG=`#define MATCAP
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
}`,hG=`#define MATCAP
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
}`,xG=`#define NORMAL
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
}`,gG=`#define NORMAL
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
}`,pG=`#define PHONG
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
}`,lG=`#define PHONG
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
}`,mG=`#define STANDARD
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
}`,uG=`#define STANDARD
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
}`,dG=`#define TOON
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
}`,cG=`#define TOON
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
}`,nG=`uniform float size;
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
}`,sG=`uniform vec3 diffuse;
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
}`,iG=`#include <common>
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
}`,oG=`uniform vec3 color;
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
}`,aG=`uniform float rotation;
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
}`,rG=`uniform vec3 diffuse;
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
}`,p0={alphahash_fragment:LU,alphahash_pars_fragment:DU,alphamap_fragment:VU,alphamap_pars_fragment:MU,alphatest_fragment:BU,alphatest_pars_fragment:zU,aomap_fragment:_U,aomap_pars_fragment:CU,batching_pars_vertex:wU,batching_vertex:IU,begin_vertex:PU,beginnormal_vertex:AU,bsdfs:TU,iridescence_fragment:SU,bumpmap_pars_fragment:jU,clipping_planes_fragment:vU,clipping_planes_pars_fragment:yU,clipping_planes_pars_vertex:fU,clipping_planes_vertex:bU,color_fragment:hU,color_pars_fragment:xU,color_pars_vertex:gU,color_vertex:pU,common:lU,cube_uv_reflection_fragment:mU,defaultnormal_vertex:uU,displacementmap_pars_vertex:dU,displacementmap_vertex:cU,emissivemap_fragment:nU,emissivemap_pars_fragment:sU,colorspace_fragment:iU,colorspace_pars_fragment:oU,envmap_fragment:aU,envmap_common_pars_fragment:rU,envmap_pars_fragment:tU,envmap_pars_vertex:eU,envmap_physical_pars_fragment:G5,envmap_vertex:J5,fog_vertex:Q5,fog_pars_vertex:$5,fog_fragment:Z5,fog_pars_fragment:W5,gradientmap_pars_fragment:Y5,lightmap_pars_fragment:X5,lights_lambert_fragment:K5,lights_lambert_pars_fragment:H5,lights_pars_begin:U5,lights_toon_fragment:E5,lights_toon_pars_fragment:q5,lights_phong_fragment:N5,lights_phong_pars_fragment:F5,lights_physical_fragment:O5,lights_physical_pars_fragment:R5,lights_fragment_begin:k5,lights_fragment_maps:L5,lights_fragment_end:D5,lightprobes_pars_fragment:V5,logdepthbuf_fragment:M5,logdepthbuf_pars_fragment:B5,logdepthbuf_pars_vertex:z5,logdepthbuf_vertex:_5,map_fragment:C5,map_pars_fragment:w5,map_particle_fragment:I5,map_particle_pars_fragment:P5,metalnessmap_fragment:A5,metalnessmap_pars_fragment:T5,morphinstance_vertex:S5,morphcolor_vertex:j5,morphnormal_vertex:v5,morphtarget_pars_vertex:y5,morphtarget_vertex:f5,normal_fragment_begin:b5,normal_fragment_maps:h5,normal_pars_fragment:x5,normal_pars_vertex:g5,normal_vertex:p5,normalmap_pars_fragment:l5,clearcoat_normal_fragment_begin:m5,clearcoat_normal_fragment_maps:u5,clearcoat_pars_fragment:d5,iridescence_pars_fragment:c5,opaque_fragment:n5,packing:s5,premultiplied_alpha_fragment:i5,project_vertex:o5,dithering_fragment:a5,dithering_pars_fragment:r5,roughnessmap_fragment:t5,roughnessmap_pars_fragment:e5,shadowmap_pars_fragment:JG,shadowmap_pars_vertex:QG,shadowmap_vertex:$G,shadowmask_pars_fragment:ZG,skinbase_vertex:WG,skinning_pars_vertex:YG,skinning_vertex:XG,skinnormal_vertex:KG,specularmap_fragment:HG,specularmap_pars_fragment:UG,tonemapping_fragment:GG,tonemapping_pars_fragment:EG,transmission_fragment:qG,transmission_pars_fragment:NG,uv_pars_fragment:FG,uv_pars_vertex:OG,uv_vertex:RG,worldpos_vertex:kG,background_vert:LG,background_frag:DG,backgroundCube_vert:VG,backgroundCube_frag:MG,cube_vert:BG,cube_frag:zG,depth_vert:_G,depth_frag:CG,distance_vert:wG,distance_frag:IG,equirect_vert:PG,equirect_frag:AG,linedashed_vert:TG,linedashed_frag:SG,meshbasic_vert:jG,meshbasic_frag:vG,meshlambert_vert:yG,meshlambert_frag:fG,meshmatcap_vert:bG,meshmatcap_frag:hG,meshnormal_vert:xG,meshnormal_frag:gG,meshphong_vert:pG,meshphong_frag:lG,meshphysical_vert:mG,meshphysical_frag:uG,meshtoon_vert:dG,meshtoon_frag:cG,points_vert:nG,points_frag:sG,shadow_vert:iG,shadow_frag:oG,sprite_vert:aG,sprite_frag:rG},K0={common:{diffuse:{value:new B0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j0}},envmap:{envMap:{value:null},envMapRotation:{value:new j0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j0},normalScale:{value:new L0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new B0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new B0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0},uvTransform:{value:new j0}},sprite:{diffuse:{value:new B0(16777215)},opacity:{value:1},center:{value:new L0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}}},PJ={basic:{uniforms:p8([K0.common,K0.specularmap,K0.envmap,K0.aomap,K0.lightmap,K0.fog]),vertexShader:p0.meshbasic_vert,fragmentShader:p0.meshbasic_frag},lambert:{uniforms:p8([K0.common,K0.specularmap,K0.envmap,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.fog,K0.lights,{emissive:{value:new B0(0)},envMapIntensity:{value:1}}]),vertexShader:p0.meshlambert_vert,fragmentShader:p0.meshlambert_frag},phong:{uniforms:p8([K0.common,K0.specularmap,K0.envmap,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.fog,K0.lights,{emissive:{value:new B0(0)},specular:{value:new B0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:p0.meshphong_vert,fragmentShader:p0.meshphong_frag},standard:{uniforms:p8([K0.common,K0.envmap,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.roughnessmap,K0.metalnessmap,K0.fog,K0.lights,{emissive:{value:new B0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag},toon:{uniforms:p8([K0.common,K0.aomap,K0.lightmap,K0.emissivemap,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.gradientmap,K0.fog,K0.lights,{emissive:{value:new B0(0)}}]),vertexShader:p0.meshtoon_vert,fragmentShader:p0.meshtoon_frag},matcap:{uniforms:p8([K0.common,K0.bumpmap,K0.normalmap,K0.displacementmap,K0.fog,{matcap:{value:null}}]),vertexShader:p0.meshmatcap_vert,fragmentShader:p0.meshmatcap_frag},points:{uniforms:p8([K0.points,K0.fog]),vertexShader:p0.points_vert,fragmentShader:p0.points_frag},dashed:{uniforms:p8([K0.common,K0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:p0.linedashed_vert,fragmentShader:p0.linedashed_frag},depth:{uniforms:p8([K0.common,K0.displacementmap]),vertexShader:p0.depth_vert,fragmentShader:p0.depth_frag},normal:{uniforms:p8([K0.common,K0.bumpmap,K0.normalmap,K0.displacementmap,{opacity:{value:1}}]),vertexShader:p0.meshnormal_vert,fragmentShader:p0.meshnormal_frag},sprite:{uniforms:p8([K0.sprite,K0.fog]),vertexShader:p0.sprite_vert,fragmentShader:p0.sprite_frag},background:{uniforms:{uvTransform:{value:new j0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:p0.background_vert,fragmentShader:p0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j0}},vertexShader:p0.backgroundCube_vert,fragmentShader:p0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:p0.cube_vert,fragmentShader:p0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:p0.equirect_vert,fragmentShader:p0.equirect_frag},distance:{uniforms:p8([K0.common,K0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:p0.distance_vert,fragmentShader:p0.distance_frag},shadow:{uniforms:p8([K0.lights,K0.fog,{color:{value:new B0(0)},opacity:{value:1}}]),vertexShader:p0.shadow_vert,fragmentShader:p0.shadow_frag}};PJ.physical={uniforms:p8([PJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j0},clearcoatNormalScale:{value:new L0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j0},sheen:{value:0},sheenColor:{value:new B0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j0},transmissionSamplerSize:{value:new L0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j0},attenuationDistance:{value:0},attenuationColor:{value:new B0(0)},specularColor:{value:new B0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j0},anisotropyVector:{value:new L0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j0}}]),vertexShader:p0.meshphysical_vert,fragmentShader:p0.meshphysical_frag};var aQ={r:0,b:0,g:0},tG=new v0,tX=new j0;tX.set(-1,0,0,0,1,0,0,0,1);function eG(J,Q,$,Z,W,Y){let X=new B0(0),K=W===!0?0:1,H,U,G=null,q=0,E=null;function F(M){let B=M.isScene===!0?M.background:null;if(B&&B.isTexture){let z=M.backgroundBlurriness>0;B=Q.get(B,z)}return B}function R(M){let B=!1,z=F(M);if(z===null)N(X,K);else if(z&&z.isColor)N(z,1),B=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,Y);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||B)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function L(M,B){let z=F(B);if(z&&(z.isCubeTexture||z.mapping===R7)){if(U===void 0)U=new y0(new cJ(1,1,1),new C8({name:"BackgroundCubeMaterial",uniforms:g9(PJ.backgroundCube.uniforms),vertexShader:PJ.backgroundCube.vertexShader,fragmentShader:PJ.backgroundCube.fragmentShader,side:g8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(A,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=z,U.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(tG.makeRotationFromEuler(B.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(tX);if(U.material.toneMapped=x0.getTransfer(z.colorSpace)!==$8,G!==z||q!==z.version||E!==J.toneMapping)U.material.needsUpdate=!0,G=z,q=z.version,E=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}else if(z&&z.isTexture){if(H===void 0)H=new y0(new h9(2,2),new C8({name:"BackgroundMaterial",uniforms:g9(PJ.background.uniforms),vertexShader:PJ.background.vertexShader,fragmentShader:PJ.background.fragmentShader,side:U9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=z,H.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,H.material.toneMapped=x0.getTransfer(z.colorSpace)!==$8,z.matrixAutoUpdate===!0)z.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(z.matrix),G!==z||q!==z.version||E!==J.toneMapping)H.material.needsUpdate=!0,G=z,q=z.version,E=J.toneMapping;H.layers.enableAll(),M.unshift(H,H.geometry,H.material,0,0,null)}}function N(M,B){M.getRGB(aQ,yZ(J)),$.buffers.color.setClear(aQ.r,aQ.g,aQ.b,B,Y)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(M,B=1){X.set(M),K=B,N(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(M){K=M,N(X,K)},render:R,addToRenderList:L,dispose:O}}function J1(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=E(null),Y=W,X=!1;function K(w,l,c,y,u){let g=!1,m=q(w,y,c,l);if(Y!==m)Y=m,U(Y.object);if(g=F(w,y,c,u),g)R(w,y,c,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(g||X){if(X=!1,z(w,l,c,y),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function H(){return J.createVertexArray()}function U(w){return J.bindVertexArray(w)}function G(w){return J.deleteVertexArray(w)}function q(w,l,c,y){let u=y.wireframe===!0,g=Z[l.id];if(g===void 0)g={},Z[l.id]=g;let m=w.isInstancedMesh===!0?w.id:0,a=g[m];if(a===void 0)a={},g[m]=a;let Q0=a[c.id];if(Q0===void 0)Q0={},a[c.id]=Q0;let N0=Q0[u];if(N0===void 0)N0=E(H()),Q0[u]=N0;return N0}function E(w){let l=[],c=[],y=[];for(let u=0;u<$;u++)l[u]=0,c[u]=0,y[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:c,attributeDivisors:y,object:w,attributes:{},index:null}}function F(w,l,c,y){let u=Y.attributes,g=l.attributes,m=0,a=c.getAttributes();for(let Q0 in a)if(a[Q0].location>=0){let I0=u[Q0],D0=g[Q0];if(D0===void 0){if(Q0==="instanceMatrix"&&w.instanceMatrix)D0=w.instanceMatrix;if(Q0==="instanceColor"&&w.instanceColor)D0=w.instanceColor}if(I0===void 0)return!0;if(I0.attribute!==D0)return!0;if(D0&&I0.data!==D0.data)return!0;m++}if(Y.attributesNum!==m)return!0;if(Y.index!==y)return!0;return!1}function R(w,l,c,y){let u={},g=l.attributes,m=0,a=c.getAttributes();for(let Q0 in a)if(a[Q0].location>=0){let I0=g[Q0];if(I0===void 0){if(Q0==="instanceMatrix"&&w.instanceMatrix)I0=w.instanceMatrix;if(Q0==="instanceColor"&&w.instanceColor)I0=w.instanceColor}let D0={};if(D0.attribute=I0,I0&&I0.data)D0.data=I0.data;u[Q0]=D0,m++}Y.attributes=u,Y.attributesNum=m,Y.index=y}function L(){let w=Y.newAttributes;for(let l=0,c=w.length;l<c;l++)w[l]=0}function N(w){O(w,0)}function O(w,l){let{newAttributes:c,enabledAttributes:y,attributeDivisors:u}=Y;if(c[w]=1,y[w]===0)J.enableVertexAttribArray(w),y[w]=1;if(u[w]!==l)J.vertexAttribDivisor(w,l),u[w]=l}function M(){let{newAttributes:w,enabledAttributes:l}=Y;for(let c=0,y=l.length;c<y;c++)if(l[c]!==w[c])J.disableVertexAttribArray(c),l[c]=0}function B(w,l,c,y,u,g,m){if(m===!0)J.vertexAttribIPointer(w,l,c,u,g);else J.vertexAttribPointer(w,l,c,y,u,g)}function z(w,l,c,y){L();let u=y.attributes,g=c.getAttributes(),m=l.defaultAttributeValues;for(let a in g){let Q0=g[a];if(Q0.location>=0){let N0=u[a];if(N0===void 0){if(a==="instanceMatrix"&&w.instanceMatrix)N0=w.instanceMatrix;if(a==="instanceColor"&&w.instanceColor)N0=w.instanceColor}if(N0!==void 0){let{normalized:I0,itemSize:D0}=N0,J8=Q.get(N0);if(J8===void 0)continue;let{buffer:c0,type:s,bytesPerElement:E0}=J8,z0=s===J.INT||s===J.UNSIGNED_INT||N0.gpuType===l$;if(N0.isInterleavedBufferAttribute){let q0=N0.data,P0=q0.stride,t0=N0.offset;if(q0.isInstancedInterleavedBuffer){for(let l0=0;l0<Q0.locationSize;l0++)O(Q0.location+l0,q0.meshPerAttribute);if(w.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=q0.meshPerAttribute*q0.count}else for(let l0=0;l0<Q0.locationSize;l0++)N(Q0.location+l0);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let l0=0;l0<Q0.locationSize;l0++)B(Q0.location+l0,D0/Q0.locationSize,s,I0,P0*E0,(t0+D0/Q0.locationSize*l0)*E0,z0)}else{if(N0.isInstancedBufferAttribute){for(let q0=0;q0<Q0.locationSize;q0++)O(Q0.location+q0,N0.meshPerAttribute);if(w.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let q0=0;q0<Q0.locationSize;q0++)N(Q0.location+q0);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let q0=0;q0<Q0.locationSize;q0++)B(Q0.location+q0,D0/Q0.locationSize,s,I0,D0*E0,D0/Q0.locationSize*q0*E0,z0)}}else if(m!==void 0){let I0=m[a];if(I0!==void 0)switch(I0.length){case 2:J.vertexAttrib2fv(Q0.location,I0);break;case 3:J.vertexAttrib3fv(Q0.location,I0);break;case 4:J.vertexAttrib4fv(Q0.location,I0);break;default:J.vertexAttrib1fv(Q0.location,I0)}}}}M()}function A(){C();for(let w in Z){let l=Z[w];for(let c in l){let y=l[c];for(let u in y){let g=y[u];for(let m in g)G(g[m].object),delete g[m];delete y[u]}}delete Z[w]}}function I(w){if(Z[w.id]===void 0)return;let l=Z[w.id];for(let c in l){let y=l[c];for(let u in y){let g=y[u];for(let m in g)G(g[m].object),delete g[m];delete y[u]}}delete Z[w.id]}function P(w){for(let l in Z){let c=Z[l];for(let y in c){let u=c[y];if(u[w.id]===void 0)continue;let g=u[w.id];for(let m in g)G(g[m].object),delete g[m];delete u[w.id]}}}function D(w){for(let l in Z){let c=Z[l],y=w.isInstancedMesh===!0?w.id:0,u=c[y];if(u===void 0)continue;for(let g in u){let m=u[g];for(let a in m)G(m[a].object),delete m[a];delete u[g]}if(delete c[y],Object.keys(c).length===0)delete Z[l]}}function C(){if(x(),X=!0,Y===W)return;Y=W,U(Y.object)}function x(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:K,reset:C,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfObject:D,releaseStatesOfProgram:P,initAttributes:L,enableAttribute:N,disableUnusedAttributes:M}}function Q1(J,Q,$){let Z;function W(H){Z=H}function Y(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function X(H,U,G){if(G===0)return;J.drawArraysInstanced(Z,H,U,G),$.update(U,Z,G)}function K(H,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,G);let E=0;for(let F=0;F<G;F++)E+=U[F];$.update(E,Z,1)}this.setMode=W,this.render=Y,this.renderInstances=X,this.renderMultiDraw=K}function $1(J,Q,$,Z){let W;function Y(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let P=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function X(P){if(P!==wJ&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function K(P){let D=P===u8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(P!==DJ&&Z.convert(P)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==uJ&&!D)return!1;return!0}function H(P){if(P==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=H(U);if(G!==U)M0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let q=$.logarithmicDepthBuffer===!0,E=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&E===!1)M0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),M=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),B=J.getParameter(J.MAX_VARYING_VECTORS),z=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Y,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:K,precision:U,logarithmicDepthBuffer:q,reversedDepthBuffer:E,maxTextures:F,maxVertexTextures:R,maxTextureSize:L,maxCubemapSize:N,maxAttributes:O,maxVertexUniforms:M,maxVaryings:B,maxFragmentUniforms:z,maxSamples:A,samples:I}}function Z1(J){let Q=this,$=null,Z=0,W=!1,Y=!1,X=new xJ,K=new j0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(q,E){let F=q.length!==0||E||Z!==0||W;return W=E,Z=q.length,F},this.beginShadows=function(){Y=!0,G(null)},this.endShadows=function(){Y=!1},this.setGlobalState=function(q,E){$=G(q,E,0)},this.setState=function(q,E,F){let{clippingPlanes:R,clipIntersection:L,clipShadows:N}=q,O=J.get(q);if(!W||R===null||R.length===0||Y&&!N)if(Y)G(null);else U();else{let M=Y?0:Z,B=M*4,z=O.clippingState||null;H.value=z,z=G(R,E,B,F);for(let A=0;A!==B;++A)z[A]=$[A];O.clippingState=z,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=M}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(q,E,F,R){let L=q!==null?q.length:0,N=null;if(L!==0){if(N=H.value,R!==!0||N===null){let O=F+L*4,M=E.matrixWorldInverse;if(K.getNormalMatrix(M),N===null||N.length<O)N=new Float32Array(O);for(let B=0,z=F;B!==L;++B,z+=4)X.copy(q[B]).applyMatrix4(M,K),X.normal.toArray(N,z),N[z+3]=X.constant}H.value=N,H.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,N}}var R9=4,AX=[0.125,0.215,0.35,0.446,0.526,0.582],p9=20,W1=256,S7=new aJ,TX=new B0,aZ=null,rZ=0,tZ=0,eZ=!1,Y1=new T;class $W{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:Y=256,position:X=Y1}=W;aZ=this._renderer.getRenderTarget(),rZ=this._renderer.getActiveCubeFace(),tZ=this._renderer.getActiveMipmapLevel(),eZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Y);let K=this._allocateTargets();if(K.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,K,X),Q>0)this._blur(K,0,0,Q);return this._applyPMREM(K),this._cleanup(K),K}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=vX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=jX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(aZ,rZ,tZ),this._renderer.xr.enabled=eZ,J.scissorTest=!1,h6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===L6||J.mapping===A9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);aZ=this._renderer.getRenderTarget(),rZ=this._renderer.getActiveCubeFace(),tZ=this._renderer.getActiveMipmapLevel(),eZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:T8,minFilter:T8,generateMipmaps:!1,type:u8,format:wJ,colorSpace:JJ,depthBuffer:!1},Z=SX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=SX(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X1(W)),this._blurMaterial=H1(W,J,Q),this._ggxMaterial=K1(W,J,Q)}return Z}_compileMaterial(J){let Q=new y0(new N8,J);this._renderer.compile(Q,S7)}_sceneToCubeUV(J,Q,$,Z,W){let K=new w8(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,q=G.autoClear,E=G.toneMapping;if(G.getClearColor(TX),G.toneMapping=LJ,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new y0(new cJ,new y8({name:"PMREM.Background",side:g8,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,L=R.material,N=!1,O=J.background;if(O){if(O.isColor)L.color.copy(O),J.background=null,N=!0}else L.color.copy(TX),N=!0;for(let M=0;M<6;M++){let B=M%3;if(B===0)K.up.set(0,H[M],0),K.position.set(W.x,W.y,W.z),K.lookAt(W.x+U[M],W.y,W.z);else if(B===1)K.up.set(0,0,H[M]),K.position.set(W.x,W.y,W.z),K.lookAt(W.x,W.y+U[M],W.z);else K.up.set(0,H[M],0),K.position.set(W.x,W.y,W.z),K.lookAt(W.x,W.y,W.z+U[M]);let z=this._cubeSize;if(h6(Z,B*z,M>2?z:0,z,z),G.setRenderTarget(Z),N)G.render(R,K);G.render(J,K)}G.toneMapping=E,G.autoClear=q,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===L6||J.mapping===A9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=vX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=jX();let W=Z?this._cubemapMaterial:this._equirectMaterial,Y=this._lodMeshes[0];Y.material=W;let X=W.uniforms;X.envMap.value=J;let K=this._cubeSize;h6(Q,0,0,3*K,2*K),$.setRenderTarget(Q),$.render(Y,S7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,Y=this._ggxMaterial,X=this._lodMeshes[$];X.material=Y;let K=Y.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(H*H-U*U),q=0+H*1.25,E=G*q,{_lodMax:F}=this,R=this._sizeLods[$],L=3*R*($>F-R9?$-F+R9:0),N=4*(this._cubeSize-R);K.envMap.value=J.texture,K.roughness.value=E,K.mipInt.value=F-Q,h6(W,L,N,3*R,2*R),Z.setRenderTarget(W),Z.render(X,S7),K.envMap.value=W.texture,K.roughness.value=0,K.mipInt.value=F-$,h6(J,L,N,3*R,2*R),Z.setRenderTarget(J),Z.render(X,S7)}_blur(J,Q,$,Z,W){let Y=this._pingPongRenderTarget;this._halfBlur(J,Y,Q,$,Z,"latitudinal",W),this._halfBlur(Y,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,Y,X){let K=this._renderer,H=this._blurMaterial;if(Y!=="latitudinal"&&Y!=="longitudinal")T0("blur direction must be either latitudinal or longitudinal!");let U=3,G=this._lodMeshes[Z];G.material=H;let q=H.uniforms,E=this._sizeLods[$]-1,F=isFinite(W)?Math.PI/(2*E):2*Math.PI/(2*p9-1),R=W/F,L=isFinite(W)?1+Math.floor(U*R):p9;if(L>p9)M0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${p9}`);let N=[],O=0;for(let I=0;I<p9;++I){let P=I/R,D=Math.exp(-P*P/2);if(N.push(D),I===0)O+=D;else if(I<L)O+=2*D}for(let I=0;I<N.length;I++)N[I]=N[I]/O;if(q.envMap.value=J.texture,q.samples.value=L,q.weights.value=N,q.latitudinal.value=Y==="latitudinal",X)q.poleAxis.value=X;let{_lodMax:M}=this;q.dTheta.value=F,q.mipInt.value=M-$;let B=this._sizeLods[Z],z=3*B*(Z>M-R9?Z-M+R9:0),A=4*(this._cubeSize-B);h6(Q,z,A,3*B,2*B),K.setRenderTarget(Q),K.render(G,S7)}}function X1(J){let Q=[],$=[],Z=[],W=J,Y=J-R9+1+AX.length;for(let X=0;X<Y;X++){let K=Math.pow(2,W);Q.push(K);let H=1/K;if(X>J-R9)H=AX[X-J+R9-1];else if(X===0)H=0;$.push(H);let U=1/(K-2),G=-U,q=1+U,E=[G,G,q,G,q,q,G,G,q,q,G,q],F=6,R=6,L=3,N=2,O=1,M=new Float32Array(L*R*F),B=new Float32Array(N*R*F),z=new Float32Array(O*R*F);for(let I=0;I<F;I++){let P=I%3*2/3-1,D=I>2?0:-1,C=[P,D,0,P+0.6666666666666666,D,0,P+0.6666666666666666,D+1,0,P,D,0,P+0.6666666666666666,D+1,0,P,D+1,0];M.set(C,L*R*I),B.set(E,N*R*I);let x=[I,I,I,I,I,I];z.set(x,O*R*I)}let A=new N8;if(A.setAttribute("position",new V8(M,L)),A.setAttribute("uv",new V8(B,N)),A.setAttribute("faceIndex",new V8(z,O)),Z.push(new y0(A,null)),W>R9)W--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function SX(J,Q,$){let Z=new S8(J,Q,$);return Z.texture.mapping=R7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function h6(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function K1(J,Q,$){return new C8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tQ(),fragmentShader:`

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
		`,blending:XJ,depthTest:!1,depthWrite:!1})}function H1(J,Q,$){let Z=new Float32Array(p9),W=new T(0,1,0);return new C8({name:"SphericalGaussianBlur",defines:{n:p9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:tQ(),fragmentShader:`

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
		`,blending:XJ,depthTest:!1,depthWrite:!1})}function jX(){return new C8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tQ(),fragmentShader:`

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
		`,blending:XJ,depthTest:!1,depthWrite:!1})}function vX(){return new C8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:XJ,depthTest:!1,depthWrite:!1})}function tQ(){return`

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
	`}class YW extends S8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new lQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new cJ(5,5,5),W=new C8({name:"CubemapFromEquirect",uniforms:g9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:g8,blending:XJ});W.uniforms.tEquirect.value=Q;let Y=new y0(Z,W),X=Q.minFilter;if(Q.minFilter===CJ)Q.minFilter=T8;return new dZ(1,10,this).update(J,Y),Q.minFilter=X,Y.geometry.dispose(),Y.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let Y=0;Y<6;Y++)J.setRenderTarget(this,Y),J.clear(Q,$,Z);J.setRenderTarget(W)}}function U1(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(E,F=!1){if(E===null||E===void 0)return null;if(F)return X(E);return Y(E)}function Y(E){if(E&&E.isTexture){let F=E.mapping;if(F===D6||F===VQ)if(Q.has(E)){let R=Q.get(E).texture;return K(R,E.mapping)}else{let R=E.image;if(R&&R.height>0){let L=new YW(R.height);return L.fromEquirectangularTexture(J,E),Q.set(E,L),E.addEventListener("dispose",U),K(L.texture,E.mapping)}else return null}}return E}function X(E){if(E&&E.isTexture){let F=E.mapping,R=F===D6||F===VQ,L=F===L6||F===A9;if(R||L){let N=$.get(E),O=N!==void 0?N.texture.pmremVersion:0;if(E.isRenderTargetTexture&&E.pmremVersion!==O){if(Z===null)Z=new $W(J);return N=R?Z.fromEquirectangular(E,N):Z.fromCubemap(E,N),N.texture.pmremVersion=E.pmremVersion,$.set(E,N),N.texture}else if(N!==void 0)return N.texture;else{let M=E.image;if(R&&M&&M.height>0||L&&M&&H(M)){if(Z===null)Z=new $W(J);return N=R?Z.fromEquirectangular(E):Z.fromCubemap(E),N.texture.pmremVersion=E.pmremVersion,$.set(E,N),E.addEventListener("dispose",G),N.texture}else return null}}}return E}function K(E,F){if(F===D6)E.mapping=L6;else if(F===VQ)E.mapping=A9;return E}function H(E){let F=0,R=6;for(let L=0;L<R;L++)if(E[L]!==void 0)F++;return F===R}function U(E){let F=E.target;F.removeEventListener("dispose",U);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function G(E){let F=E.target;F.removeEventListener("dispose",G);let R=$.get(F);if(R!==void 0)$.delete(F),R.dispose()}function q(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:q}}function G1(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)kQ("WebGLRenderer: "+Z+" extension not supported.");return W}}}function E1(J,Q,$,Z){let W={},Y=new WeakMap;function X(q){let E=q.target;if(E.index!==null)Q.remove(E.index);for(let R in E.attributes)Q.remove(E.attributes[R]);E.removeEventListener("dispose",X),delete W[E.id];let F=Y.get(E);if(F)Q.remove(F),Y.delete(E);if(Z.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;$.memory.geometries--}function K(q,E){if(W[E.id]===!0)return E;return E.addEventListener("dispose",X),W[E.id]=!0,$.memory.geometries++,E}function H(q){let E=q.attributes;for(let F in E)Q.update(E[F],J.ARRAY_BUFFER)}function U(q){let E=[],F=q.index,R=q.attributes.position,L=0;if(R===void 0)return;if(F!==null){let M=F.array;L=F.version;for(let B=0,z=M.length;B<z;B+=3){let A=M[B+0],I=M[B+1],P=M[B+2];E.push(A,I,I,P,P,A)}}else{let M=R.array;L=R.version;for(let B=0,z=M.length/3-1;B<z;B+=3){let A=B+0,I=B+1,P=B+2;E.push(A,I,I,P,P,A)}}let N=new(R.count>=65535?bQ:fQ)(E,1);N.version=L;let O=Y.get(q);if(O)Q.remove(O);Y.set(q,N)}function G(q){let E=Y.get(q);if(E){let F=q.index;if(F!==null){if(E.version<F.version)U(q)}}else U(q);return Y.get(q)}return{get:K,update:H,getWireframeAttribute:G}}function q1(J,Q,$){let Z;function W(q){Z=q}let Y,X;function K(q){Y=q.type,X=q.bytesPerElement}function H(q,E){J.drawElements(Z,E,Y,q*X),$.update(E,Z,1)}function U(q,E,F){if(F===0)return;J.drawElementsInstanced(Z,E,Y,q*X,F),$.update(E,Z,F)}function G(q,E,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,E,0,Y,q,0,F);let L=0;for(let N=0;N<F;N++)L+=E[N];$.update(L,Z,1)}this.setMode=W,this.setIndex=K,this.render=H,this.renderInstances=U,this.renderMultiDraw=G}function N1(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(Y,X,K){switch($.calls++,X){case J.TRIANGLES:$.triangles+=K*(Y/3);break;case J.LINES:$.lines+=K*(Y/2);break;case J.LINE_STRIP:$.lines+=K*(Y-1);break;case J.LINE_LOOP:$.lines+=K*Y;break;case J.POINTS:$.points+=K*Y;break;default:T0("WebGLInfo: Unknown draw mode:",X);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function F1(J,Q,$){let Z=new WeakMap,W=new Y8;function Y(X,K,H){let U=X.morphTargetInfluences,G=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q=G!==void 0?G.length:0,E=Z.get(K);if(E===void 0||E.count!==q){let C=function(){P.dispose(),Z.delete(K),K.removeEventListener("dispose",C)};if(E!==void 0)E.texture.dispose();let F=K.morphAttributes.position!==void 0,R=K.morphAttributes.normal!==void 0,L=K.morphAttributes.color!==void 0,N=K.morphAttributes.position||[],O=K.morphAttributes.normal||[],M=K.morphAttributes.color||[],B=0;if(F===!0)B=1;if(R===!0)B=2;if(L===!0)B=3;let z=K.attributes.position.count*B,A=1;if(z>Q.maxTextureSize)A=Math.ceil(z/Q.maxTextureSize),z=Q.maxTextureSize;let I=new Float32Array(z*A*4*q),P=new jQ(I,z,A,q);P.type=uJ,P.needsUpdate=!0;let D=B*4;for(let x=0;x<q;x++){let w=N[x],l=O[x],c=M[x],y=z*A*4*x;for(let u=0;u<w.count;u++){let g=u*D;if(F===!0)W.fromBufferAttribute(w,u),I[y+g+0]=W.x,I[y+g+1]=W.y,I[y+g+2]=W.z,I[y+g+3]=0;if(R===!0)W.fromBufferAttribute(l,u),I[y+g+4]=W.x,I[y+g+5]=W.y,I[y+g+6]=W.z,I[y+g+7]=0;if(L===!0)W.fromBufferAttribute(c,u),I[y+g+8]=W.x,I[y+g+9]=W.y,I[y+g+10]=W.z,I[y+g+11]=c.itemSize===4?W.w:1}}E={count:q,texture:P,size:new L0(z,A)},Z.set(K,E),K.addEventListener("dispose",C)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let F=0;for(let L=0;L<U.length;L++)F+=U[L];let R=K.morphTargetsRelative?1:1-F;H.getUniforms().setValue(J,"morphTargetBaseInfluence",R),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:Y}}function O1(J,Q,$,Z,W){let Y=new WeakMap;function X(U){let G=W.render.frame,q=U.geometry,E=Q.get(U,q);if(Y.get(E)!==G)Q.update(E),Y.set(E,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(Y.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);Y.set(U,G)}}if(U.isSkinnedMesh){let F=U.skeleton;if(Y.get(F)!==G)F.update(),Y.set(F,G)}return E}function K(){Y=new WeakMap}function H(U){let G=U.target;if(G.removeEventListener("dispose",H),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:X,dispose:K}}var R1={[G7]:"LINEAR_TONE_MAPPING",[E7]:"REINHARD_TONE_MAPPING",[q7]:"CINEON_TONE_MAPPING",[P9]:"ACES_FILMIC_TONE_MAPPING",[F7]:"AGX_TONE_MAPPING",[O7]:"NEUTRAL_TONE_MAPPING",[N7]:"CUSTOM_TONE_MAPPING"};function k1(J,Q,$,Z,W){let Y=new S8(Q,$,{type:J,depthBuffer:Z,stencilBuffer:W,depthTexture:Z?new q9(Q,$):void 0}),X=new S8(Q,$,{type:u8,depthBuffer:!1,stencilBuffer:!1}),K=new N8;K.setAttribute("position",new r0([-1,3,0,-1,-1,0,3,-1,0],3)),K.setAttribute("uv",new r0([0,2,0,0,2,0],2));let H=new A7({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),U=new y0(K,H),G=new aJ(-1,1,1,-1,0,1),q=null,E=null,F=!1,R,L=null,N=[],O=!1;this.setSize=function(M,B){Y.setSize(M,B),X.setSize(M,B);for(let z=0;z<N.length;z++){let A=N[z];if(A.setSize)A.setSize(M,B)}},this.setEffects=function(M){N=M,O=N.length>0&&N[0].isRenderPass===!0;let{width:B,height:z}=Y;for(let A=0;A<N.length;A++){let I=N[A];if(I.setSize)I.setSize(B,z)}},this.begin=function(M,B){if(F)return!1;if(M.toneMapping===LJ&&N.length===0)return!1;if(L=B,B!==null){let{width:z,height:A}=B;if(Y.width!==z||Y.height!==A)this.setSize(z,A)}if(O===!1)M.setRenderTarget(Y);return R=M.toneMapping,M.toneMapping=LJ,!0},this.hasRenderPass=function(){return O},this.end=function(M,B){M.toneMapping=R,F=!0;let z=Y,A=X;for(let I=0;I<N.length;I++){let P=N[I];if(P.enabled===!1)continue;if(P.render(M,A,z,B),P.needsSwap!==!1){let D=z;z=A,A=D}}if(q!==M.outputColorSpace||E!==M.toneMapping){if(q=M.outputColorSpace,E=M.toneMapping,H.defines={},x0.getTransfer(q)===$8)H.defines.SRGB_TRANSFER="";let I=R1[E];if(I)H.defines[I]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=z.texture,M.setRenderTarget(L),M.render(U,G),L=null,F=!1},this.isCompositing=function(){return F},this.dispose=function(){if(Y.depthTexture)Y.depthTexture.dispose();Y.dispose(),X.dispose(),K.dispose(),H.dispose()}}var eX=new D8,ZW=new q9(1,1),JK=new jQ,QK=new jZ,$K=new lQ,yX=[],fX=[],bX=new Float32Array(16),hX=new Float32Array(9),xX=new Float32Array(4);function x6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,Y=yX[W];if(Y===void 0)Y=new Float32Array(W),yX[W]=Y;if(Q!==0){Z.toArray(Y,0);for(let X=1,K=0;X!==Q;++X)K+=$,J[X].toArray(Y,K)}return Y}function I8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function P8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function eQ(J,Q){let $=fX[Q];if($===void 0)$=new Int32Array(Q),fX[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function L1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function D1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(I8($,Q))return;J.uniform2fv(this.addr,Q),P8($,Q)}}function V1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(I8($,Q))return;J.uniform3fv(this.addr,Q),P8($,Q)}}function M1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(I8($,Q))return;J.uniform4fv(this.addr,Q),P8($,Q)}}function B1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(I8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),P8($,Q)}else{if(I8($,Z))return;xX.set(Z),J.uniformMatrix2fv(this.addr,!1,xX),P8($,Z)}}function z1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(I8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),P8($,Q)}else{if(I8($,Z))return;hX.set(Z),J.uniformMatrix3fv(this.addr,!1,hX),P8($,Z)}}function _1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(I8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),P8($,Q)}else{if(I8($,Z))return;bX.set(Z),J.uniformMatrix4fv(this.addr,!1,bX),P8($,Z)}}function C1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function w1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(I8($,Q))return;J.uniform2iv(this.addr,Q),P8($,Q)}}function I1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(I8($,Q))return;J.uniform3iv(this.addr,Q),P8($,Q)}}function P1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(I8($,Q))return;J.uniform4iv(this.addr,Q),P8($,Q)}}function A1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function T1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(I8($,Q))return;J.uniform2uiv(this.addr,Q),P8($,Q)}}function S1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(I8($,Q))return;J.uniform3uiv(this.addr,Q),P8($,Q)}}function j1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(I8($,Q))return;J.uniform4uiv(this.addr,Q),P8($,Q)}}function v1(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let Y;if(this.type===J.SAMPLER_2D_SHADOW)ZW.compareFunction=$.isReversedDepthBuffer()?SQ:TQ,Y=ZW;else Y=eX;$.setTexture2D(Q||Y,W)}function y1(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||QK,W)}function f1(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||$K,W)}function b1(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||JK,W)}function h1(J){switch(J){case 5126:return L1;case 35664:return D1;case 35665:return V1;case 35666:return M1;case 35674:return B1;case 35675:return z1;case 35676:return _1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return I1;case 35669:case 35673:return P1;case 5125:return A1;case 36294:return T1;case 36295:return S1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return b1}}function x1(J,Q){J.uniform1fv(this.addr,Q)}function g1(J,Q){let $=x6(Q,this.size,2);J.uniform2fv(this.addr,$)}function p1(J,Q){let $=x6(Q,this.size,3);J.uniform3fv(this.addr,$)}function l1(J,Q){let $=x6(Q,this.size,4);J.uniform4fv(this.addr,$)}function m1(J,Q){let $=x6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function u1(J,Q){let $=x6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function d1(J,Q){let $=x6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function c1(J,Q){J.uniform1iv(this.addr,Q)}function n1(J,Q){J.uniform2iv(this.addr,Q)}function s1(J,Q){J.uniform3iv(this.addr,Q)}function i1(J,Q){J.uniform4iv(this.addr,Q)}function o1(J,Q){J.uniform1uiv(this.addr,Q)}function a1(J,Q){J.uniform2uiv(this.addr,Q)}function r1(J,Q){J.uniform3uiv(this.addr,Q)}function t1(J,Q){J.uniform4uiv(this.addr,Q)}function e1(J,Q,$){let Z=this.cache,W=Q.length,Y=eQ($,W);if(!I8(Z,Y))J.uniform1iv(this.addr,Y),P8(Z,Y);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=ZW;else X=eX;for(let K=0;K!==W;++K)$.setTexture2D(Q[K]||X,Y[K])}function JE(J,Q,$){let Z=this.cache,W=Q.length,Y=eQ($,W);if(!I8(Z,Y))J.uniform1iv(this.addr,Y),P8(Z,Y);for(let X=0;X!==W;++X)$.setTexture3D(Q[X]||QK,Y[X])}function QE(J,Q,$){let Z=this.cache,W=Q.length,Y=eQ($,W);if(!I8(Z,Y))J.uniform1iv(this.addr,Y),P8(Z,Y);for(let X=0;X!==W;++X)$.setTextureCube(Q[X]||$K,Y[X])}function $E(J,Q,$){let Z=this.cache,W=Q.length,Y=eQ($,W);if(!I8(Z,Y))J.uniform1iv(this.addr,Y),P8(Z,Y);for(let X=0;X!==W;++X)$.setTexture2DArray(Q[X]||JK,Y[X])}function ZE(J){switch(J){case 5126:return x1;case 35664:return g1;case 35665:return p1;case 35666:return l1;case 35674:return m1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return c1;case 35667:case 35671:return n1;case 35668:case 35672:return s1;case 35669:case 35673:return i1;case 5125:return o1;case 36294:return a1;case 36295:return r1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return $E}}class ZK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=h1(Q.type)}}class WK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=ZE(Q.type)}}class YK{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,Y=Z.length;W!==Y;++W){let X=Z[W];X.setValue(J,Q[X.id],$)}}}var JW=/(\w+)(\])?(\[|\.)?/g;function gX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function WE(J,Q,$){let Z=J.name,W=Z.length;JW.lastIndex=0;while(!0){let Y=JW.exec(Z),X=JW.lastIndex,K=Y[1],H=Y[2]==="]",U=Y[3];if(H)K=K|0;if(U===void 0||U==="["&&X+2===W){gX($,U===void 0?new ZK(K,J,Q):new WK(K,J,Q));break}else{let q=$.map[K];if(q===void 0)q=new YK(K),gX($,q);$=q}}}class y7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Y=0;Y<$;++Y){let X=J.getActiveUniform(Q,Y),K=J.getUniformLocation(Q,X.name);WE(X,K,this)}let Z=[],W=[];for(let Y of this.seq)if(Y.type===J.SAMPLER_2D_SHADOW||Y.type===J.SAMPLER_CUBE_SHADOW||Y.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(Y);else W.push(Y);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,Y=Q.length;W!==Y;++W){let X=Q[W],K=$[X.id];if(K.needsUpdate!==!1)X.setValue(J,K.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let Y=J[Z];if(Y.id in Q)$.push(Y)}return $}}function pX(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var YE=37297,XE=0;function KE(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),Y=Math.min(Q+6,$.length);for(let X=W;X<Y;X++){let K=X+1;Z.push(`${K===Q?">":" "} ${K}: ${$[X]}`)}return Z.join(`
`)}var lX=new j0;function HE(J){x0._getMatrix(lX,x0.workingColorSpace,J);let Q=`mat3( ${lX.elements.map(($)=>$.toFixed(4))} )`;switch(x0.getTransfer(J)){case wZ:return[Q,"LinearTransferOETF"];case $8:return[Q,"sRGBTransferOETF"];default:return M0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function mX(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),Y=(J.getShaderInfoLog(Q)||"").trim();if(Z&&Y==="")return"";let X=/ERROR: 0:(\d+)/.exec(Y);if(X){let K=parseInt(X[1]);return $.toUpperCase()+`

`+Y+`

`+KE(J.getShaderSource(Q),K)}else return Y}function UE(J,Q){let $=HE(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var GE={[G7]:"Linear",[E7]:"Reinhard",[q7]:"Cineon",[P9]:"ACESFilmic",[F7]:"AgX",[O7]:"Neutral",[N7]:"Custom"};function EE(J,Q){let $=GE[Q];if($===void 0)return M0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var rQ=new T;function qE(){x0.getLuminanceCoefficients(rQ);let J=rQ.x.toFixed(4),Q=rQ.y.toFixed(4),$=rQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function NE(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(v7).join(`
`)}function FE(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function OE(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let Y=J.getActiveAttrib(Q,W),X=Y.name,K=1;if(Y.type===J.FLOAT_MAT2)K=2;if(Y.type===J.FLOAT_MAT3)K=3;if(Y.type===J.FLOAT_MAT4)K=4;$[X]={type:Y.type,location:J.getAttribLocation(Q,X),locationSize:K}}return $}function v7(J){return J!==""}function uX(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function dX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var RE=/^[ \t]*#include +<([\w\d./]+)>/gm;function WW(J){return J.replace(RE,LE)}var kE=new Map;function LE(J,Q){let $=p0[Q];if($===void 0){let Z=kE.get(Q);if(Z!==void 0)$=p0[Z],M0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return WW($)}var DE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cX(J){return J.replace(DE,VE)}function VE(J,Q,$,Z){let W="";for(let Y=parseInt(Q);Y<parseInt($);Y++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+Y+" ]").replace(/UNROLLED_LOOP_INDEX/g,Y);return W}function nX(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var ME={[w9]:"SHADOWMAP_TYPE_PCF",[R6]:"SHADOWMAP_TYPE_VSM"};function BE(J){return ME[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zE={[L6]:"ENVMAP_TYPE_CUBE",[A9]:"ENVMAP_TYPE_CUBE",[R7]:"ENVMAP_TYPE_CUBE_UV"};function _E(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return zE[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var CE={[A9]:"ENVMAP_MODE_REFRACTION"};function wE(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return CE[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IE={[eY]:"ENVMAP_BLENDING_MULTIPLY",[JX]:"ENVMAP_BLENDING_MIX",[QX]:"ENVMAP_BLENDING_ADD"};function PE(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return IE[J.combine]||"ENVMAP_BLENDING_NONE"}function AE(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function TE(J,Q,$,Z){let W=J.getContext(),Y=$.defines,X=$.vertexShader,K=$.fragmentShader,H=BE($),U=_E($),G=wE($),q=PE($),E=AE($),F=NE($),R=FE(Y),L=W.createProgram(),N,O,M=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(v7).join(`
`),N.length>0)N+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(v7).join(`
`),O.length>0)O+=`
`}else N=[nX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(v7).join(`
`),O=[nX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+q:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==LJ?"#define TONE_MAPPING":"",$.toneMapping!==LJ?p0.tonemapping_pars_fragment:"",$.toneMapping!==LJ?EE("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",p0.colorspace_pars_fragment,UE("linearToOutputTexel",$.outputColorSpace),qE(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(v7).join(`
`);if(X=WW(X),X=uX(X,$),X=dX(X,$),K=WW(K),K=uX(K,$),K=dX(K,$),X=cX(X),K=cX(K),$.isRawShaderMaterial!==!0)M=`#version 300 es
`,N=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,O=["#define varying in",$.glslVersion===IZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===IZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let B=M+N+X,z=M+O+K,A=pX(W,W.VERTEX_SHADER,B),I=pX(W,W.FRAGMENT_SHADER,z);if(W.attachShader(L,A),W.attachShader(L,I),$.index0AttributeName!==void 0)W.bindAttribLocation(L,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(L,0,"position");W.linkProgram(L);function P(w){if(J.debug.checkShaderErrors){let l=W.getProgramInfoLog(L)||"",c=W.getShaderInfoLog(A)||"",y=W.getShaderInfoLog(I)||"",u=l.trim(),g=c.trim(),m=y.trim(),a=!0,Q0=!0;if(W.getProgramParameter(L,W.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,L,A,I);else{let N0=mX(W,A,"vertex"),I0=mX(W,I,"fragment");T0("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(L,W.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+u+`
`+N0+`
`+I0)}else if(u!=="")M0("WebGLProgram: Program Info Log:",u);else if(g===""||m==="")Q0=!1;if(Q0)w.diagnostics={runnable:a,programLog:u,vertexShader:{log:g,prefix:N},fragmentShader:{log:m,prefix:O}}}W.deleteShader(A),W.deleteShader(I),D=new y7(W,L),C=OE(W,L)}let D;this.getUniforms=function(){if(D===void 0)P(this);return D};let C;this.getAttributes=function(){if(C===void 0)P(this);return C};let x=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(x===!1)x=W.getProgramParameter(L,YE);return x},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(L),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=XE++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=I,this}var SE=0;class XK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),Y=this._getShaderCacheForMaterial(J);if(Y.has(Z)===!1)Y.add(Z),Z.usedTimes++;if(Y.has(W)===!1)Y.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new KK(J),Q.set(J,$);return $}}class KK{constructor(J){this.id=SE++,this.code=J,this.usedTimes=0}}function jE(J){return J===v9||J===IQ||J===PQ}function vE(J,Q,$,Z,W,Y){let X=new vQ,K=new XK,H=new Set,U=[],G=new Map,q=Z.logarithmicDepthBuffer,E=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(H.add(D),D===0)return"uv";return`uv${D}`}function L(D,C,x,w,l,c){let y=w.fog,u=l.geometry,g=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?w.environment:null,m=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,a=Q.get(D.envMap||g,m),Q0=!!a&&a.mapping===R7?a.image.height:null,N0=F[D.type];if(D.precision!==null){if(E=Z.getMaxPrecision(D.precision),E!==D.precision)M0("WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead.")}let I0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,D0=I0!==void 0?I0.length:0,J8=0;if(u.morphAttributes.position!==void 0)J8=1;if(u.morphAttributes.normal!==void 0)J8=2;if(u.morphAttributes.color!==void 0)J8=3;let c0,s,E0,z0;if(N0){let f0=PJ[N0];c0=f0.vertexShader,s=f0.fragmentShader}else c0=D.vertexShader,s=D.fragmentShader,K.update(D),E0=K.getVertexShaderID(D),z0=K.getFragmentShaderID(D);let q0=J.getRenderTarget(),P0=J.state.buffers.depth.getReversed(),t0=l.isInstancedMesh===!0,l0=l.isBatchedMesh===!0,s0=!!D.map,X8=!!D.matcap,K8=!!a,g0=!!D.aoMap,v8=!!D.lightMap,f8=!!D.bumpMap,B8=!!D.normalMap,j=!!D.displacementMap,l8=!!D.emissiveMap,i0=!!D.metalnessMap,a0=!!D.roughnessMap,U0=D.anisotropy>0,F8=D.clearcoat>0,A0=D.dispersion>0,_=D.iridescence>0,k=D.sheen>0,f=D.transmission>0,o=U0&&!!D.anisotropyMap,r=F8&&!!D.clearcoatMap,e=F8&&!!D.clearcoatNormalMap,Y0=F8&&!!D.clearcoatRoughnessMap,d=_&&!!D.iridescenceMap,i=_&&!!D.iridescenceThicknessMap,W0=k&&!!D.sheenColorMap,R0=k&&!!D.sheenRoughnessMap,$0=!!D.specularMap,X0=!!D.specularColorMap,S0=!!D.specularIntensityMap,h0=f&&!!D.transmissionMap,m0=f&&!!D.thicknessMap,S=!!D.gradientMap,Z0=!!D.alphaMap,n=D.alphaTest>0,J0=!!D.alphaHash,k0=!!D.extensions,t=LJ;if(D.toneMapped){if(q0===null||q0.isXRRenderTarget===!0)t=J.toneMapping}let _0={shaderID:N0,shaderType:D.type,shaderName:D.name,vertexShader:c0,fragmentShader:s,defines:D.defines,customVertexShaderID:E0,customFragmentShaderID:z0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:l0,batchingColor:l0&&l._colorsTexture!==null,instancing:t0,instancingColor:t0&&l.instanceColor!==null,instancingMorph:t0&&l.morphTexture!==null,outputColorSpace:q0===null?J.outputColorSpace:q0.isXRRenderTarget===!0?q0.texture.colorSpace:x0.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:s0,matcap:X8,envMap:K8,envMapMode:K8&&a.mapping,envMapCubeUVHeight:Q0,aoMap:g0,lightMap:v8,bumpMap:f8,normalMap:B8,displacementMap:j,emissiveMap:l8,normalMapObjectSpace:B8&&D.normalMapType===UX,normalMapTangentSpace:B8&&D.normalMapType===CZ,packedNormalMap:B8&&D.normalMapType===CZ&&jE(D.normalMap.format),metalnessMap:i0,roughnessMap:a0,anisotropy:U0,anisotropyMap:o,clearcoat:F8,clearcoatMap:r,clearcoatNormalMap:e,clearcoatRoughnessMap:Y0,dispersion:A0,iridescence:_,iridescenceMap:d,iridescenceThicknessMap:i,sheen:k,sheenColorMap:W0,sheenRoughnessMap:R0,specularMap:$0,specularColorMap:X0,specularIntensityMap:S0,transmission:f,transmissionMap:h0,thicknessMap:m0,gradientMap:S,opaque:D.transparent===!1&&D.blending===U7&&D.alphaToCoverage===!1,alphaMap:Z0,alphaTest:n,alphaHash:J0,combine:D.combine,mapUv:s0&&R(D.map.channel),aoMapUv:g0&&R(D.aoMap.channel),lightMapUv:v8&&R(D.lightMap.channel),bumpMapUv:f8&&R(D.bumpMap.channel),normalMapUv:B8&&R(D.normalMap.channel),displacementMapUv:j&&R(D.displacementMap.channel),emissiveMapUv:l8&&R(D.emissiveMap.channel),metalnessMapUv:i0&&R(D.metalnessMap.channel),roughnessMapUv:a0&&R(D.roughnessMap.channel),anisotropyMapUv:o&&R(D.anisotropyMap.channel),clearcoatMapUv:r&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:e&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:d&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:i&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:W0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:R0&&R(D.sheenRoughnessMap.channel),specularMapUv:$0&&R(D.specularMap.channel),specularColorMapUv:X0&&R(D.specularColorMap.channel),specularIntensityMapUv:S0&&R(D.specularIntensityMap.channel),transmissionMapUv:h0&&R(D.transmissionMap.channel),thicknessMapUv:m0&&R(D.thicknessMap.channel),alphaMapUv:Z0&&R(D.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(B8||U0),vertexNormals:!!u.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!u.attributes.uv&&(s0||Z0),fog:!!y,useFog:D.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||u.attributes.normal===void 0&&B8===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:q,reversedDepthBuffer:P0,skinning:l.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:D0,morphTextureStride:J8,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:c.length,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&x.length>0,shadowMapType:J.shadowMap.type,toneMapping:t,decodeVideoTexture:s0&&D.map.isVideoTexture===!0&&x0.getTransfer(D.map.colorSpace)===$8,decodeVideoTextureEmissive:l8&&D.emissiveMap.isVideoTexture===!0&&x0.getTransfer(D.emissiveMap.colorSpace)===$8,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===c8,flipSided:D.side===g8,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:k0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k0&&D.extensions.multiDraw===!0||l0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return _0.vertexUv1s=H.has(1),_0.vertexUv2s=H.has(2),_0.vertexUv3s=H.has(3),H.clear(),_0}function N(D){let C=[];if(D.shaderID)C.push(D.shaderID);else C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let x in D.defines)C.push(x),C.push(D.defines[x]);if(D.isRawShaderMaterial===!1)O(C,D),M(C,D),C.push(J.outputColorSpace);return C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function M(D,C){if(X.disableAll(),C.instancing)X.enable(0);if(C.instancingColor)X.enable(1);if(C.instancingMorph)X.enable(2);if(C.matcap)X.enable(3);if(C.envMap)X.enable(4);if(C.normalMapObjectSpace)X.enable(5);if(C.normalMapTangentSpace)X.enable(6);if(C.clearcoat)X.enable(7);if(C.iridescence)X.enable(8);if(C.alphaTest)X.enable(9);if(C.vertexColors)X.enable(10);if(C.vertexAlphas)X.enable(11);if(C.vertexUv1s)X.enable(12);if(C.vertexUv2s)X.enable(13);if(C.vertexUv3s)X.enable(14);if(C.vertexTangents)X.enable(15);if(C.anisotropy)X.enable(16);if(C.alphaHash)X.enable(17);if(C.batching)X.enable(18);if(C.dispersion)X.enable(19);if(C.batchingColor)X.enable(20);if(C.gradientMap)X.enable(21);if(C.packedNormalMap)X.enable(22);if(C.vertexNormals)X.enable(23);if(D.push(X.mask),X.disableAll(),C.fog)X.enable(0);if(C.useFog)X.enable(1);if(C.flatShading)X.enable(2);if(C.logarithmicDepthBuffer)X.enable(3);if(C.reversedDepthBuffer)X.enable(4);if(C.skinning)X.enable(5);if(C.morphTargets)X.enable(6);if(C.morphNormals)X.enable(7);if(C.morphColors)X.enable(8);if(C.premultipliedAlpha)X.enable(9);if(C.shadowMapEnabled)X.enable(10);if(C.doubleSided)X.enable(11);if(C.flipSided)X.enable(12);if(C.useDepthPacking)X.enable(13);if(C.dithering)X.enable(14);if(C.transmission)X.enable(15);if(C.sheen)X.enable(16);if(C.opaque)X.enable(17);if(C.pointsUvs)X.enable(18);if(C.decodeVideoTexture)X.enable(19);if(C.decodeVideoTextureEmissive)X.enable(20);if(C.alphaToCoverage)X.enable(21);if(C.numLightProbeGrids>0)X.enable(22);D.push(X.mask)}function B(D){let C=F[D.type],x;if(C){let w=PJ[C];x=nJ.clone(w.uniforms)}else x=D.uniforms;return x}function z(D,C){let x=G.get(C);if(x!==void 0)++x.usedTimes;else x=new TE(J,C,D,W),U.push(x),G.set(C,x);return x}function A(D){if(--D.usedTimes===0){let C=U.indexOf(D);U[C]=U[U.length-1],U.pop(),G.delete(D.cacheKey),D.destroy()}}function I(D){K.remove(D)}function P(){K.dispose()}return{getParameters:L,getProgramCacheKey:N,getUniforms:B,acquireProgram:z,releaseProgram:A,releaseShaderCache:I,programs:U,dispose:P}}function yE(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let K=J.get(X);if(K===void 0)K={},J.set(X,K);return K}function Z(X){J.delete(X)}function W(X,K,H){J.get(X)[K]=H}function Y(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:Y}}function fE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function sX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function iX(){let J=[],Q=0,$=[],Z=[],W=[];function Y(){Q=0,$.length=0,Z.length=0,W.length=0}function X(E){let F=0;if(E.isInstancedMesh)F+=2;if(E.isSkinnedMesh)F+=1;return F}function K(E,F,R,L,N,O){let M=J[Q];if(M===void 0)M={id:E.id,object:E,geometry:F,material:R,materialVariant:X(E),groupOrder:L,renderOrder:E.renderOrder,z:N,group:O},J[Q]=M;else M.id=E.id,M.object=E,M.geometry=F,M.material=R,M.materialVariant=X(E),M.groupOrder=L,M.renderOrder=E.renderOrder,M.z=N,M.group=O;return Q++,M}function H(E,F,R,L,N,O){let M=K(E,F,R,L,N,O);if(R.transmission>0)Z.push(M);else if(R.transparent===!0)W.push(M);else $.push(M)}function U(E,F,R,L,N,O){let M=K(E,F,R,L,N,O);if(R.transmission>0)Z.unshift(M);else if(R.transparent===!0)W.unshift(M);else $.unshift(M)}function G(E,F){if($.length>1)$.sort(E||fE);if(Z.length>1)Z.sort(F||sX);if(W.length>1)W.sort(F||sX)}function q(){for(let E=Q,F=J.length;E<F;E++){let R=J[E];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:Y,push:H,unshift:U,finish:q,sort:G}}function bE(){let J=new WeakMap;function Q(Z,W){let Y=J.get(Z),X;if(Y===void 0)X=new iX,J.set(Z,[X]);else if(W>=Y.length)X=new iX,Y.push(X);else X=Y[W];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function hE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new T,color:new B0};break;case"SpotLight":$={position:new T,direction:new T,color:new B0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new T,color:new B0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new T,skyColor:new B0,groundColor:new B0};break;case"RectAreaLight":$={color:new B0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[Q.id]=$,$}}}function xE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var gE=0;function pE(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function lE(J){let Q=new hE,$=xE(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new T);let W=new T,Y=new v0,X=new v0;function K(U){let G=0,q=0,E=0;for(let C=0;C<9;C++)Z.probe[C].set(0,0,0);let F=0,R=0,L=0,N=0,O=0,M=0,B=0,z=0,A=0,I=0,P=0;U.sort(pE);for(let C=0,x=U.length;C<x;C++){let w=U[C],l=w.color,c=w.intensity,y=w.distance,u=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===v9)u=w.shadow.map.texture;else u=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)G+=l.r*c,q+=l.g*c,E+=l.b*c;else if(w.isLightProbe){for(let g=0;g<9;g++)Z.probe[g].addScaledVector(w.sh.coefficients[g],c);P++}else if(w.isDirectionalLight){let g=Q.get(w);if(g.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let m=w.shadow,a=$.get(w);a.shadowIntensity=m.intensity,a.shadowBias=m.bias,a.shadowNormalBias=m.normalBias,a.shadowRadius=m.radius,a.shadowMapSize=m.mapSize,Z.directionalShadow[F]=a,Z.directionalShadowMap[F]=u,Z.directionalShadowMatrix[F]=w.shadow.matrix,M++}Z.directional[F]=g,F++}else if(w.isSpotLight){let g=Q.get(w);g.position.setFromMatrixPosition(w.matrixWorld),g.color.copy(l).multiplyScalar(c),g.distance=y,g.coneCos=Math.cos(w.angle),g.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),g.decay=w.decay,Z.spot[L]=g;let m=w.shadow;if(w.map){if(Z.spotLightMap[A]=w.map,A++,m.updateMatrices(w),w.castShadow)I++}if(Z.spotLightMatrix[L]=m.matrix,w.castShadow){let a=$.get(w);a.shadowIntensity=m.intensity,a.shadowBias=m.bias,a.shadowNormalBias=m.normalBias,a.shadowRadius=m.radius,a.shadowMapSize=m.mapSize,Z.spotShadow[L]=a,Z.spotShadowMap[L]=u,z++}L++}else if(w.isRectAreaLight){let g=Q.get(w);g.color.copy(l).multiplyScalar(c),g.halfWidth.set(w.width*0.5,0,0),g.halfHeight.set(0,w.height*0.5,0),Z.rectArea[N]=g,N++}else if(w.isPointLight){let g=Q.get(w);if(g.color.copy(w.color).multiplyScalar(w.intensity),g.distance=w.distance,g.decay=w.decay,w.castShadow){let m=w.shadow,a=$.get(w);a.shadowIntensity=m.intensity,a.shadowBias=m.bias,a.shadowNormalBias=m.normalBias,a.shadowRadius=m.radius,a.shadowMapSize=m.mapSize,a.shadowCameraNear=m.camera.near,a.shadowCameraFar=m.camera.far,Z.pointShadow[R]=a,Z.pointShadowMap[R]=u,Z.pointShadowMatrix[R]=w.shadow.matrix,B++}Z.point[R]=g,R++}else if(w.isHemisphereLight){let g=Q.get(w);g.skyColor.copy(w.color).multiplyScalar(c),g.groundColor.copy(w.groundColor).multiplyScalar(c),Z.hemi[O]=g,O++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=K0.LTC_FLOAT_1,Z.rectAreaLTC2=K0.LTC_FLOAT_2;else Z.rectAreaLTC1=K0.LTC_HALF_1,Z.rectAreaLTC2=K0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=q,Z.ambient[2]=E;let D=Z.hash;if(D.directionalLength!==F||D.pointLength!==R||D.spotLength!==L||D.rectAreaLength!==N||D.hemiLength!==O||D.numDirectionalShadows!==M||D.numPointShadows!==B||D.numSpotShadows!==z||D.numSpotMaps!==A||D.numLightProbes!==P)Z.directional.length=F,Z.spot.length=L,Z.rectArea.length=N,Z.point.length=R,Z.hemi.length=O,Z.directionalShadow.length=M,Z.directionalShadowMap.length=M,Z.pointShadow.length=B,Z.pointShadowMap.length=B,Z.spotShadow.length=z,Z.spotShadowMap.length=z,Z.directionalShadowMatrix.length=M,Z.pointShadowMatrix.length=B,Z.spotLightMatrix.length=z+A-I,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=P,D.directionalLength=F,D.pointLength=R,D.spotLength=L,D.rectAreaLength=N,D.hemiLength=O,D.numDirectionalShadows=M,D.numPointShadows=B,D.numSpotShadows=z,D.numSpotMaps=A,D.numLightProbes=P,Z.version=gE++}function H(U,G){let q=0,E=0,F=0,R=0,L=0,N=G.matrixWorldInverse;for(let O=0,M=U.length;O<M;O++){let B=U[O];if(B.isDirectionalLight){let z=Z.directional[q];z.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(N),q++}else if(B.isSpotLight){let z=Z.spot[F];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(N),z.direction.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(B.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(N),F++}else if(B.isRectAreaLight){let z=Z.rectArea[R];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(N),X.identity(),Y.copy(B.matrixWorld),Y.premultiply(N),X.extractRotation(Y),z.halfWidth.set(B.width*0.5,0,0),z.halfHeight.set(0,B.height*0.5,0),z.halfWidth.applyMatrix4(X),z.halfHeight.applyMatrix4(X),R++}else if(B.isPointLight){let z=Z.point[E];z.position.setFromMatrixPosition(B.matrixWorld),z.position.applyMatrix4(N),E++}else if(B.isHemisphereLight){let z=Z.hemi[L];z.direction.setFromMatrixPosition(B.matrixWorld),z.direction.transformDirection(N),L++}}}return{setup:K,setupView:H,state:Z}}function oX(J){let Q=new lE(J),$=[],Z=[],W=[];function Y(E){q.camera=E,$.length=0,Z.length=0,W.length=0}function X(E){$.push(E)}function K(E){Z.push(E)}function H(E){W.push(E)}function U(){Q.setup($)}function G(E){Q.setupView($,E)}let q={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:Y,state:q,setupLights:U,setupLightsView:G,pushLight:X,pushShadow:K,pushLightProbeGrid:H}}function mE(J){let Q=new WeakMap;function $(W,Y=0){let X=Q.get(W),K;if(X===void 0)K=new oX(J),Q.set(W,[K]);else if(Y>=X.length)K=new oX(J),X.push(K);else K=X[Y];return K}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var uE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
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
}`,cE=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],nE=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],aX=new v0,j7=new T,QW=new T;function sE(J,Q,$){let Z=new C7,W=new L0,Y=new L0,X=new Y8,K=new fZ,H=new bZ,U={},G=$.maxTextureSize,q={[U9]:g8,[g8]:U9,[c8]:c8},E=new C8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L0},radius:{value:4}},vertexShader:uE,fragmentShader:dE}),F=E.clone();F.defines.HORIZONTAL_PASS=1;let R=new N8;R.setAttribute("position",new V8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new y0(R,E),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w9;let O=this.type;this.render=function(I,P,D){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(I.length===0)return;if(this.type===CY)M0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=w9;let C=J.getRenderTarget(),x=J.getActiveCubeFace(),w=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(XJ),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let c=O!==this.type;if(c)P.traverse(function(y){if(y.material)if(Array.isArray(y.material))y.material.forEach((u)=>u.needsUpdate=!0);else y.material.needsUpdate=!0});for(let y=0,u=I.length;y<u;y++){let g=I[y],m=g.shadow;if(m===void 0){M0("WebGLShadowMap:",g,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let a=m.getFrameExtents();if(W.multiply(a),Y.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)Y.x=Math.floor(G/a.x),W.x=Y.x*a.x,m.mapSize.x=Y.x;if(W.y>G)Y.y=Math.floor(G/a.y),W.y=Y.y*a.y,m.mapSize.y=Y.y}let Q0=J.state.buffers.depth.getReversed();if(m.camera._reversedDepth=Q0,m.map===null||c===!0){if(m.map!==null){if(m.map.depthTexture!==null)m.map.depthTexture.dispose(),m.map.depthTexture=null;m.map.dispose()}if(this.type===R6){if(g.isPointLight){M0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}m.map=new S8(W.x,W.y,{format:v9,type:u8,minFilter:T8,magFilter:T8,generateMipmaps:!1}),m.map.texture.name=g.name+".shadowMap",m.map.depthTexture=new q9(W.x,W.y,uJ),m.map.depthTexture.name=g.name+".shadowMapDepth",m.map.depthTexture.format=S9,m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=n8,m.map.depthTexture.magFilter=n8}else{if(g.isPointLight)m.map=new YW(W.x),m.map.depthTexture=new vZ(W.x,E9);else m.map=new S8(W.x,W.y),m.map.depthTexture=new q9(W.x,W.y,E9);if(m.map.depthTexture.name=g.name+".shadowMap",m.map.depthTexture.format=S9,this.type===w9)m.map.depthTexture.compareFunction=Q0?SQ:TQ,m.map.depthTexture.minFilter=T8,m.map.depthTexture.magFilter=T8;else m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=n8,m.map.depthTexture.magFilter=n8}m.camera.updateProjectionMatrix()}let N0=m.map.isWebGLCubeRenderTarget?6:1;for(let I0=0;I0<N0;I0++){if(m.map.isWebGLCubeRenderTarget)J.setRenderTarget(m.map,I0),J.clear();else{if(I0===0)J.setRenderTarget(m.map),J.clear();let D0=m.getViewport(I0);X.set(Y.x*D0.x,Y.y*D0.y,Y.x*D0.z,Y.y*D0.w),l.viewport(X)}if(g.isPointLight){let{camera:D0,matrix:J8}=m,c0=g.distance||D0.far;if(c0!==D0.far)D0.far=c0,D0.updateProjectionMatrix();j7.setFromMatrixPosition(g.matrixWorld),D0.position.copy(j7),QW.copy(D0.position),QW.add(cE[I0]),D0.up.copy(nE[I0]),D0.lookAt(QW),D0.updateMatrixWorld(),J8.makeTranslation(-j7.x,-j7.y,-j7.z),aX.multiplyMatrices(D0.projectionMatrix,D0.matrixWorldInverse),m._frustum.setFromProjectionMatrix(aX,D0.coordinateSystem,D0.reversedDepth)}else m.updateMatrices(g);Z=m.getFrustum(),z(P,D,m.camera,g,this.type)}if(m.isPointLightShadow!==!0&&this.type===R6)M(m,D);m.needsUpdate=!1}O=this.type,N.needsUpdate=!1,J.setRenderTarget(C,x,w)};function M(I,P){let D=Q.update(L);if(E.defines.VSM_SAMPLES!==I.blurSamples)E.defines.VSM_SAMPLES=I.blurSamples,F.defines.VSM_SAMPLES=I.blurSamples,E.needsUpdate=!0,F.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new S8(W.x,W.y,{format:v9,type:u8});E.uniforms.shadow_pass.value=I.map.depthTexture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(P,null,D,E,L,null),F.uniforms.shadow_pass.value=I.mapPass.texture,F.uniforms.resolution.value=I.mapSize,F.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(P,null,D,F,L,null)}function B(I,P,D,C){let x=null,w=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(w!==void 0)x=w;else if(x=D.isPointLight===!0?H:K,J.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let l=x.uuid,c=P.uuid,y=U[l];if(y===void 0)y={},U[l]=y;let u=y[c];if(u===void 0)u=x.clone(),y[c]=u,P.addEventListener("dispose",A);x=u}if(x.visible=P.visible,x.wireframe=P.wireframe,C===R6)x.side=P.shadowSide!==null?P.shadowSide:P.side;else x.side=P.shadowSide!==null?P.shadowSide:q[P.side];if(x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let l=J.properties.get(x);l.light=D}return x}function z(I,P,D,C,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&x===R6)&&(!I.frustumCulled||Z.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);let c=Q.update(I),y=I.material;if(Array.isArray(y)){let u=c.groups;for(let g=0,m=u.length;g<m;g++){let a=u[g],Q0=y[a.materialIndex];if(Q0&&Q0.visible){let N0=B(I,Q0,C,x);I.onBeforeShadow(J,I,P,D,c,N0,a),J.renderBufferDirect(D,null,c,N0,I,a),I.onAfterShadow(J,I,P,D,c,N0,a)}}}else if(y.visible){let u=B(I,y,C,x);I.onBeforeShadow(J,I,P,D,c,u,null),J.renderBufferDirect(D,null,c,u,I,null),I.onAfterShadow(J,I,P,D,c,u,null)}}}let l=I.children;for(let c=0,y=l.length;c<y;c++)z(l[c],P,D,C,x)}function A(I){I.target.removeEventListener("dispose",A);for(let D in U){let C=U[D],x=I.target.uuid;if(x in C)C[x].dispose(),delete C[x]}}}function iE(J,Q){function $(){let S=!1,Z0=new Y8,n=null,J0=new Y8(0,0,0,0);return{setMask:function(k0){if(n!==k0&&!S)J.colorMask(k0,k0,k0,k0),n=k0},setLocked:function(k0){S=k0},setClear:function(k0,t,_0,f0,z8){if(z8===!0)k0*=f0,t*=f0,_0*=f0;if(Z0.set(k0,t,_0,f0),J0.equals(Z0)===!1)J.clearColor(k0,t,_0,f0),J0.copy(Z0)},reset:function(){S=!1,n=null,J0.set(-1,0,0,0)}}}function Z(){let S=!1,Z0=!1,n=null,J0=null,k0=null;return{setReversed:function(t){if(Z0!==t){let _0=Q.get("EXT_clip_control");if(t)_0.clipControlEXT(_0.LOWER_LEFT_EXT,_0.ZERO_TO_ONE_EXT);else _0.clipControlEXT(_0.LOWER_LEFT_EXT,_0.NEGATIVE_ONE_TO_ONE_EXT);Z0=t;let f0=k0;k0=null,this.setClear(f0)}},getReversed:function(){return Z0},setTest:function(t){if(t)q0(J.DEPTH_TEST);else P0(J.DEPTH_TEST)},setMask:function(t){if(n!==t&&!S)J.depthMask(t),n=t},setFunc:function(t){if(Z0)t=DX[t];if(J0!==t){switch(t){case nY:J.depthFunc(J.NEVER);break;case sY:J.depthFunc(J.ALWAYS);break;case iY:J.depthFunc(J.LESS);break;case p$:J.depthFunc(J.LEQUAL);break;case oY:J.depthFunc(J.EQUAL);break;case aY:J.depthFunc(J.GEQUAL);break;case rY:J.depthFunc(J.GREATER);break;case tY:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=t}},setLocked:function(t){S=t},setClear:function(t){if(k0!==t){if(k0=t,Z0)t=1-t;J.clearDepth(t)}},reset:function(){S=!1,n=null,J0=null,k0=null,Z0=!1}}}function W(){let S=!1,Z0=null,n=null,J0=null,k0=null,t=null,_0=null,f0=null,z8=null;return{setTest:function(Z8){if(!S)if(Z8)q0(J.STENCIL_TEST);else P0(J.STENCIL_TEST)},setMask:function(Z8){if(Z0!==Z8&&!S)J.stencilMask(Z8),Z0=Z8},setFunc:function(Z8,MJ,qJ){if(n!==Z8||J0!==MJ||k0!==qJ)J.stencilFunc(Z8,MJ,qJ),n=Z8,J0=MJ,k0=qJ},setOp:function(Z8,MJ,qJ){if(t!==Z8||_0!==MJ||f0!==qJ)J.stencilOp(Z8,MJ,qJ),t=Z8,_0=MJ,f0=qJ},setLocked:function(Z8){S=Z8},setClear:function(Z8){if(z8!==Z8)J.clearStencil(Z8),z8=Z8},reset:function(){S=!1,Z0=null,n=null,J0=null,k0=null,t=null,_0=null,f0=null,z8=null}}}let Y=new $,X=new Z,K=new W,H=new WeakMap,U=new WeakMap,G={},q={},E={},F=new WeakMap,R=[],L=null,N=!1,O=null,M=null,B=null,z=null,A=null,I=null,P=null,D=new B0(0,0,0),C=0,x=!1,w=null,l=null,c=null,y=null,u=null,g=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),m=!1,a=0,Q0=J.getParameter(J.VERSION);if(Q0.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec(Q0)[1]),m=a>=1;else if(Q0.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec(Q0)[1]),m=a>=2;let N0=null,I0={},D0=J.getParameter(J.SCISSOR_BOX),J8=J.getParameter(J.VIEWPORT),c0=new Y8().fromArray(D0),s=new Y8().fromArray(J8);function E0(S,Z0,n,J0){let k0=new Uint8Array(4),t=J.createTexture();J.bindTexture(S,t),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let _0=0;_0<n;_0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(Z0,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,k0);else J.texImage2D(Z0+_0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,k0);return t}let z0={};z0[J.TEXTURE_2D]=E0(J.TEXTURE_2D,J.TEXTURE_2D,1),z0[J.TEXTURE_CUBE_MAP]=E0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),z0[J.TEXTURE_2D_ARRAY]=E0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),z0[J.TEXTURE_3D]=E0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Y.setClear(0,0,0,1),X.setClear(1),K.setClear(0),q0(J.DEPTH_TEST),X.setFunc(p$),f8(!1),B8(h$),q0(J.CULL_FACE),g0(XJ);function q0(S){if(G[S]!==!0)J.enable(S),G[S]=!0}function P0(S){if(G[S]!==!1)J.disable(S),G[S]=!1}function t0(S,Z0){if(E[S]!==Z0){if(J.bindFramebuffer(S,Z0),E[S]=Z0,S===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=Z0;if(S===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=Z0;return!0}return!1}function l0(S,Z0){let n=R,J0=!1;if(S){if(n=F.get(Z0),n===void 0)n=[],F.set(Z0,n);let k0=S.textures;if(n.length!==k0.length||n[0]!==J.COLOR_ATTACHMENT0){for(let t=0,_0=k0.length;t<_0;t++)n[t]=J.COLOR_ATTACHMENT0+t;n.length=k0.length,J0=!0}}else if(n[0]!==J.BACK)n[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(n)}function s0(S){if(L!==S)return J.useProgram(S),L=S,!0;return!1}let X8={[k6]:J.FUNC_ADD,[IY]:J.FUNC_SUBTRACT,[PY]:J.FUNC_REVERSE_SUBTRACT};X8[AY]=J.MIN,X8[TY]=J.MAX;let K8={[SY]:J.ZERO,[jY]:J.ONE,[vY]:J.SRC_COLOR,[fY]:J.SRC_ALPHA,[lY]:J.SRC_ALPHA_SATURATE,[gY]:J.DST_COLOR,[hY]:J.DST_ALPHA,[yY]:J.ONE_MINUS_SRC_COLOR,[bY]:J.ONE_MINUS_SRC_ALPHA,[pY]:J.ONE_MINUS_DST_COLOR,[xY]:J.ONE_MINUS_DST_ALPHA,[mY]:J.CONSTANT_COLOR,[uY]:J.ONE_MINUS_CONSTANT_COLOR,[dY]:J.CONSTANT_ALPHA,[cY]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(S,Z0,n,J0,k0,t,_0,f0,z8,Z8){if(S===XJ){if(N===!0)P0(J.BLEND),N=!1;return}if(N===!1)q0(J.BLEND),N=!0;if(S!==wY){if(S!==O||Z8!==x){if(M!==k6||A!==k6)J.blendEquation(J.FUNC_ADD),M=k6,A=k6;if(Z8)switch(S){case U7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I9:J.blendFunc(J.ONE,J.ONE);break;case x$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case g$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:T0("WebGLState: Invalid blending: ",S);break}else switch(S){case U7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case I9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case x$:T0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g$:T0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:T0("WebGLState: Invalid blending: ",S);break}B=null,z=null,I=null,P=null,D.set(0,0,0),C=0,O=S,x=Z8}return}if(k0=k0||Z0,t=t||n,_0=_0||J0,Z0!==M||k0!==A)J.blendEquationSeparate(X8[Z0],X8[k0]),M=Z0,A=k0;if(n!==B||J0!==z||t!==I||_0!==P)J.blendFuncSeparate(K8[n],K8[J0],K8[t],K8[_0]),B=n,z=J0,I=t,P=_0;if(f0.equals(D)===!1||z8!==C)J.blendColor(f0.r,f0.g,f0.b,z8),D.copy(f0),C=z8;O=S,x=!1}function v8(S,Z0){S.side===c8?P0(J.CULL_FACE):q0(J.CULL_FACE);let n=S.side===g8;if(Z0)n=!n;f8(n),S.blending===U7&&S.transparent===!1?g0(XJ):g0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),X.setFunc(S.depthFunc),X.setTest(S.depthTest),X.setMask(S.depthWrite),Y.setMask(S.colorWrite);let J0=S.stencilWrite;if(K.setTest(J0),J0)K.setMask(S.stencilWriteMask),K.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),K.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);l8(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?q0(J.SAMPLE_ALPHA_TO_COVERAGE):P0(J.SAMPLE_ALPHA_TO_COVERAGE)}function f8(S){if(w!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);w=S}}function B8(S){if(S!==zY){if(q0(J.CULL_FACE),S!==l)if(S===h$)J.cullFace(J.BACK);else if(S===_Y)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else P0(J.CULL_FACE);l=S}function j(S){if(S!==c){if(m)J.lineWidth(S);c=S}}function l8(S,Z0,n){if(S){if(q0(J.POLYGON_OFFSET_FILL),y!==Z0||u!==n){if(y=Z0,u=n,X.getReversed())Z0=-Z0;J.polygonOffset(Z0,n)}}else P0(J.POLYGON_OFFSET_FILL)}function i0(S){if(S)q0(J.SCISSOR_TEST);else P0(J.SCISSOR_TEST)}function a0(S){if(S===void 0)S=J.TEXTURE0+g-1;if(N0!==S)J.activeTexture(S),N0=S}function U0(S,Z0,n){if(n===void 0)if(N0===null)n=J.TEXTURE0+g-1;else n=N0;let J0=I0[n];if(J0===void 0)J0={type:void 0,texture:void 0},I0[n]=J0;if(J0.type!==S||J0.texture!==Z0){if(N0!==n)J.activeTexture(n),N0=n;J.bindTexture(S,Z0||z0[S]),J0.type=S,J0.texture=Z0}}function F8(){let S=I0[N0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function A0(){try{J.compressedTexImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function _(){try{J.compressedTexImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function k(){try{J.texSubImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function f(){try{J.texSubImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function o(){try{J.compressedTexSubImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function r(){try{J.compressedTexSubImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function e(){try{J.texStorage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function Y0(){try{J.texStorage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function d(){try{J.texImage2D(...arguments)}catch(S){T0("WebGLState:",S)}}function i(){try{J.texImage3D(...arguments)}catch(S){T0("WebGLState:",S)}}function W0(S){if(q[S]!==void 0)return q[S];else return J.getParameter(S)}function R0(S,Z0){if(q[S]!==Z0)J.pixelStorei(S,Z0),q[S]=Z0}function $0(S){if(c0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),c0.copy(S)}function X0(S){if(s.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),s.copy(S)}function S0(S,Z0){let n=U.get(Z0);if(n===void 0)n=new WeakMap,U.set(Z0,n);let J0=n.get(S);if(J0===void 0)J0=J.getUniformBlockIndex(Z0,S.name),n.set(S,J0)}function h0(S,Z0){let J0=U.get(Z0).get(S);if(H.get(Z0)!==J0)J.uniformBlockBinding(Z0,J0,S.__bindingPointIndex),H.set(Z0,J0)}function m0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},q={},N0=null,I0={},E={},F=new WeakMap,R=[],L=null,N=!1,O=null,M=null,B=null,z=null,A=null,I=null,P=null,D=new B0(0,0,0),C=0,x=!1,w=null,l=null,c=null,y=null,u=null,c0.set(0,0,J.canvas.width,J.canvas.height),s.set(0,0,J.canvas.width,J.canvas.height),Y.reset(),X.reset(),K.reset()}return{buffers:{color:Y,depth:X,stencil:K},enable:q0,disable:P0,bindFramebuffer:t0,drawBuffers:l0,useProgram:s0,setBlending:g0,setMaterial:v8,setFlipSided:f8,setCullFace:B8,setLineWidth:j,setPolygonOffset:l8,setScissorTest:i0,activeTexture:a0,bindTexture:U0,unbindTexture:F8,compressedTexImage2D:A0,compressedTexImage3D:_,texImage2D:d,texImage3D:i,pixelStorei:R0,getParameter:W0,updateUBOMapping:S0,uniformBlockBinding:h0,texStorage2D:e,texStorage3D:Y0,texSubImage2D:k,texSubImage3D:f,compressedTexSubImage2D:o,compressedTexSubImage3D:r,scissor:$0,viewport:X0,reset:m0}}function oE(J,Q,$,Z,W,Y,X){let K=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new L0,G=new WeakMap,q=new Set,E,F=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function L(_,k){return R?new OffscreenCanvas(_,k):F6("canvas")}function N(_,k,f){let o=1,r=A0(_);if(r.width>f||r.height>f)o=f/Math.max(r.width,r.height);if(o<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let e=Math.floor(o*r.width),Y0=Math.floor(o*r.height);if(E===void 0)E=L(e,Y0);let d=k?L(e,Y0):E;return d.width=e,d.height=Y0,d.getContext("2d").drawImage(_,0,0,e,Y0),M0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+e+"x"+Y0+")."),d}else{if("data"in _)M0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return _}return _}function O(_){return _.generateMipmaps}function M(_){J.generateMipmap(_)}function B(_){if(_.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(_.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function z(_,k,f,o,r,e=!1){if(_!==null){if(J[_]!==void 0)return J[_];M0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Y0;if(o){if(Y0=Q.get("EXT_texture_norm16"),!Y0)M0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let d=k;if(k===J.RED){if(f===J.FLOAT)d=J.R32F;if(f===J.HALF_FLOAT)d=J.R16F;if(f===J.UNSIGNED_BYTE)d=J.R8;if(f===J.UNSIGNED_SHORT&&Y0)d=Y0.R16_EXT;if(f===J.SHORT&&Y0)d=Y0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)d=J.R8UI;if(f===J.UNSIGNED_SHORT)d=J.R16UI;if(f===J.UNSIGNED_INT)d=J.R32UI;if(f===J.BYTE)d=J.R8I;if(f===J.SHORT)d=J.R16I;if(f===J.INT)d=J.R32I}if(k===J.RG){if(f===J.FLOAT)d=J.RG32F;if(f===J.HALF_FLOAT)d=J.RG16F;if(f===J.UNSIGNED_BYTE)d=J.RG8;if(f===J.UNSIGNED_SHORT&&Y0)d=Y0.RG16_EXT;if(f===J.SHORT&&Y0)d=Y0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)d=J.RG8UI;if(f===J.UNSIGNED_SHORT)d=J.RG16UI;if(f===J.UNSIGNED_INT)d=J.RG32UI;if(f===J.BYTE)d=J.RG8I;if(f===J.SHORT)d=J.RG16I;if(f===J.INT)d=J.RG32I}if(k===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)d=J.RGB8UI;if(f===J.UNSIGNED_SHORT)d=J.RGB16UI;if(f===J.UNSIGNED_INT)d=J.RGB32UI;if(f===J.BYTE)d=J.RGB8I;if(f===J.SHORT)d=J.RGB16I;if(f===J.INT)d=J.RGB32I}if(k===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(f===J.UNSIGNED_INT)d=J.RGBA32UI;if(f===J.BYTE)d=J.RGBA8I;if(f===J.SHORT)d=J.RGBA16I;if(f===J.INT)d=J.RGBA32I}if(k===J.RGB){if(f===J.UNSIGNED_SHORT&&Y0)d=Y0.RGB16_EXT;if(f===J.SHORT&&Y0)d=Y0.RGB16_SNORM_EXT;if(f===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)d=J.R11F_G11F_B10F}if(k===J.RGBA){let i=e?wZ:x0.getTransfer(r);if(f===J.FLOAT)d=J.RGBA32F;if(f===J.HALF_FLOAT)d=J.RGBA16F;if(f===J.UNSIGNED_BYTE)d=i===$8?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT&&Y0)d=Y0.RGBA16_EXT;if(f===J.SHORT&&Y0)d=Y0.RGBA16_SNORM_EXT;if(f===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)Q.get("EXT_color_buffer_float");return d}function A(_,k){let f;if(_){if(k===null||k===E9||k===B6)f=J.DEPTH24_STENCIL8;else if(k===uJ)f=J.DEPTH32F_STENCIL8;else if(k===k7)f=J.DEPTH24_STENCIL8,M0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===E9||k===B6)f=J.DEPTH_COMPONENT24;else if(k===uJ)f=J.DEPTH_COMPONENT32F;else if(k===k7)f=J.DEPTH_COMPONENT16;return f}function I(_,k){if(O(_)===!0||_.isFramebufferTexture&&_.minFilter!==n8&&_.minFilter!==T8)return Math.log2(Math.max(k.width,k.height))+1;else if(_.mipmaps!==void 0&&_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return k.mipmaps.length;else return 1}function P(_){let k=_.target;if(k.removeEventListener("dispose",P),C(k),k.isVideoTexture)G.delete(k);if(k.isHTMLTexture)q.delete(k)}function D(_){let k=_.target;k.removeEventListener("dispose",D),w(k)}function C(_){let k=Z.get(_);if(k.__webglInit===void 0)return;let f=_.source,o=F.get(f);if(o){let r=o[k.__cacheKey];if(r.usedTimes--,r.usedTimes===0)x(_);if(Object.keys(o).length===0)F.delete(f)}Z.remove(_)}function x(_){let k=Z.get(_);J.deleteTexture(k.__webglTexture);let f=_.source,o=F.get(f);delete o[k.__cacheKey],X.memory.textures--}function w(_){let k=Z.get(_);if(_.depthTexture)_.depthTexture.dispose(),Z.remove(_.depthTexture);if(_.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(k.__webglFramebuffer[o]))for(let r=0;r<k.__webglFramebuffer[o].length;r++)J.deleteFramebuffer(k.__webglFramebuffer[o][r]);else J.deleteFramebuffer(k.__webglFramebuffer[o]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[o])}else{if(Array.isArray(k.__webglFramebuffer))for(let o=0;o<k.__webglFramebuffer.length;o++)J.deleteFramebuffer(k.__webglFramebuffer[o]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let o=0;o<k.__webglColorRenderbuffer.length;o++)if(k.__webglColorRenderbuffer[o])J.deleteRenderbuffer(k.__webglColorRenderbuffer[o])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let f=_.textures;for(let o=0,r=f.length;o<r;o++){let e=Z.get(f[o]);if(e.__webglTexture)J.deleteTexture(e.__webglTexture),X.memory.textures--;Z.remove(f[o])}Z.remove(_)}let l=0;function c(){l=0}function y(){return l}function u(_){l=_}function g(){let _=l;if(_>=W.maxTextures)M0("WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+W.maxTextures);return l+=1,_}function m(_){let k=[];return k.push(_.wrapS),k.push(_.wrapT),k.push(_.wrapR||0),k.push(_.magFilter),k.push(_.minFilter),k.push(_.anisotropy),k.push(_.internalFormat),k.push(_.format),k.push(_.type),k.push(_.generateMipmaps),k.push(_.premultiplyAlpha),k.push(_.flipY),k.push(_.unpackAlignment),k.push(_.colorSpace),k.join()}function a(_,k){let f=Z.get(_);if(_.isVideoTexture)U0(_);if(_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&f.__version!==_.version){let o=_.image;if(o===null)M0("WebGLRenderer: Texture marked for update but no image data found.");else if(o.complete===!1)M0("WebGLRenderer: Texture marked for update but image is incomplete");else{P0(f,_,k);return}}else if(_.isExternalTexture)f.__webglTexture=_.sourceTexture?_.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+k)}function Q0(_,k){let f=Z.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&f.__version!==_.version){P0(f,_,k);return}else if(_.isExternalTexture)f.__webglTexture=_.sourceTexture?_.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+k)}function N0(_,k){let f=Z.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&f.__version!==_.version){P0(f,_,k);return}$.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+k)}function I0(_,k){let f=Z.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&f.__version!==_.version){t0(f,_,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+k)}let D0={[G9]:J.REPEAT,[V6]:J.CLAMP_TO_EDGE,[MQ]:J.MIRRORED_REPEAT},J8={[n8]:J.NEAREST,[BQ]:J.NEAREST_MIPMAP_NEAREST,[T9]:J.NEAREST_MIPMAP_LINEAR,[T8]:J.LINEAR,[M6]:J.LINEAR_MIPMAP_NEAREST,[CJ]:J.LINEAR_MIPMAP_LINEAR},c0={[GX]:J.NEVER,[OX]:J.ALWAYS,[EX]:J.LESS,[TQ]:J.LEQUAL,[qX]:J.EQUAL,[SQ]:J.GEQUAL,[NX]:J.GREATER,[FX]:J.NOTEQUAL};function s(_,k){if(k.type===uJ&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===T8||k.magFilter===M6||k.magFilter===T9||k.magFilter===CJ||k.minFilter===T8||k.minFilter===M6||k.minFilter===T9||k.minFilter===CJ))M0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(_,J.TEXTURE_WRAP_S,D0[k.wrapS]),J.texParameteri(_,J.TEXTURE_WRAP_T,D0[k.wrapT]),_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texParameteri(_,J.TEXTURE_WRAP_R,D0[k.wrapR]);if(J.texParameteri(_,J.TEXTURE_MAG_FILTER,J8[k.magFilter]),J.texParameteri(_,J.TEXTURE_MIN_FILTER,J8[k.minFilter]),k.compareFunction)J.texParameteri(_,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(_,J.TEXTURE_COMPARE_FUNC,c0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===n8)return;if(k.minFilter!==T9&&k.minFilter!==CJ)return;if(k.type===uJ&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(_,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,W.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function E0(_,k){let f=!1;if(_.__webglInit===void 0)_.__webglInit=!0,k.addEventListener("dispose",P);let o=k.source,r=F.get(o);if(r===void 0)r={},F.set(o,r);let e=m(k);if(e!==_.__cacheKey){if(r[e]===void 0)r[e]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,f=!0;r[e].usedTimes++;let Y0=r[_.__cacheKey];if(Y0!==void 0){if(r[_.__cacheKey].usedTimes--,Y0.usedTimes===0)x(k)}_.__cacheKey=e,_.__webglTexture=r[e].texture}return f}function z0(_,k,f){return Math.floor(Math.floor(_/f)/k)}function q0(_,k,f,o){let e=_.updateRanges;if(e.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,f,o,k.data);else{e.sort((R0,$0)=>R0.start-$0.start);let Y0=0;for(let R0=1;R0<e.length;R0++){let $0=e[Y0],X0=e[R0],S0=$0.start+$0.count,h0=z0(X0.start,k.width,4),m0=z0($0.start,k.width,4);if(X0.start<=S0+1&&h0===m0&&z0(X0.start+X0.count-1,k.width,4)===h0)$0.count=Math.max($0.count,X0.start+X0.count-$0.start);else++Y0,e[Y0]=X0}e.length=Y0+1;let d=$.getParameter(J.UNPACK_ROW_LENGTH),i=$.getParameter(J.UNPACK_SKIP_PIXELS),W0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let R0=0,$0=e.length;R0<$0;R0++){let X0=e[R0],S0=Math.floor(X0.start/4),h0=Math.ceil(X0.count/4),m0=S0%k.width,S=Math.floor(S0/k.width),Z0=h0,n=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,m0),$.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,m0,S,Z0,1,f,o,k.data)}_.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,d),$.pixelStorei(J.UNPACK_SKIP_PIXELS,i),$.pixelStorei(J.UNPACK_SKIP_ROWS,W0)}}function P0(_,k,f){let o=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)o=J.TEXTURE_3D;let r=E0(_,k),e=k.source;$.bindTexture(o,_.__webglTexture,J.TEXTURE0+f);let Y0=Z.get(e);if(e.version!==Y0.__version||r===!0){if($.activeTexture(J.TEXTURE0+f),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let n=x0.getPrimaries(x0.workingColorSpace),J0=k.colorSpace===y9?null:x0.getPrimaries(k.colorSpace),k0=k.colorSpace===y9||n===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,k0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let i=N(k.image,!1,W.maxTextureSize);i=F8(k,i);let W0=Y.convert(k.format,k.colorSpace),R0=Y.convert(k.type),$0=z(k.internalFormat,W0,R0,k.normalized,k.colorSpace,k.isVideoTexture);s(o,k);let X0,S0=k.mipmaps,h0=k.isVideoTexture!==!0,m0=Y0.__version===void 0||r===!0,S=e.dataReady,Z0=I(k,i);if(k.isDepthTexture){if($0=A(k.format===j9,k.type),m0)if(h0)$.texStorage2D(J.TEXTURE_2D,1,$0,i.width,i.height);else $.texImage2D(J.TEXTURE_2D,0,$0,i.width,i.height,0,W0,R0,null)}else if(k.isDataTexture)if(S0.length>0){if(h0&&m0)$.texStorage2D(J.TEXTURE_2D,Z0,$0,S0[0].width,S0[0].height);for(let n=0,J0=S0.length;n<J0;n++)if(X0=S0[n],h0){if(S)$.texSubImage2D(J.TEXTURE_2D,n,0,0,X0.width,X0.height,W0,R0,X0.data)}else $.texImage2D(J.TEXTURE_2D,n,$0,X0.width,X0.height,0,W0,R0,X0.data);k.generateMipmaps=!1}else if(h0){if(m0)$.texStorage2D(J.TEXTURE_2D,Z0,$0,i.width,i.height);if(S)q0(k,i,W0,R0)}else $.texImage2D(J.TEXTURE_2D,0,$0,i.width,i.height,0,W0,R0,i.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(h0&&m0)$.texStorage3D(J.TEXTURE_2D_ARRAY,Z0,$0,S0[0].width,S0[0].height,i.depth);for(let n=0,J0=S0.length;n<J0;n++)if(X0=S0[n],k.format!==wJ)if(W0!==null)if(h0){if(S)if(k.layerUpdates.size>0){let k0=oZ(X0.width,X0.height,k.format,k.type);for(let t of k.layerUpdates){let _0=X0.data.subarray(t*k0/X0.data.BYTES_PER_ELEMENT,(t+1)*k0/X0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,t,X0.width,X0.height,1,W0,_0)}k.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,X0.width,X0.height,i.depth,W0,X0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,n,$0,X0.width,X0.height,i.depth,0,X0.data,0,0);else M0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(S)$.texSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,X0.width,X0.height,i.depth,W0,R0,X0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,n,$0,X0.width,X0.height,i.depth,0,W0,R0,X0.data)}else{if(h0&&m0)$.texStorage2D(J.TEXTURE_2D,Z0,$0,S0[0].width,S0[0].height);for(let n=0,J0=S0.length;n<J0;n++)if(X0=S0[n],k.format!==wJ)if(W0!==null)if(h0){if(S)$.compressedTexSubImage2D(J.TEXTURE_2D,n,0,0,X0.width,X0.height,W0,X0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,n,$0,X0.width,X0.height,0,X0.data);else M0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(S)$.texSubImage2D(J.TEXTURE_2D,n,0,0,X0.width,X0.height,W0,R0,X0.data)}else $.texImage2D(J.TEXTURE_2D,n,$0,X0.width,X0.height,0,W0,R0,X0.data)}else if(k.isDataArrayTexture)if(h0){if(m0)$.texStorage3D(J.TEXTURE_2D_ARRAY,Z0,$0,i.width,i.height,i.depth);if(S)if(k.layerUpdates.size>0){let n=oZ(i.width,i.height,k.format,k.type);for(let J0 of k.layerUpdates){let k0=i.data.subarray(J0*n/i.data.BYTES_PER_ELEMENT,(J0+1)*n/i.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,J0,i.width,i.height,1,W0,R0,k0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,i.width,i.height,i.depth,W0,R0,i.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,$0,i.width,i.height,i.depth,0,W0,R0,i.data);else if(k.isData3DTexture)if(h0){if(m0)$.texStorage3D(J.TEXTURE_3D,Z0,$0,i.width,i.height,i.depth);if(S)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,i.width,i.height,i.depth,W0,R0,i.data)}else $.texImage3D(J.TEXTURE_3D,0,$0,i.width,i.height,i.depth,0,W0,R0,i.data);else if(k.isFramebufferTexture){if(m0)if(h0)$.texStorage2D(J.TEXTURE_2D,Z0,$0,i.width,i.height);else{let{width:n,height:J0}=i;for(let k0=0;k0<Z0;k0++)$.texImage2D(J.TEXTURE_2D,k0,$0,n,J0,0,W0,R0,null),n>>=1,J0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let n=J.canvas;if(!n.hasAttribute("layoutsubtree"))n.setAttribute("layoutsubtree","true");if(i.parentNode!==n){n.appendChild(i),q.add(k),n.onpaint=(f0)=>{let z8=f0.changedElements;for(let Z8 of q)if(z8.includes(Z8.image))Z8.needsUpdate=!0},n.requestPaint();return}let J0=0,k0=J.RGBA,t=J.RGBA,_0=J.UNSIGNED_BYTE;J.texElementImage2D(J.TEXTURE_2D,J0,k0,t,_0,i),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(S0.length>0){if(h0&&m0){let n=A0(S0[0]);$.texStorage2D(J.TEXTURE_2D,Z0,$0,n.width,n.height)}for(let n=0,J0=S0.length;n<J0;n++)if(X0=S0[n],h0){if(S)$.texSubImage2D(J.TEXTURE_2D,n,0,0,W0,R0,X0)}else $.texImage2D(J.TEXTURE_2D,n,$0,W0,R0,X0);k.generateMipmaps=!1}else if(h0){if(m0){let n=A0(i);$.texStorage2D(J.TEXTURE_2D,Z0,$0,n.width,n.height)}if(S)$.texSubImage2D(J.TEXTURE_2D,0,0,0,W0,R0,i)}else $.texImage2D(J.TEXTURE_2D,0,$0,W0,R0,i);if(O(k))M(o);if(Y0.__version=e.version,k.onUpdate)k.onUpdate(k)}_.__version=k.version}function t0(_,k,f){if(k.image.length!==6)return;let o=E0(_,k),r=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+f);let e=Z.get(r);if(r.version!==e.__version||o===!0){$.activeTexture(J.TEXTURE0+f);let Y0=x0.getPrimaries(x0.workingColorSpace),d=k.colorSpace===y9?null:x0.getPrimaries(k.colorSpace),i=k.colorSpace===y9||Y0===d?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,i);let W0=k.isCompressedTexture||k.image[0].isCompressedTexture,R0=k.image[0]&&k.image[0].isDataTexture,$0=[];for(let t=0;t<6;t++){if(!W0&&!R0)$0[t]=N(k.image[t],!0,W.maxCubemapSize);else $0[t]=R0?k.image[t].image:k.image[t];$0[t]=F8(k,$0[t])}let X0=$0[0],S0=Y.convert(k.format,k.colorSpace),h0=Y.convert(k.type),m0=z(k.internalFormat,S0,h0,k.normalized,k.colorSpace),S=k.isVideoTexture!==!0,Z0=e.__version===void 0||o===!0,n=r.dataReady,J0=I(k,X0);s(J.TEXTURE_CUBE_MAP,k);let k0;if(W0){if(S&&Z0)$.texStorage2D(J.TEXTURE_CUBE_MAP,J0,m0,X0.width,X0.height);for(let t=0;t<6;t++){k0=$0[t].mipmaps;for(let _0=0;_0<k0.length;_0++){let f0=k0[_0];if(k.format!==wJ)if(S0!==null)if(S){if(n)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0,0,0,f0.width,f0.height,S0,f0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0,m0,f0.width,f0.height,0,f0.data);else M0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0,0,0,f0.width,f0.height,S0,h0,f0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0,m0,f0.width,f0.height,0,S0,h0,f0.data)}}}else{if(k0=k.mipmaps,S&&Z0){if(k0.length>0)J0++;let t=A0($0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,J0,m0,t.width,t.height)}for(let t=0;t<6;t++)if(R0){if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,$0[t].width,$0[t].height,S0,h0,$0[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,m0,$0[t].width,$0[t].height,0,S0,h0,$0[t].data);for(let _0=0;_0<k0.length;_0++){let z8=k0[_0].image[t].image;if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0+1,0,0,z8.width,z8.height,S0,h0,z8.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0+1,m0,z8.width,z8.height,0,S0,h0,z8.data)}}else{if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,S0,h0,$0[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,m0,S0,h0,$0[t]);for(let _0=0;_0<k0.length;_0++){let f0=k0[_0];if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0+1,0,0,S0,h0,f0.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,_0+1,m0,S0,h0,f0.image[t])}}}if(O(k))M(J.TEXTURE_CUBE_MAP);if(e.__version=r.version,k.onUpdate)k.onUpdate(k)}_.__version=k.version}function l0(_,k,f,o,r,e){let Y0=Y.convert(f.format,f.colorSpace),d=Y.convert(f.type),i=z(f.internalFormat,Y0,d,f.normalized,f.colorSpace),W0=Z.get(k),R0=Z.get(f);if(R0.__renderTarget=k,!W0.__hasExternalTextures){let $0=Math.max(1,k.width>>e),X0=Math.max(1,k.height>>e);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,e,i,$0,X0,k.depth,0,Y0,d,null);else $.texImage2D(r,e,i,$0,X0,0,Y0,d,null)}if($.bindFramebuffer(J.FRAMEBUFFER,_),a0(k))K.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,r,R0.__webglTexture,0,i0(k));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,r,R0.__webglTexture,e);$.bindFramebuffer(J.FRAMEBUFFER,null)}function s0(_,k,f){if(J.bindRenderbuffer(J.RENDERBUFFER,_),k.depthBuffer){let o=k.depthTexture,r=o&&o.isDepthTexture?o.type:null,e=A(k.stencilBuffer,r),Y0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(a0(k))K.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,i0(k),e,k.width,k.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,i0(k),e,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,e,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,_)}else{let o=k.textures;for(let r=0;r<o.length;r++){let e=o[r],Y0=Y.convert(e.format,e.colorSpace),d=Y.convert(e.type),i=z(e.internalFormat,Y0,d,e.normalized,e.colorSpace);if(a0(k))K.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,i0(k),i,k.width,k.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,i0(k),i,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,i,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function X8(_,k,f){let o=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,_),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let r=Z.get(k.depthTexture);if(r.__renderTarget=k,!r.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(o){if(r.__webglInit===void 0)r.__webglInit=!0,k.depthTexture.addEventListener("dispose",P);if(r.__webglTexture===void 0){r.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),s(J.TEXTURE_CUBE_MAP,k.depthTexture);let W0=Y.convert(k.depthTexture.format),R0=Y.convert(k.depthTexture.type),$0;if(k.depthTexture.format===S9)$0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===j9)$0=J.DEPTH24_STENCIL8;for(let X0=0;X0<6;X0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,$0,k.width,k.height,0,W0,R0,null)}}else a(k.depthTexture,0);let e=r.__webglTexture,Y0=i0(k),d=o?J.TEXTURE_CUBE_MAP_POSITIVE_X+f:J.TEXTURE_2D,i=k.depthTexture.format===j9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===S9)if(a0(k))K.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,d,e,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,i,d,e,0);else if(k.depthTexture.format===j9)if(a0(k))K.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,d,e,0,Y0);else J.framebufferTexture2D(J.FRAMEBUFFER,i,d,e,0);else throw Error("Unknown depthTexture format")}function K8(_){let k=Z.get(_),f=_.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==_.depthTexture){let o=_.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(o){let r=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,o.removeEventListener("dispose",r)};o.addEventListener("dispose",r),k.__depthDisposeCallback=r}k.__boundDepthTexture=o}if(_.depthTexture&&!k.__autoAllocateDepthBuffer)if(f)for(let o=0;o<6;o++)X8(k.__webglFramebuffer[o],_,o);else{let o=_.texture.mipmaps;if(o&&o.length>0)X8(k.__webglFramebuffer[0],_,0);else X8(k.__webglFramebuffer,_,0)}else if(f){k.__webglDepthbuffer=[];for(let o=0;o<6;o++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[o]),k.__webglDepthbuffer[o]===void 0)k.__webglDepthbuffer[o]=J.createRenderbuffer(),s0(k.__webglDepthbuffer[o],_,!1);else{let r=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=k.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}else{let o=_.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),s0(k.__webglDepthbuffer,_,!1);else{let r=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(_,k,f){let o=Z.get(_);if(k!==void 0)l0(o.__webglFramebuffer,_,_.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)K8(_)}function v8(_){let k=_.texture,f=Z.get(_),o=Z.get(k);_.addEventListener("dispose",D);let r=_.textures,e=_.isWebGLCubeRenderTarget===!0,Y0=r.length>1;if(!Y0){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=k.version,X.memory.textures++}if(e){f.__webglFramebuffer=[];for(let d=0;d<6;d++)if(k.mipmaps&&k.mipmaps.length>0){f.__webglFramebuffer[d]=[];for(let i=0;i<k.mipmaps.length;i++)f.__webglFramebuffer[d][i]=J.createFramebuffer()}else f.__webglFramebuffer[d]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){f.__webglFramebuffer=[];for(let d=0;d<k.mipmaps.length;d++)f.__webglFramebuffer[d]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(Y0)for(let d=0,i=r.length;d<i;d++){let W0=Z.get(r[d]);if(W0.__webglTexture===void 0)W0.__webglTexture=J.createTexture(),X.memory.textures++}if(_.samples>0&&a0(_)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let d=0;d<r.length;d++){let i=r[d];f.__webglColorRenderbuffer[d]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[d]);let W0=Y.convert(i.format,i.colorSpace),R0=Y.convert(i.type),$0=z(i.internalFormat,W0,R0,i.normalized,i.colorSpace,_.isXRRenderTarget===!0),X0=i0(_);J.renderbufferStorageMultisample(J.RENDERBUFFER,X0,$0,_.width,_.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+d,J.RENDERBUFFER,f.__webglColorRenderbuffer[d])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),_.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),s0(f.__webglDepthRenderbuffer,_,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(e){$.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),s(J.TEXTURE_CUBE_MAP,k);for(let d=0;d<6;d++)if(k.mipmaps&&k.mipmaps.length>0)for(let i=0;i<k.mipmaps.length;i++)l0(f.__webglFramebuffer[d][i],_,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,i);else l0(f.__webglFramebuffer[d],_,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,0);if(O(k))M(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(Y0){for(let d=0,i=r.length;d<i;d++){let W0=r[d],R0=Z.get(W0),$0=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)$0=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture($0,R0.__webglTexture),s($0,W0),l0(f.__webglFramebuffer,_,W0,J.COLOR_ATTACHMENT0+d,$0,0),O(W0))M($0)}$.unbindTexture()}else{let d=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)d=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(d,o.__webglTexture),s(d,k),k.mipmaps&&k.mipmaps.length>0)for(let i=0;i<k.mipmaps.length;i++)l0(f.__webglFramebuffer[i],_,k,J.COLOR_ATTACHMENT0,d,i);else l0(f.__webglFramebuffer,_,k,J.COLOR_ATTACHMENT0,d,0);if(O(k))M(d);$.unbindTexture()}if(_.depthBuffer)K8(_)}function f8(_){let k=_.textures;for(let f=0,o=k.length;f<o;f++){let r=k[f];if(O(r)){let e=B(_),Y0=Z.get(r).__webglTexture;$.bindTexture(e,Y0),M(e),$.unbindTexture()}}}let B8=[],j=[];function l8(_){if(_.samples>0){if(a0(_)===!1){let{textures:k,width:f,height:o}=_,r=J.COLOR_BUFFER_BIT,e=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=Z.get(_),d=k.length>1;if(d)for(let W0=0;W0<k.length;W0++)$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer);let i=_.texture.mipmaps;if(i&&i.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglFramebuffer);for(let W0=0;W0<k.length;W0++){if(_.resolveDepthBuffer){if(_.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(d){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[W0]);let R0=Z.get(k[W0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,R0,0)}if(J.blitFramebuffer(0,0,f,o,0,0,f,o,r,J.NEAREST),H===!0){if(B8.length=0,j.length=0,B8.push(J.COLOR_ATTACHMENT0+W0),_.depthBuffer&&_.resolveDepthBuffer===!1)B8.push(e),j.push(e),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,j);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,B8)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),d)for(let W0=0;W0<k.length;W0++){$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.RENDERBUFFER,Y0.__webglColorRenderbuffer[W0]);let R0=Z.get(k[W0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,Y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+W0,J.TEXTURE_2D,R0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,Y0.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&H){let k=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function i0(_){return Math.min(W.maxSamples,_.samples)}function a0(_){let k=Z.get(_);return _.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function U0(_){let k=X.render.frame;if(G.get(_)!==k)G.set(_,k),_.update()}function F8(_,k){let{colorSpace:f,format:o,type:r}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return k;if(f!==JJ&&f!==y9)if(x0.getTransfer(f)===$8){if(o!==wJ||r!==DJ)M0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else T0("WebGLTextures: Unsupported texture color space:",f);return k}function A0(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)U.width=_.naturalWidth||_.width,U.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)U.width=_.displayWidth,U.height=_.displayHeight;else U.width=_.width,U.height=_.height;return U}this.allocateTextureUnit=g,this.resetTextureUnits=c,this.getTextureUnits=y,this.setTextureUnits=u,this.setTexture2D=a,this.setTexture2DArray=Q0,this.setTexture3D=N0,this.setTextureCube=I0,this.rebindTextures=g0,this.setupRenderTarget=v8,this.updateRenderTargetMipmap=f8,this.updateMultisampleRenderTarget=l8,this.setupDepthRenderbuffer=K8,this.setupFrameBufferTexture=l0,this.useMultisampledRTT=a0,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function aE(J,Q){function $(Z,W=y9){let Y,X=x0.getTransfer(W);if(Z===DJ)return J.UNSIGNED_BYTE;if(Z===m$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===u$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===WX)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===YX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===$X)return J.BYTE;if(Z===ZX)return J.SHORT;if(Z===k7)return J.UNSIGNED_SHORT;if(Z===l$)return J.INT;if(Z===E9)return J.UNSIGNED_INT;if(Z===uJ)return J.FLOAT;if(Z===u8)return J.HALF_FLOAT;if(Z===XX)return J.ALPHA;if(Z===KX)return J.RGB;if(Z===wJ)return J.RGBA;if(Z===S9)return J.DEPTH_COMPONENT;if(Z===j9)return J.DEPTH_STENCIL;if(Z===HX)return J.RED;if(Z===d$)return J.RED_INTEGER;if(Z===v9)return J.RG;if(Z===c$)return J.RG_INTEGER;if(Z===n$)return J.RGBA_INTEGER;if(Z===zQ||Z===_Q||Z===CQ||Z===wQ)if(X===$8)if(Y=Q.get("WEBGL_compressed_texture_s3tc_srgb"),Y!==null){if(Z===zQ)return Y.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===_Q)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===CQ)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===wQ)return Y.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Y=Q.get("WEBGL_compressed_texture_s3tc"),Y!==null){if(Z===zQ)return Y.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===_Q)return Y.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===CQ)return Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===wQ)return Y.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===s$||Z===i$||Z===o$||Z===a$)if(Y=Q.get("WEBGL_compressed_texture_pvrtc"),Y!==null){if(Z===s$)return Y.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===i$)return Y.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===o$)return Y.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===a$)return Y.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===r$||Z===t$||Z===e$||Z===JZ||Z===QZ||Z===IQ||Z===$Z)if(Y=Q.get("WEBGL_compressed_texture_etc"),Y!==null){if(Z===r$||Z===t$)return X===$8?Y.COMPRESSED_SRGB8_ETC2:Y.COMPRESSED_RGB8_ETC2;if(Z===e$)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Y.COMPRESSED_RGBA8_ETC2_EAC;if(Z===JZ)return Y.COMPRESSED_R11_EAC;if(Z===QZ)return Y.COMPRESSED_SIGNED_R11_EAC;if(Z===IQ)return Y.COMPRESSED_RG11_EAC;if(Z===$Z)return Y.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===ZZ||Z===WZ||Z===YZ||Z===XZ||Z===KZ||Z===HZ||Z===UZ||Z===GZ||Z===EZ||Z===qZ||Z===NZ||Z===FZ||Z===OZ||Z===RZ)if(Y=Q.get("WEBGL_compressed_texture_astc"),Y!==null){if(Z===ZZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Y.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===WZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Y.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===YZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Y.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===XZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Y.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===KZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Y.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===HZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Y.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===UZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Y.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===GZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Y.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===EZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Y.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===qZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Y.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===NZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Y.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===FZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Y.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===OZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Y.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===RZ)return X===$8?Y.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Y.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===kZ||Z===LZ||Z===DZ)if(Y=Q.get("EXT_texture_compression_bptc"),Y!==null){if(Z===kZ)return X===$8?Y.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Y.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===LZ)return Y.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===DZ)return Y.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===VZ||Z===MZ||Z===PQ||Z===BZ)if(Y=Q.get("EXT_texture_compression_rgtc"),Y!==null){if(Z===VZ)return Y.COMPRESSED_RED_RGTC1_EXT;if(Z===MZ)return Y.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===PQ)return Y.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===BZ)return Y.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===B6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
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

}`;class HK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new mQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new C8({vertexShader:rE,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new y0(new h9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UK extends dJ{constructor(J,Q){super();let $=this,Z=null,W=1,Y=null,X="local-floor",K=1,H=null,U=null,G=null,q=null,E=null,F=null,R=typeof XRWebGLBinding<"u",L=new HK,N={},O=Q.getContextAttributes(),M=null,B=null,z=[],A=[],I=new L0,P=null,D=new w8;D.viewport=new Y8;let C=new w8;C.viewport=new Y8;let x=[D,C],w=new cZ,l=null,c=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let E0=z[s];if(E0===void 0)E0=new V7,z[s]=E0;return E0.getTargetRaySpace()},this.getControllerGrip=function(s){let E0=z[s];if(E0===void 0)E0=new V7,z[s]=E0;return E0.getGripSpace()},this.getHand=function(s){let E0=z[s];if(E0===void 0)E0=new V7,z[s]=E0;return E0.getHandSpace()};function y(s){let E0=A.indexOf(s.inputSource);if(E0===-1)return;let z0=z[E0];if(z0!==void 0)z0.update(s.inputSource,s.frame,H||Y),z0.dispatchEvent({type:s.type,data:s.inputSource})}function u(){Z.removeEventListener("select",y),Z.removeEventListener("selectstart",y),Z.removeEventListener("selectend",y),Z.removeEventListener("squeeze",y),Z.removeEventListener("squeezestart",y),Z.removeEventListener("squeezeend",y),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",g);for(let s=0;s<z.length;s++){let E0=A[s];if(E0===null)continue;A[s]=null,z[s].disconnect(E0)}l=null,c=null,L.reset();for(let s in N)delete N[s];J.setRenderTarget(M),E=null,q=null,G=null,Z=null,B=null,c0.stop(),$.isPresenting=!1,J.setPixelRatio(P),J.setSize(I.width,I.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,$.isPresenting===!0)M0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(X=s,$.isPresenting===!0)M0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||Y},this.setReferenceSpace=function(s){H=s},this.getBaseLayer=function(){return q!==null?q:E},this.getBinding=function(){if(G===null&&R)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(M=J.getRenderTarget(),Z.addEventListener("select",y),Z.addEventListener("selectstart",y),Z.addEventListener("selectend",y),Z.addEventListener("squeeze",y),Z.addEventListener("squeezestart",y),Z.addEventListener("squeezeend",y),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",g),O.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(I),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let z0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};E=new XRWebGLLayer(Z,Q,z0),Z.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),B=new S8(E.framebufferWidth,E.framebufferHeight,{format:wJ,type:DJ,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{let z0=null,q0=null,P0=null;if(O.depth)P0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,z0=O.stencil?j9:S9,q0=O.stencil?B6:E9;let t0={colorFormat:Q.RGBA8,depthFormat:P0,scaleFactor:W};G=this.getBinding(),q=G.createProjectionLayer(t0),Z.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),B=new S8(q.textureWidth,q.textureHeight,{format:wJ,type:DJ,depthTexture:new q9(q.textureWidth,q.textureHeight,q0,void 0,void 0,void 0,void 0,void 0,void 0,z0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(K),H=null,Y=await Z.requestReferenceSpace(X),c0.setContext(Z),c0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function g(s){for(let E0=0;E0<s.removed.length;E0++){let z0=s.removed[E0],q0=A.indexOf(z0);if(q0>=0)A[q0]=null,z[q0].disconnect(z0)}for(let E0=0;E0<s.added.length;E0++){let z0=s.added[E0],q0=A.indexOf(z0);if(q0===-1){for(let t0=0;t0<z.length;t0++)if(t0>=A.length){A.push(z0),q0=t0;break}else if(A[t0]===null){A[t0]=z0,q0=t0;break}if(q0===-1)break}let P0=z[q0];if(P0)P0.connect(z0)}}let m=new T,a=new T;function Q0(s,E0,z0){m.setFromMatrixPosition(E0.matrixWorld),a.setFromMatrixPosition(z0.matrixWorld);let q0=m.distanceTo(a),P0=E0.projectionMatrix.elements,t0=z0.projectionMatrix.elements,l0=P0[14]/(P0[10]-1),s0=P0[14]/(P0[10]+1),X8=(P0[9]+1)/P0[5],K8=(P0[9]-1)/P0[5],g0=(P0[8]-1)/P0[0],v8=(t0[8]+1)/t0[0],f8=l0*g0,B8=l0*v8,j=q0/(-g0+v8),l8=j*-g0;if(E0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(l8),s.translateZ(j),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),P0[10]===-1)s.projectionMatrix.copy(E0.projectionMatrix),s.projectionMatrixInverse.copy(E0.projectionMatrixInverse);else{let i0=l0+j,a0=s0+j,U0=f8-l8,F8=B8+(q0-l8),A0=X8*s0/a0*i0,_=K8*s0/a0*i0;s.projectionMatrix.makePerspective(U0,F8,A0,_,i0,a0),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function N0(s,E0){if(E0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(E0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:E0,far:z0}=s;if(L.texture!==null){if(L.depthNear>0)E0=L.depthNear;if(L.depthFar>0)z0=L.depthFar}if(w.near=C.near=D.near=E0,w.far=C.far=D.far=z0,l!==w.near||c!==w.far)Z.updateRenderState({depthNear:w.near,depthFar:w.far}),l=w.near,c=w.far;w.layers.mask=s.layers.mask|6,D.layers.mask=w.layers.mask&-5,C.layers.mask=w.layers.mask&-3;let q0=s.parent,P0=w.cameras;N0(w,q0);for(let t0=0;t0<P0.length;t0++)N0(P0[t0],q0);if(P0.length===2)Q0(w,D,C);else w.projectionMatrix.copy(D.projectionMatrix);I0(s,w,q0)};function I0(s,E0,z0){if(z0===null)s.matrix.copy(E0.matrixWorld);else s.matrix.copy(z0.matrixWorld),s.matrix.invert(),s.matrix.multiply(E0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(E0.projectionMatrix),s.projectionMatrixInverse.copy(E0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=_9*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return w},this.getFoveation=function(){if(q===null&&E===null)return;return K},this.setFoveation=function(s){if(K=s,q!==null)q.fixedFoveation=s;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=s},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(w)},this.getCameraTexture=function(s){return N[s]};let D0=null;function J8(s,E0){if(U=E0.getViewerPose(H||Y),F=E0,U!==null){let z0=U.views;if(E!==null)J.setRenderTargetFramebuffer(B,E.framebuffer),J.setRenderTarget(B);let q0=!1;if(z0.length!==w.cameras.length)w.cameras.length=0,q0=!0;for(let s0=0;s0<z0.length;s0++){let X8=z0[s0],K8=null;if(E!==null)K8=E.getViewport(X8);else{let v8=G.getViewSubImage(q,X8);if(K8=v8.viewport,s0===0)J.setRenderTargetTextures(B,v8.colorTexture,v8.depthStencilTexture),J.setRenderTarget(B)}let g0=x[s0];if(g0===void 0)g0=new w8,g0.layers.enable(s0),g0.viewport=new Y8,x[s0]=g0;if(g0.matrix.fromArray(X8.transform.matrix),g0.matrix.decompose(g0.position,g0.quaternion,g0.scale),g0.projectionMatrix.fromArray(X8.projectionMatrix),g0.projectionMatrixInverse.copy(g0.projectionMatrix).invert(),g0.viewport.set(K8.x,K8.y,K8.width,K8.height),s0===0)w.matrix.copy(g0.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale);if(q0===!0)w.cameras.push(g0)}let P0=Z.enabledFeatures;if(P0&&P0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){G=$.getBinding();let s0=G.getDepthInformation(z0[0]);if(s0&&s0.isValid&&s0.texture)L.init(s0,Z.renderState)}if(P0&&P0.includes("camera-access")&&R){J.state.unbindTexture(),G=$.getBinding();for(let s0=0;s0<z0.length;s0++){let X8=z0[s0].camera;if(X8){let K8=N[X8];if(!K8)K8=new mQ,N[X8]=K8;let g0=G.getCameraImage(X8);K8.sourceTexture=g0}}}}for(let z0=0;z0<z.length;z0++){let q0=A[z0],P0=z[z0];if(q0!==null&&P0!==void 0)P0.update(q0,E0,H||Y)}if(D0)D0(s,E0);if(E0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:E0});F=null}let c0=new rX;c0.setAnimationLoop(J8),this.setAnimationLoop=function(s){D0=s},this.dispose=function(){}}}var eE=new v0,GK=new j0;GK.set(-1,0,0,0,1,0,0,0,1);function Jq(J,Q){function $(N,O){if(N.matrixAutoUpdate===!0)N.updateMatrix();O.value.copy(N.matrix)}function Z(N,O){if(O.color.getRGB(N.fogColor.value,yZ(J)),O.isFog)N.fogNear.value=O.near,N.fogFar.value=O.far;else if(O.isFogExp2)N.fogDensity.value=O.density}function W(N,O,M,B,z){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)Y(N,O);else if(O.isMeshLambertMaterial){if(Y(N,O),O.envMap)N.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)Y(N,O),q(N,O);else if(O.isMeshPhongMaterial){if(Y(N,O),G(N,O),O.envMap)N.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(Y(N,O),E(N,O),O.isMeshPhysicalMaterial)F(N,O,z)}else if(O.isMeshMatcapMaterial)Y(N,O),R(N,O);else if(O.isMeshDepthMaterial)Y(N,O);else if(O.isMeshDistanceMaterial)Y(N,O),L(N,O);else if(O.isMeshNormalMaterial)Y(N,O);else if(O.isLineBasicMaterial){if(X(N,O),O.isLineDashedMaterial)K(N,O)}else if(O.isPointsMaterial)H(N,O,M,B);else if(O.isSpriteMaterial)U(N,O);else if(O.isShadowMaterial)N.color.value.copy(O.color),N.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function Y(N,O){if(N.opacity.value=O.opacity,O.color)N.diffuse.value.copy(O.color);if(O.emissive)N.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)N.map.value=O.map,$(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,$(O.alphaMap,N.alphaMapTransform);if(O.bumpMap){if(N.bumpMap.value=O.bumpMap,$(O.bumpMap,N.bumpMapTransform),N.bumpScale.value=O.bumpScale,O.side===g8)N.bumpScale.value*=-1}if(O.normalMap){if(N.normalMap.value=O.normalMap,$(O.normalMap,N.normalMapTransform),N.normalScale.value.copy(O.normalScale),O.side===g8)N.normalScale.value.negate()}if(O.displacementMap)N.displacementMap.value=O.displacementMap,$(O.displacementMap,N.displacementMapTransform),N.displacementScale.value=O.displacementScale,N.displacementBias.value=O.displacementBias;if(O.emissiveMap)N.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,N.emissiveMapTransform);if(O.specularMap)N.specularMap.value=O.specularMap,$(O.specularMap,N.specularMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest;let M=Q.get(O),B=M.envMap,z=M.envMapRotation;if(B){if(N.envMap.value=B,N.envMapRotation.value.setFromMatrix4(eE.makeRotationFromEuler(z)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1)N.envMapRotation.value.premultiply(GK);N.reflectivity.value=O.reflectivity,N.ior.value=O.ior,N.refractionRatio.value=O.refractionRatio}if(O.lightMap)N.lightMap.value=O.lightMap,N.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,N.lightMapTransform);if(O.aoMap)N.aoMap.value=O.aoMap,N.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,N.aoMapTransform)}function X(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,O.map)N.map.value=O.map,$(O.map,N.mapTransform)}function K(N,O){N.dashSize.value=O.dashSize,N.totalSize.value=O.dashSize+O.gapSize,N.scale.value=O.scale}function H(N,O,M,B){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.size.value=O.size*M,N.scale.value=B*0.5,O.map)N.map.value=O.map,$(O.map,N.uvTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,$(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function U(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.rotation.value=O.rotation,O.map)N.map.value=O.map,$(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,$(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function G(N,O){N.specular.value.copy(O.specular),N.shininess.value=Math.max(O.shininess,0.0001)}function q(N,O){if(O.gradientMap)N.gradientMap.value=O.gradientMap}function E(N,O){if(N.metalness.value=O.metalness,O.metalnessMap)N.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=O.roughness,O.roughnessMap)N.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,N.roughnessMapTransform);if(O.envMap)N.envMapIntensity.value=O.envMapIntensity}function F(N,O,M){if(N.ior.value=O.ior,O.sheen>0){if(N.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),N.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)N.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,N.sheenColorMapTransform);if(O.sheenRoughnessMap)N.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(N.clearcoat.value=O.clearcoat,N.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)N.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,N.clearcoatMapTransform);if(O.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(N.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===g8)N.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)N.dispersion.value=O.dispersion;if(O.iridescence>0){if(N.iridescence.value=O.iridescence,N.iridescenceIOR.value=O.iridescenceIOR,N.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)N.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,N.iridescenceMapTransform);if(O.iridescenceThicknessMap)N.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(O.transmission>0){if(N.transmission.value=O.transmission,N.transmissionSamplerMap.value=M.texture,N.transmissionSamplerSize.value.set(M.width,M.height),O.transmissionMap)N.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=O.thickness,O.thicknessMap)N.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=O.attenuationDistance,N.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(N.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)N.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=O.specularIntensity,N.specularColor.value.copy(O.specularColor),O.specularColorMap)N.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,N.specularColorMapTransform);if(O.specularIntensityMap)N.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,N.specularIntensityMapTransform)}function R(N,O){if(O.matcap)N.matcap.value=O.matcap}function L(N,O){let M=Q.get(O).light;N.referencePosition.value.setFromMatrixPosition(M.matrixWorld),N.nearDistance.value=M.shadow.camera.near,N.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function Qq(J,Q,$,Z){let W={},Y={},X=[],K=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(M,B){let z=B.program;Z.uniformBlockBinding(M,z)}function U(M,B){let z=W[M.id];if(z===void 0)R(M),z=G(M),W[M.id]=z,M.addEventListener("dispose",N);let A=B.program;Z.updateUBOMapping(M,A);let I=Q.render.frame;if(Y[M.id]!==I)E(M),Y[M.id]=I}function G(M){let B=q();M.__bindingPointIndex=B;let z=J.createBuffer(),A=M.__size,I=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,z),J.bufferData(J.UNIFORM_BUFFER,A,I),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,B,z),z}function q(){for(let M=0;M<K;M++)if(X.indexOf(M)===-1)return X.push(M),M;return T0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(M){let B=W[M.id],z=M.uniforms,A=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,B);for(let I=0,P=z.length;I<P;I++){let D=Array.isArray(z[I])?z[I]:[z[I]];for(let C=0,x=D.length;C<x;C++){let w=D[C];if(F(w,I,C,A)===!0){let l=w.__offset,c=Array.isArray(w.value)?w.value:[w.value],y=0;for(let u=0;u<c.length;u++){let g=c[u],m=L(g);if(typeof g==="number"||typeof g==="boolean")w.__data[0]=g,J.bufferSubData(J.UNIFORM_BUFFER,l+y,w.__data);else if(g.isMatrix3)w.__data[0]=g.elements[0],w.__data[1]=g.elements[1],w.__data[2]=g.elements[2],w.__data[3]=0,w.__data[4]=g.elements[3],w.__data[5]=g.elements[4],w.__data[6]=g.elements[5],w.__data[7]=0,w.__data[8]=g.elements[6],w.__data[9]=g.elements[7],w.__data[10]=g.elements[8],w.__data[11]=0;else if(ArrayBuffer.isView(g))w.__data.set(new g.constructor(g.buffer,g.byteOffset,w.__data.length));else g.toArray(w.__data,y),y+=m.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,l,w.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(M,B,z,A){let I=M.value,P=B+"_"+z;if(A[P]===void 0){if(typeof I==="number"||typeof I==="boolean")A[P]=I;else if(ArrayBuffer.isView(I))A[P]=I.slice();else A[P]=I.clone();return!0}else{let D=A[P];if(typeof I==="number"||typeof I==="boolean"){if(D!==I)return A[P]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function R(M){let B=M.uniforms,z=0,A=16;for(let P=0,D=B.length;P<D;P++){let C=Array.isArray(B[P])?B[P]:[B[P]];for(let x=0,w=C.length;x<w;x++){let l=C[x],c=Array.isArray(l.value)?l.value:[l.value];for(let y=0,u=c.length;y<u;y++){let g=c[y],m=L(g),a=z%A,Q0=a%m.boundary,N0=a+Q0;if(z+=Q0,N0!==0&&A-N0<m.storage)z+=A-N0;l.__data=new Float32Array(m.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=z,z+=m.storage}}}let I=z%A;if(I>0)z+=A-I;return M.__size=z,M.__cache={},this}function L(M){let B={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")B.boundary=4,B.storage=4;else if(M.isVector2)B.boundary=8,B.storage=8;else if(M.isVector3||M.isColor)B.boundary=16,B.storage=12;else if(M.isVector4)B.boundary=16,B.storage=16;else if(M.isMatrix3)B.boundary=48,B.storage=48;else if(M.isMatrix4)B.boundary=64,B.storage=64;else if(M.isTexture)M0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))B.boundary=16,B.storage=M.byteLength;else M0("WebGLRenderer: Unsupported uniform value type.",M);return B}function N(M){let B=M.target;B.removeEventListener("dispose",N);let z=X.indexOf(B.__bindingPointIndex);X.splice(z,1),J.deleteBuffer(W[B.id]),delete W[B.id],delete Y[B.id]}function O(){for(let M in W)J.deleteBuffer(W[M]);X=[],W={},Y={}}return{bind:H,update:U,dispose:O}}var $q=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),IJ=null;function Zq(){if(IJ===null)IJ=new z7($q,16,16,v9,u8),IJ.name="DFG_LUT",IJ.minFilter=T8,IJ.magFilter=T8,IJ.wrapS=V6,IJ.wrapT=V6,IJ.generateMipmaps=!1,IJ.needsUpdate=!0;return IJ}class XW{constructor(J={}){let{canvas:Q=RX(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:Y=!1,antialias:X=!1,premultipliedAlpha:K=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:q=!1,outputBufferType:E=DJ}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=Y;let R=E,L=new Set([n$,c$,d$]),N=new Set([DJ,E9,k7,B6,m$,u$]),O=new Uint32Array(4),M=new Int32Array(4),B=new T,z=null,A=null,I=[],P=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=LJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,x=!1,w=null;this._outputColorSpace=s8;let l=0,c=0,y=null,u=-1,g=null,m=new Y8,a=new Y8,Q0=null,N0=new B0(0),I0=0,D0=Q.width,J8=Q.height,c0=1,s=null,E0=null,z0=new Y8(0,0,D0,J8),q0=new Y8(0,0,D0,J8),P0=!1,t0=new C7,l0=!1,s0=!1,X8=new v0,K8=new T,g0=new Y8,v8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},f8=!1;function B8(){return y===null?c0:1}let j=$;function l8(V,v){return Q.getContext(V,v)}try{let V={alpha:!0,depth:Z,stencil:W,antialias:X,premultipliedAlpha:K,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BY}`);if(Q.addEventListener("webglcontextlost",k0,!1),Q.addEventListener("webglcontextrestored",t,!1),Q.addEventListener("webglcontextcreationerror",_0,!1),j===null){if(j=l8("webgl2",V),j===null)if(l8("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(V){throw T0("WebGLRenderer: "+V.message),V}let i0,a0,U0,F8,A0,_,k,f,o,r,e,Y0,d,i,W0,R0,$0,X0,S0,h0,m0,S,Z0;function n(){if(i0=new G1(j),i0.init(),m0=new aE(j,i0),a0=new $1(j,i0,J,m0),U0=new iE(j,i0),a0.reversedDepthBuffer&&q)U0.buffers.depth.setReversed(!0);F8=new N1(j),A0=new yE,_=new oE(j,i0,U0,A0,a0,m0,F8),k=new U1(C),f=new kU(j),S=new J1(j,f),o=new E1(j,f,F8,S),r=new O1(j,o,f,S,F8),X0=new F1(j,a0,_),W0=new Z1(A0),e=new vE(C,k,i0,a0,S,W0),Y0=new Jq(C,A0),d=new bE,i=new mE(i0),$0=new eG(C,k,U0,r,F,K),R0=new sE(C,r,a0),Z0=new Qq(j,F8,a0,U0),S0=new Q1(j,i0,F8),h0=new q1(j,i0,F8),F8.programs=e.programs,C.capabilities=a0,C.extensions=i0,C.properties=A0,C.renderLists=d,C.shadowMap=R0,C.state=U0,C.info=F8}if(n(),R!==DJ)D=new k1(R,Q.width,Q.height,Z,W);let J0=new UK(C,j);this.xr=J0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let V=i0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=i0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return c0},this.setPixelRatio=function(V){if(V===void 0)return;c0=V,this.setSize(D0,J8,!1)},this.getSize=function(V){return V.set(D0,J8)},this.setSize=function(V,v,p=!0){if(J0.isPresenting){M0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(D0=V,J8=v,Q.width=Math.floor(V*c0),Q.height=Math.floor(v*c0),p===!0)Q.style.width=V+"px",Q.style.height=v+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,V,v)},this.getDrawingBufferSize=function(V){return V.set(D0*c0,J8*c0).floor()},this.setDrawingBufferSize=function(V,v,p){D0=V,J8=v,c0=p,Q.width=Math.floor(V*p),Q.height=Math.floor(v*p),this.setViewport(0,0,V,v)},this.setEffects=function(V){if(R===DJ){T0("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let v=0;v<V.length;v++)if(V[v].isOutputPass===!0){M0("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(m)},this.getViewport=function(V){return V.copy(z0)},this.setViewport=function(V,v,p,b){if(V.isVector4)z0.set(V.x,V.y,V.z,V.w);else z0.set(V,v,p,b);U0.viewport(m.copy(z0).multiplyScalar(c0).round())},this.getScissor=function(V){return V.copy(q0)},this.setScissor=function(V,v,p,b){if(V.isVector4)q0.set(V.x,V.y,V.z,V.w);else q0.set(V,v,p,b);U0.scissor(a.copy(q0).multiplyScalar(c0).round())},this.getScissorTest=function(){return P0},this.setScissorTest=function(V){U0.setScissorTest(P0=V)},this.setOpaqueSort=function(V){s=V},this.setTransparentSort=function(V){E0=V},this.getClearColor=function(V){return V.copy($0.getClearColor())},this.setClearColor=function(){$0.setClearColor(...arguments)},this.getClearAlpha=function(){return $0.getClearAlpha()},this.setClearAlpha=function(){$0.setClearAlpha(...arguments)},this.clear=function(V=!0,v=!0,p=!0){let b=0;if(V){let h=!1;if(y!==null){let G0=y.texture.format;h=L.has(G0)}if(h){let G0=y.texture.type,O0=N.has(G0),H0=$0.getClearColor(),V0=$0.getClearAlpha(),C0=H0.r,b0=H0.g,u0=H0.b;if(O0)O[0]=C0,O[1]=b0,O[2]=u0,O[3]=V0,j.clearBufferuiv(j.COLOR,0,O);else M[0]=C0,M[1]=b0,M[2]=u0,M[3]=V0,j.clearBufferiv(j.COLOR,0,M)}else b|=j.COLOR_BUFFER_BIT}if(v)b|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(p)b|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)j.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(V){V.setRenderer(this),w=V},this.dispose=function(){Q.removeEventListener("webglcontextlost",k0,!1),Q.removeEventListener("webglcontextrestored",t,!1),Q.removeEventListener("webglcontextcreationerror",_0,!1),$0.dispose(),d.dispose(),i.dispose(),A0.dispose(),k.dispose(),r.dispose(),S.dispose(),Z0.dispose(),e.dispose(),J0.dispose(),J0.removeEventListener("sessionstart",TW),J0.removeEventListener("sessionend",SW),D9.stop()};function k0(V){V.preventDefault(),H7("WebGLRenderer: Context Lost."),x=!0}function t(){H7("WebGLRenderer: Context Restored."),x=!1;let V=F8.autoReset,v=R0.enabled,p=R0.autoUpdate,b=R0.needsUpdate,h=R0.type;n(),F8.autoReset=V,R0.enabled=v,R0.autoUpdate=p,R0.needsUpdate=b,R0.type=h}function _0(V){T0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function f0(V){let v=V.target;v.removeEventListener("dispose",f0),z8(v)}function z8(V){Z8(V),A0.remove(V)}function Z8(V){let v=A0.get(V).programs;if(v!==void 0){if(v.forEach(function(p){e.releaseProgram(p)}),V.isShaderMaterial)e.releaseShaderCache(V)}}this.renderBufferDirect=function(V,v,p,b,h,G0){if(v===null)v=v8;let O0=h.isMesh&&h.matrixWorld.determinant()<0,H0=GH(V,v,p,b,h);U0.setMaterial(b,O0);let V0=p.index,C0=1;if(b.wireframe===!0){if(V0=o.getWireframeAttribute(p),V0===void 0)return;C0=2}let b0=p.drawRange,u0=p.attributes.position,w0=b0.start*C0,W8=(b0.start+b0.count)*C0;if(G0!==null)w0=Math.max(w0,G0.start*C0),W8=Math.min(W8,(G0.start+G0.count)*C0);if(V0!==null)w0=Math.max(w0,0),W8=Math.min(W8,V0.count);else if(u0!==void 0&&u0!==null)w0=Math.max(w0,0),W8=Math.min(W8,u0.count);let k8=W8-w0;if(k8<0||k8===1/0)return;S.setup(h,b,H0,p,V0);let R8,H8=S0;if(V0!==null)R8=f.get(V0),H8=h0,H8.setIndex(R8);if(h.isMesh)if(b.wireframe===!0)U0.setLineWidth(b.wireframeLinewidth*B8()),H8.setMode(j.LINES);else H8.setMode(j.TRIANGLES);else if(h.isLine){let b8=b.linewidth;if(b8===void 0)b8=1;if(U0.setLineWidth(b8*B8()),h.isLineSegments)H8.setMode(j.LINES);else if(h.isLineLoop)H8.setMode(j.LINE_LOOP);else H8.setMode(j.LINE_STRIP)}else if(h.isPoints)H8.setMode(j.POINTS);else if(h.isSprite)H8.setMode(j.TRIANGLES);if(h.isBatchedMesh)if(!i0.get("WEBGL_multi_draw")){let{_multiDrawStarts:b8,_multiDrawCounts:F0,_multiDrawCount:a8}=h,o0=V0?f.get(V0).bytesPerElement:1,WJ=A0.get(b).currentProgram.getUniforms();for(let BJ=0;BJ<a8;BJ++)WJ.setValue(j,"_gl_DrawID",BJ),H8.render(b8[BJ]/o0,F0[BJ])}else H8.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)H8.renderInstances(w0,k8,h.count);else if(p.isInstancedBufferGeometry){let b8=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,F0=Math.min(p.instanceCount,b8);H8.renderInstances(w0,k8,F0)}else H8.render(w0,k8)};function MJ(V,v,p){if(V.transparent===!0&&V.side===c8&&V.forceSinglePass===!1)V.side=g8,V.needsUpdate=!0,l7(V,v,p),V.side=U9,V.needsUpdate=!0,l7(V,v,p),V.side=c8;else l7(V,v,p)}this.compile=function(V,v,p=null){if(p===null)p=V;if(A=i.get(p),A.init(v),P.push(A),p.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(A.pushLight(h),h.castShadow)A.pushShadow(h)}}),V!==p)V.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(A.pushLight(h),h.castShadow)A.pushShadow(h)}});A.setupLights();let b=new Set;return V.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let G0=h.material;if(G0)if(Array.isArray(G0))for(let O0=0;O0<G0.length;O0++){let H0=G0[O0];MJ(H0,p,h),b.add(H0)}else MJ(G0,p,h),b.add(G0)}),A=P.pop(),b},this.compileAsync=function(V,v,p=null){let b=this.compile(V,v,p);return new Promise((h)=>{function G0(){if(b.forEach(function(O0){if(A0.get(O0).currentProgram.isReady())b.delete(O0)}),b.size===0){h(V);return}setTimeout(G0,10)}if(i0.get("KHR_parallel_shader_compile")!==null)G0();else setTimeout(G0,10)})};let qJ=null;function HH(V){if(qJ)qJ(V)}function TW(){D9.stop()}function SW(){D9.start()}let D9=new rX;if(D9.setAnimationLoop(HH),typeof self<"u")D9.setContext(self);this.setAnimationLoop=function(V){qJ=V,J0.setAnimationLoop(V),V===null?D9.stop():D9.start()},J0.addEventListener("sessionstart",TW),J0.addEventListener("sessionend",SW),this.render=function(V,v){if(v!==void 0&&v.isCamera!==!0){T0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w!==null)w.renderStart(V,v);let p=J0.enabled===!0&&J0.isPresenting===!0,b=D!==null&&(y===null||p)&&D.begin(C,y);if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(J0.enabled===!0&&J0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(J0.cameraAutoUpdate===!0)J0.updateCamera(v);v=J0.getCamera()}if(V.isScene===!0)V.onBeforeRender(C,V,v,y);if(A=i.get(V,P.length),A.init(v),A.state.textureUnits=_.getTextureUnits(),P.push(A),X8.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),t0.setFromProjectionMatrix(X8,PZ,v.reversedDepth),s0=this.localClippingEnabled,l0=W0.init(this.clippingPlanes,s0),z=d.get(V,I.length),z.init(),I.push(z),J0.enabled===!0&&J0.isPresenting===!0){let O0=C.xr.getDepthSensingMesh();if(O0!==null)H$(O0,v,-1/0,C.sortObjects)}if(H$(V,v,0,C.sortObjects),z.finish(),C.sortObjects===!0)z.sort(s,E0);if(f8=J0.enabled===!1||J0.isPresenting===!1||J0.hasDepthSensing()===!1,f8)$0.addToRenderList(z,V);if(this.info.render.frame++,l0===!0)W0.beginShadows();let h=A.state.shadowsArray;if(R0.render(h,V,v),l0===!0)W0.endShadows();if(this.info.autoReset===!0)this.info.reset();if((b&&D.hasRenderPass())===!1){let{opaque:O0,transmissive:H0}=z;if(A.setupLights(),v.isArrayCamera){let V0=v.cameras;if(H0.length>0)for(let C0=0,b0=V0.length;C0<b0;C0++){let u0=V0[C0];vW(O0,H0,V,u0)}if(f8)$0.render(V);for(let C0=0,b0=V0.length;C0<b0;C0++){let u0=V0[C0];jW(z,V,u0,u0.viewport)}}else{if(H0.length>0)vW(O0,H0,V,v);if(f8)$0.render(V);jW(z,V,v)}}if(y!==null&&c===0)_.updateMultisampleRenderTarget(y),_.updateRenderTargetMipmap(y);if(b)D.end(C);if(V.isScene===!0)V.onAfterRender(C,V,v);if(S.resetDefaultState(),u=-1,g=null,P.pop(),P.length>0){if(A=P[P.length-1],_.setTextureUnits(A.state.textureUnits),l0===!0)W0.setGlobalState(C.clippingPlanes,A.state.camera)}else A=null;if(I.pop(),I.length>0)z=I[I.length-1];else z=null;if(w!==null)w.renderEnd()};function H$(V,v,p,b){if(V.visible===!1)return;if(V.layers.test(v.layers)){if(V.isGroup)p=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(v)}else if(V.isLightProbeGrid)A.pushLightProbeGrid(V);else if(V.isLight){if(A.pushLight(V),V.castShadow)A.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||t0.intersectsSprite(V)){if(b)g0.setFromMatrixPosition(V.matrixWorld).applyMatrix4(X8);let O0=r.update(V),H0=V.material;if(H0.visible)z.push(V,O0,H0,p,g0.z,null)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||t0.intersectsObject(V)){let O0=r.update(V),H0=V.material;if(b){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();g0.copy(V.boundingSphere.center)}else{if(O0.boundingSphere===null)O0.computeBoundingSphere();g0.copy(O0.boundingSphere.center)}g0.applyMatrix4(V.matrixWorld).applyMatrix4(X8)}if(Array.isArray(H0)){let V0=O0.groups;for(let C0=0,b0=V0.length;C0<b0;C0++){let u0=V0[C0],w0=H0[u0.materialIndex];if(w0&&w0.visible)z.push(V,O0,w0,p,g0.z,u0)}}else if(H0.visible)z.push(V,O0,H0,p,g0.z,null)}}}let G0=V.children;for(let O0=0,H0=G0.length;O0<H0;O0++)H$(G0[O0],v,p,b)}function jW(V,v,p,b){let{opaque:h,transmissive:G0,transparent:O0}=V;if(A.setupLightsView(p),l0===!0)W0.setGlobalState(C.clippingPlanes,p);if(b)U0.viewport(m.copy(b));if(h.length>0)p7(h,v,p);if(G0.length>0)p7(G0,v,p);if(O0.length>0)p7(O0,v,p);U0.buffers.depth.setTest(!0),U0.buffers.depth.setMask(!0),U0.buffers.color.setMask(!0),U0.setPolygonOffset(!1)}function vW(V,v,p,b){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[b.id]===void 0){let w0=i0.has("EXT_color_buffer_half_float")||i0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[b.id]=new S8(1,1,{generateMipmaps:!0,type:w0?u8:DJ,minFilter:CJ,samples:Math.max(4,a0.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:x0.workingColorSpace})}let G0=A.state.transmissionRenderTarget[b.id],O0=b.viewport||m;G0.setSize(O0.z*C.transmissionResolutionScale,O0.w*C.transmissionResolutionScale);let H0=C.getRenderTarget(),V0=C.getActiveCubeFace(),C0=C.getActiveMipmapLevel();if(C.setRenderTarget(G0),C.getClearColor(N0),I0=C.getClearAlpha(),I0<1)C.setClearColor(16777215,0.5);if(C.clear(),f8)$0.render(p);let b0=C.toneMapping;C.toneMapping=LJ;let u0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(A.setupLightsView(b),l0===!0)W0.setGlobalState(C.clippingPlanes,b);if(p7(V,p,b),_.updateMultisampleRenderTarget(G0),_.updateRenderTargetMipmap(G0),i0.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let W8=0,k8=v.length;W8<k8;W8++){let R8=v[W8],{object:H8,geometry:b8,material:F0,group:a8}=R8;if(F0.side===c8&&H8.layers.test(b.layers)){let o0=F0.side;F0.side=g8,F0.needsUpdate=!0,yW(H8,p,b,b8,F0,a8),F0.side=o0,F0.needsUpdate=!0,w0=!0}}if(w0===!0)_.updateMultisampleRenderTarget(G0),_.updateRenderTargetMipmap(G0)}if(C.setRenderTarget(H0,V0,C0),C.setClearColor(N0,I0),u0!==void 0)b.viewport=u0;C.toneMapping=b0}function p7(V,v,p){let b=v.isScene===!0?v.overrideMaterial:null;for(let h=0,G0=V.length;h<G0;h++){let O0=V[h],{object:H0,geometry:V0,group:C0}=O0,b0=O0.material;if(b0.allowOverride===!0&&b!==null)b0=b;if(H0.layers.test(p.layers))yW(H0,v,p,V0,b0,C0)}}function yW(V,v,p,b,h,G0){if(V.onBeforeRender(C,v,p,b,h,G0),V.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),h.onBeforeRender(C,v,p,b,V,G0),h.transparent===!0&&h.side===c8&&h.forceSinglePass===!1)h.side=g8,h.needsUpdate=!0,C.renderBufferDirect(p,v,b,h,V,G0),h.side=U9,h.needsUpdate=!0,C.renderBufferDirect(p,v,b,h,V,G0),h.side=c8;else C.renderBufferDirect(p,v,b,h,V,G0);V.onAfterRender(C,v,p,b,h,G0)}function l7(V,v,p){if(v.isScene!==!0)v=v8;let b=A0.get(V),h=A.state.lights,G0=A.state.shadowsArray,O0=h.state.version,H0=e.getParameters(V,h.state,G0,v,p,A.state.lightProbeGridArray),V0=e.getProgramCacheKey(H0),C0=b.programs;b.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?v.environment:null,b.fog=v.fog;let b0=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;if(b.envMap=k.get(V.envMap||b.environment,b0),b.envMapRotation=b.environment!==null&&V.envMap===null?v.environmentRotation:V.envMapRotation,C0===void 0)V.addEventListener("dispose",f0),C0=new Map,b.programs=C0;let u0=C0.get(V0);if(u0!==void 0){if(b.currentProgram===u0&&b.lightsStateVersion===O0)return bW(V,H0),u0}else{if(H0.uniforms=e.getUniforms(V),w!==null&&V.isNodeMaterial)w.build(V,p,H0);V.onBeforeCompile(H0,C),u0=e.acquireProgram(H0,V0),C0.set(V0,u0),b.uniforms=H0.uniforms}let w0=b.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)w0.clippingPlanes=W0.uniform;if(bW(V,H0),b.needsLights=qH(V),b.lightsStateVersion=O0,b.needsLights)w0.ambientLightColor.value=h.state.ambient,w0.lightProbe.value=h.state.probe,w0.directionalLights.value=h.state.directional,w0.directionalLightShadows.value=h.state.directionalShadow,w0.spotLights.value=h.state.spot,w0.spotLightShadows.value=h.state.spotShadow,w0.rectAreaLights.value=h.state.rectArea,w0.ltc_1.value=h.state.rectAreaLTC1,w0.ltc_2.value=h.state.rectAreaLTC2,w0.pointLights.value=h.state.point,w0.pointLightShadows.value=h.state.pointShadow,w0.hemisphereLights.value=h.state.hemi,w0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,w0.spotLightMatrix.value=h.state.spotLightMatrix,w0.spotLightMap.value=h.state.spotLightMap,w0.pointShadowMatrix.value=h.state.pointShadowMatrix;return b.lightProbeGrid=A.state.lightProbeGridArray.length>0,b.currentProgram=u0,b.uniformsList=null,u0}function fW(V){if(V.uniformsList===null){let v=V.currentProgram.getUniforms();V.uniformsList=y7.seqWithValue(v.seq,V.uniforms)}return V.uniformsList}function bW(V,v){let p=A0.get(V);p.outputColorSpace=v.outputColorSpace,p.batching=v.batching,p.batchingColor=v.batchingColor,p.instancing=v.instancing,p.instancingColor=v.instancingColor,p.instancingMorph=v.instancingMorph,p.skinning=v.skinning,p.morphTargets=v.morphTargets,p.morphNormals=v.morphNormals,p.morphColors=v.morphColors,p.morphTargetsCount=v.morphTargetsCount,p.numClippingPlanes=v.numClippingPlanes,p.numIntersection=v.numClipIntersection,p.vertexAlphas=v.vertexAlphas,p.vertexTangents=v.vertexTangents,p.toneMapping=v.toneMapping}function UH(V,v){if(V.length===0)return null;if(V.length===1)return V[0].texture!==null?V[0]:null;B.setFromMatrixPosition(v.matrixWorld);for(let p=0,b=V.length;p<b;p++){let h=V[p];if(h.texture!==null&&h.boundingBox.containsPoint(B))return h}return null}function GH(V,v,p,b,h){if(v.isScene!==!0)v=v8;_.resetTextureUnits();let G0=v.fog,O0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?v.environment:null,H0=y===null?C.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:x0.workingColorSpace,V0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,C0=k.get(b.envMap||O0,V0),b0=b.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,u0=!!p.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),w0=!!p.morphAttributes.position,W8=!!p.morphAttributes.normal,k8=!!p.morphAttributes.color,R8=LJ;if(b.toneMapped){if(y===null||y.isXRRenderTarget===!0)R8=C.toneMapping}let H8=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,b8=H8!==void 0?H8.length:0,F0=A0.get(b),a8=A.state.lights;if(l0===!0){if(s0===!0||V!==g){let E8=V===g&&b.id===u;W0.setState(b,V,E8)}}let o0=!1;if(b.version===F0.__version){if(F0.needsLights&&F0.lightsStateVersion!==a8.state.version)o0=!0;else if(F0.outputColorSpace!==H0)o0=!0;else if(h.isBatchedMesh&&F0.batching===!1)o0=!0;else if(!h.isBatchedMesh&&F0.batching===!0)o0=!0;else if(h.isBatchedMesh&&F0.batchingColor===!0&&h.colorTexture===null)o0=!0;else if(h.isBatchedMesh&&F0.batchingColor===!1&&h.colorTexture!==null)o0=!0;else if(h.isInstancedMesh&&F0.instancing===!1)o0=!0;else if(!h.isInstancedMesh&&F0.instancing===!0)o0=!0;else if(h.isSkinnedMesh&&F0.skinning===!1)o0=!0;else if(!h.isSkinnedMesh&&F0.skinning===!0)o0=!0;else if(h.isInstancedMesh&&F0.instancingColor===!0&&h.instanceColor===null)o0=!0;else if(h.isInstancedMesh&&F0.instancingColor===!1&&h.instanceColor!==null)o0=!0;else if(h.isInstancedMesh&&F0.instancingMorph===!0&&h.morphTexture===null)o0=!0;else if(h.isInstancedMesh&&F0.instancingMorph===!1&&h.morphTexture!==null)o0=!0;else if(F0.envMap!==C0)o0=!0;else if(b.fog===!0&&F0.fog!==G0)o0=!0;else if(F0.numClippingPlanes!==void 0&&(F0.numClippingPlanes!==W0.numPlanes||F0.numIntersection!==W0.numIntersection))o0=!0;else if(F0.vertexAlphas!==b0)o0=!0;else if(F0.vertexTangents!==u0)o0=!0;else if(F0.morphTargets!==w0)o0=!0;else if(F0.morphNormals!==W8)o0=!0;else if(F0.morphColors!==k8)o0=!0;else if(F0.toneMapping!==R8)o0=!0;else if(F0.morphTargetsCount!==b8)o0=!0;else if(!!F0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)o0=!0}else o0=!0,F0.__version=b.version;let WJ=F0.currentProgram;if(o0===!0){if(WJ=l7(b,v,h),w&&b.isNodeMaterial)w.onUpdateProgram(b,WJ,F0)}let BJ=!1,eJ=!1,s9=!1,U8=WJ.getUniforms(),L8=F0.uniforms;if(U0.useProgram(WJ.program))BJ=!0,eJ=!0,s9=!0;if(b.id!==u)u=b.id,eJ=!0;if(F0.needsLights){let E8=UH(A.state.lightProbeGridArray,h);if(F0.lightProbeGrid!==E8)F0.lightProbeGrid=E8,eJ=!0}if(BJ||g!==V){if(U0.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();U8.setValue(j,"projectionMatrix",V.projectionMatrix),U8.setValue(j,"viewMatrix",V.matrixWorldInverse);let Q9=U8.map.cameraPosition;if(Q9!==void 0)Q9.setValue(j,K8.setFromMatrixPosition(V.matrixWorld));if(a0.logarithmicDepthBuffer)U8.setValue(j,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)U8.setValue(j,"isOrthographic",V.isOrthographicCamera===!0);if(g!==V)g=V,eJ=!0,s9=!0}if(F0.needsLights){if(a8.state.directionalShadowMap.length>0)U8.setValue(j,"directionalShadowMap",a8.state.directionalShadowMap,_);if(a8.state.spotShadowMap.length>0)U8.setValue(j,"spotShadowMap",a8.state.spotShadowMap,_);if(a8.state.pointShadowMap.length>0)U8.setValue(j,"pointShadowMap",a8.state.pointShadowMap,_)}if(h.isSkinnedMesh){U8.setOptional(j,h,"bindMatrix"),U8.setOptional(j,h,"bindMatrixInverse");let E8=h.skeleton;if(E8){if(E8.boneTexture===null)E8.computeBoneTexture();U8.setValue(j,"boneTexture",E8.boneTexture,_)}}if(h.isBatchedMesh){if(U8.setOptional(j,h,"batchingTexture"),U8.setValue(j,"batchingTexture",h._matricesTexture,_),U8.setOptional(j,h,"batchingIdTexture"),U8.setValue(j,"batchingIdTexture",h._indirectTexture,_),U8.setOptional(j,h,"batchingColorTexture"),h._colorsTexture!==null)U8.setValue(j,"batchingColorTexture",h._colorsTexture,_)}let J9=p.morphAttributes;if(J9.position!==void 0||J9.normal!==void 0||J9.color!==void 0)X0.update(h,p,WJ);if(eJ||F0.receiveShadow!==h.receiveShadow)F0.receiveShadow=h.receiveShadow,U8.setValue(j,"receiveShadow",h.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&v.environment!==null)L8.envMapIntensity.value=v.environmentIntensity;if(L8.dfgLUT!==void 0)L8.dfgLUT.value=Zq();if(eJ){if(U8.setValue(j,"toneMappingExposure",C.toneMappingExposure),F0.needsLights)EH(L8,s9);if(G0&&b.fog===!0)Y0.refreshFogUniforms(L8,G0);if(Y0.refreshMaterialUniforms(L8,b,c0,J8,A.state.transmissionRenderTarget[V.id]),F0.needsLights&&F0.lightProbeGrid){let E8=F0.lightProbeGrid;L8.probesSH.value=E8.texture,L8.probesMin.value.copy(E8.boundingBox.min),L8.probesMax.value.copy(E8.boundingBox.max),L8.probesResolution.value.copy(E8.resolution)}y7.upload(j,fW(F0),L8,_)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)y7.upload(j,fW(F0),L8,_),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)U8.setValue(j,"center",h.center);if(U8.setValue(j,"modelViewMatrix",h.modelViewMatrix),U8.setValue(j,"normalMatrix",h.normalMatrix),U8.setValue(j,"modelMatrix",h.matrixWorld),b.uniformsGroups!==void 0){let E8=b.uniformsGroups;for(let Q9=0,i9=E8.length;Q9<i9;Q9++){let hW=E8[Q9];Z0.update(hW,WJ),Z0.bind(hW,WJ)}}return WJ}function EH(V,v){V.ambientLightColor.needsUpdate=v,V.lightProbe.needsUpdate=v,V.directionalLights.needsUpdate=v,V.directionalLightShadows.needsUpdate=v,V.pointLights.needsUpdate=v,V.pointLightShadows.needsUpdate=v,V.spotLights.needsUpdate=v,V.spotLightShadows.needsUpdate=v,V.rectAreaLights.needsUpdate=v,V.hemisphereLights.needsUpdate=v}function qH(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return c},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(V,v,p){let b=A0.get(V);if(b.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;A0.get(V.texture).__webglTexture=v,A0.get(V.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:p,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,v){let p=A0.get(V);p.__webglFramebuffer=v,p.__useDefaultFramebuffer=v===void 0};let NH=j.createFramebuffer();this.setRenderTarget=function(V,v=0,p=0){y=V,l=v,c=p;let b=null,h=!1,G0=!1;if(V){let H0=A0.get(V);if(H0.__useDefaultFramebuffer!==void 0){U0.bindFramebuffer(j.FRAMEBUFFER,H0.__webglFramebuffer),m.copy(V.viewport),a.copy(V.scissor),Q0=V.scissorTest,U0.viewport(m),U0.scissor(a),U0.setScissorTest(Q0),u=-1;return}else if(H0.__webglFramebuffer===void 0)_.setupRenderTarget(V);else if(H0.__hasExternalTextures)_.rebindTextures(V,A0.get(V.texture).__webglTexture,A0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let b0=V.depthTexture;if(H0.__boundDepthTexture!==b0){if(b0!==null&&A0.has(b0)&&(V.width!==b0.image.width||V.height!==b0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(V)}}let V0=V.texture;if(V0.isData3DTexture||V0.isDataArrayTexture||V0.isCompressedArrayTexture)G0=!0;let C0=A0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(C0[v]))b=C0[v][p];else b=C0[v];h=!0}else if(V.samples>0&&_.useMultisampledRTT(V)===!1)b=A0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(C0))b=C0[p];else b=C0;m.copy(V.viewport),a.copy(V.scissor),Q0=V.scissorTest}else m.copy(z0).multiplyScalar(c0).floor(),a.copy(q0).multiplyScalar(c0).floor(),Q0=P0;if(p!==0)b=NH;if(U0.bindFramebuffer(j.FRAMEBUFFER,b))U0.drawBuffers(V,b);if(U0.viewport(m),U0.scissor(a),U0.setScissorTest(Q0),h){let H0=A0.get(V.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+v,H0.__webglTexture,p)}else if(G0){let H0=v;for(let V0=0;V0<V.textures.length;V0++){let C0=A0.get(V.textures[V0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+V0,C0.__webglTexture,p,H0)}}else if(V!==null&&p!==0){let H0=A0.get(V.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,H0.__webglTexture,p)}u=-1},this.readRenderTargetPixels=function(V,v,p,b,h,G0,O0,H0=0){if(!(V&&V.isWebGLRenderTarget)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=A0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&O0!==void 0)V0=V0[O0];if(V0){U0.bindFramebuffer(j.FRAMEBUFFER,V0);try{let C0=V.textures[H0],b0=C0.format,u0=C0.type;if(V.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+H0);if(!a0.textureFormatReadable(b0)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!a0.textureTypeReadable(u0)){T0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=V.width-b&&(p>=0&&p<=V.height-h))j.readPixels(v,p,b,h,m0.convert(b0),m0.convert(u0),G0)}finally{let C0=y!==null?A0.get(y).__webglFramebuffer:null;U0.bindFramebuffer(j.FRAMEBUFFER,C0)}}},this.readRenderTargetPixelsAsync=async function(V,v,p,b,h,G0,O0,H0=0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=A0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&O0!==void 0)V0=V0[O0];if(V0)if(v>=0&&v<=V.width-b&&(p>=0&&p<=V.height-h)){U0.bindFramebuffer(j.FRAMEBUFFER,V0);let C0=V.textures[H0],b0=C0.format,u0=C0.type;if(V.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+H0);if(!a0.textureFormatReadable(b0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!a0.textureTypeReadable(u0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let w0=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,w0),j.bufferData(j.PIXEL_PACK_BUFFER,G0.byteLength,j.STREAM_READ),j.readPixels(v,p,b,h,m0.convert(b0),m0.convert(u0),0);let W8=y!==null?A0.get(y).__webglFramebuffer:null;U0.bindFramebuffer(j.FRAMEBUFFER,W8);let k8=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await LX(j,k8,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,w0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,G0),j.deleteBuffer(w0),j.deleteSync(k8),G0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,v=null,p=0){let b=Math.pow(2,-p),h=Math.floor(V.image.width*b),G0=Math.floor(V.image.height*b),O0=v!==null?v.x:0,H0=v!==null?v.y:0;_.setTexture2D(V,0),j.copyTexSubImage2D(j.TEXTURE_2D,p,0,0,O0,H0,h,G0),U0.unbindTexture()};let FH=j.createFramebuffer(),OH=j.createFramebuffer();if(this.copyTextureToTexture=function(V,v,p=null,b=null,h=0,G0=0){let O0,H0,V0,C0,b0,u0,w0,W8,k8,R8=V.isCompressedTexture?V.mipmaps[G0]:V.image;if(p!==null)O0=p.max.x-p.min.x,H0=p.max.y-p.min.y,V0=p.isBox3?p.max.z-p.min.z:1,C0=p.min.x,b0=p.min.y,u0=p.isBox3?p.min.z:0;else{let L8=Math.pow(2,-h);if(O0=Math.floor(R8.width*L8),H0=Math.floor(R8.height*L8),V.isDataArrayTexture)V0=R8.depth;else if(V.isData3DTexture)V0=Math.floor(R8.depth*L8);else V0=1;C0=0,b0=0,u0=0}if(b!==null)w0=b.x,W8=b.y,k8=b.z;else w0=0,W8=0,k8=0;let H8=m0.convert(v.format),b8=m0.convert(v.type),F0;if(v.isData3DTexture)_.setTexture3D(v,0),F0=j.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)_.setTexture2DArray(v,0),F0=j.TEXTURE_2D_ARRAY;else _.setTexture2D(v,0),F0=j.TEXTURE_2D;U0.activeTexture(j.TEXTURE0),U0.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,v.flipY),U0.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),U0.pixelStorei(j.UNPACK_ALIGNMENT,v.unpackAlignment);let a8=U0.getParameter(j.UNPACK_ROW_LENGTH),o0=U0.getParameter(j.UNPACK_IMAGE_HEIGHT),WJ=U0.getParameter(j.UNPACK_SKIP_PIXELS),BJ=U0.getParameter(j.UNPACK_SKIP_ROWS),eJ=U0.getParameter(j.UNPACK_SKIP_IMAGES);U0.pixelStorei(j.UNPACK_ROW_LENGTH,R8.width),U0.pixelStorei(j.UNPACK_IMAGE_HEIGHT,R8.height),U0.pixelStorei(j.UNPACK_SKIP_PIXELS,C0),U0.pixelStorei(j.UNPACK_SKIP_ROWS,b0),U0.pixelStorei(j.UNPACK_SKIP_IMAGES,u0);let s9=V.isDataArrayTexture||V.isData3DTexture,U8=v.isDataArrayTexture||v.isData3DTexture;if(V.isDepthTexture){let L8=A0.get(V),J9=A0.get(v),E8=A0.get(L8.__renderTarget),Q9=A0.get(J9.__renderTarget);U0.bindFramebuffer(j.READ_FRAMEBUFFER,E8.__webglFramebuffer),U0.bindFramebuffer(j.DRAW_FRAMEBUFFER,Q9.__webglFramebuffer);for(let i9=0;i9<V0;i9++){if(s9)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,A0.get(V).__webglTexture,h,u0+i9),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,A0.get(v).__webglTexture,G0,k8+i9);j.blitFramebuffer(C0,b0,O0,H0,w0,W8,O0,H0,j.DEPTH_BUFFER_BIT,j.NEAREST)}U0.bindFramebuffer(j.READ_FRAMEBUFFER,null),U0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(h!==0||V.isRenderTargetTexture||A0.has(V)){let L8=A0.get(V),J9=A0.get(v);U0.bindFramebuffer(j.READ_FRAMEBUFFER,FH),U0.bindFramebuffer(j.DRAW_FRAMEBUFFER,OH);for(let E8=0;E8<V0;E8++){if(s9)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,L8.__webglTexture,h,u0+E8);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,L8.__webglTexture,h);if(U8)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,J9.__webglTexture,G0,k8+E8);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,J9.__webglTexture,G0);if(h!==0)j.blitFramebuffer(C0,b0,O0,H0,w0,W8,O0,H0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(U8)j.copyTexSubImage3D(F0,G0,w0,W8,k8+E8,C0,b0,O0,H0);else j.copyTexSubImage2D(F0,G0,w0,W8,C0,b0,O0,H0)}U0.bindFramebuffer(j.READ_FRAMEBUFFER,null),U0.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(U8)if(V.isDataTexture||V.isData3DTexture)j.texSubImage3D(F0,G0,w0,W8,k8,O0,H0,V0,H8,b8,R8.data);else if(v.isCompressedArrayTexture)j.compressedTexSubImage3D(F0,G0,w0,W8,k8,O0,H0,V0,H8,R8.data);else j.texSubImage3D(F0,G0,w0,W8,k8,O0,H0,V0,H8,b8,R8);else if(V.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,G0,w0,W8,O0,H0,H8,b8,R8.data);else if(V.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,G0,w0,W8,R8.width,R8.height,H8,R8.data);else j.texSubImage2D(j.TEXTURE_2D,G0,w0,W8,O0,H0,H8,b8,R8);if(U0.pixelStorei(j.UNPACK_ROW_LENGTH,a8),U0.pixelStorei(j.UNPACK_IMAGE_HEIGHT,o0),U0.pixelStorei(j.UNPACK_SKIP_PIXELS,WJ),U0.pixelStorei(j.UNPACK_SKIP_ROWS,BJ),U0.pixelStorei(j.UNPACK_SKIP_IMAGES,eJ),G0===0&&v.generateMipmaps)j.generateMipmap(F0);U0.unbindTexture()},this.initRenderTarget=function(V){if(A0.get(V).__webglFramebuffer===void 0)_.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)_.setTextureCube(V,0);else if(V.isData3DTexture)_.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)_.setTexture2DArray(V,0);else _.setTexture2D(V,0);U0.unbindTexture()},this.resetState=function(){l=0,c=0,y=null,U0.reset(),S.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return PZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=x0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=x0._getUnpackColorSpace()}}var p6={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class HJ{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Wq=new aJ(-1,1,1,-1,0,1);class EK extends N8{constructor(){super();this.setAttribute("position",new r0([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new r0([0,2,0,0,2,0],2))}}var Yq=new EK;class l9{constructor(J){this._mesh=new y0(Yq,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,Wq)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class KW extends HJ{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof C8)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=nJ.clone(J.uniforms),this.material=new C8({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new l9(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class J$ extends HJ{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let Z=J.getContext(),W=J.state;W.buffers.color.setMask(!1),W.buffers.depth.setMask(!1),W.buffers.color.setLocked(!0),W.buffers.depth.setLocked(!0);let Y,X;if(this.inverse)Y=0,X=1;else Y=1,X=0;if(W.buffers.stencil.setTest(!0),W.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),W.buffers.stencil.setFunc(Z.ALWAYS,Y,4294967295),W.buffers.stencil.setClear(X),W.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),W.buffers.color.setLocked(!1),W.buffers.depth.setLocked(!1),W.buffers.color.setMask(!0),W.buffers.depth.setMask(!0),W.buffers.stencil.setLocked(!1),W.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),W.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),W.buffers.stencil.setLocked(!0)}}class HW extends HJ{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class UW{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new L0);this._width=$.width,this._height=$.height,Q=new S8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:u8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new KW(p6),this.copyPass.material.blending=XJ,this.timer=new b6}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let Z=0,W=this.passes.length;Z<W;Z++){let Y=this.passes[Z];if(Y.enabled===!1)continue;if(Y.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),Y.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),Y.needsSwap){if($){let X=this.renderer.getContext(),K=this.renderer.state.buffers.stencil;K.setFunc(X.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),K.setFunc(X.EQUAL,1,4294967295)}this.swapBuffers()}if(J$!==void 0){if(Y instanceof J$)$=!0;else if(Y instanceof HW)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new L0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize($,Z),this.renderTarget2.setSize($,Z);for(let W=0;W<this.passes.length;W++)this.passes[W].setSize($,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class GW extends HJ{constructor(J,Q,$=null,Z=null,W=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=Z,this.clearAlpha=W,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new B0}render(J,Q,$){let Z=J.autoClear;J.autoClear=!1;let W,Y;if(this.overrideMaterial!==null)Y=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)W=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(W);if(this.overrideMaterial!==null)this.scene.overrideMaterial=Y;J.autoClear=Z}}var qK={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class m9 extends HJ{constructor(J,Q=1,$,Z){super();this.strength=Q,this.radius=$,this.threshold=Z,this.resolution=J!==void 0?new L0(J.x,J.y):new L0(256,256),this.clearColor=new B0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let W=Math.round(this.resolution.x/2),Y=Math.round(this.resolution.y/2);this.renderTargetBright=new S8(W,Y,{type:u8}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let G=new S8(W,Y,{type:u8});G.texture.name="UnrealBloomPass.h"+U,G.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(G);let q=new S8(W,Y,{type:u8});q.texture.name="UnrealBloomPass.v"+U,q.texture.generateMipmaps=!1,this.renderTargetsVertical.push(q),W=Math.round(W/2),Y=Math.round(Y/2)}let X=qK;this.highPassUniforms=nJ.clone(X.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new C8({uniforms:this.highPassUniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader}),this.separableBlurMaterials=[];let K=[6,10,14,18,22];W=Math.round(this.resolution.x/2),Y=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(K[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new L0(1/W,1/Y),W=Math.round(W/2),Y=Math.round(Y/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nJ.clone(p6.uniforms),this.blendMaterial=new C8({uniforms:this.copyUniforms,vertexShader:p6.vertexShader,fragmentShader:p6.fragmentShader,premultipliedAlpha:!0,blending:I9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B0,this._oldClearAlpha=1,this._basic=new y8,this._fsQuad=new l9(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),Z=Math.round(Q/2);this.renderTargetBright.setSize($,Z);for(let W=0;W<this.nMips;W++)this.renderTargetsHorizontal[W].setSize($,Z),this.renderTargetsVertical[W].setSize($,Z),this.separableBlurMaterials[W].uniforms.invSize.value=new L0(1/$,1/Z),$=Math.round($/2),Z=Math.round(Z/2)}render(J,Q,$,Z,W){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let Y=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),W)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let X=this.renderTargetBright;for(let K=0;K<this.nMips;K++)this._fsQuad.material=this.separableBlurMaterials[K],this.separableBlurMaterials[K].uniforms.colorTexture.value=X.texture,this.separableBlurMaterials[K].uniforms.direction.value=m9.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[K]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[K].uniforms.colorTexture.value=this.renderTargetsHorizontal[K].texture,this.separableBlurMaterials[K].uniforms.direction.value=m9.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[K]),J.clear(),this._fsQuad.render(J),X=this.renderTargetsVertical[K];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,W)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=Y}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let Z=0;Z<J;Z++)Q.push(0.39894*Math.exp(-0.5*Z*Z/($*$))/$);return new C8({defines:{KERNEL_RADIUS:J},uniforms:{colorTexture:{value:null},invSize:{value:new L0(0.5,0.5)},direction:{value:new L0(0.5,0.5)},gaussianCoefficients:{value:Q}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new C8({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}m9.BlurDirectionX=new L0(1,0);m9.BlurDirectionY=new L0(0,1);var f7={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class EW extends HJ{constructor(){super();this.isOutputPass=!0,this.uniforms=nJ.clone(f7.uniforms),this.material=new A7({name:f7.name,uniforms:this.uniforms,vertexShader:f7.vertexShader,fragmentShader:f7.fragmentShader}),this._fsQuad=new l9(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},x0.getTransfer(this._outputColorSpace)===$8)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===G7)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===E7)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===q7)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===P9)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===F7)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===O7)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===N7)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var o8=34,UJ=9,NK=240,b7=16,FK=26,OK=40,qW=55,Q$=110,AJ={x:0,y:50,z:27},$$={strength:0.9,radius:0.55,threshold:0.82},RK="#04050d",kK="#241634",LK="#46243f",DK=658456,Z$="../game-3d-assets";function u9(J){let Q=J>>>0;return()=>{Q|=0,Q=Q+1831565813|0;let $=Math.imul(Q^Q>>>15,1|Q);return $=$+Math.imul($^$>>>7,61|$)^$,(($^$>>>14)>>>0)/4294967296}}function VK(J,Q){let $=u9(Q),Z=128,W=256,Y=document.createElement("canvas");Y.width=128,Y.height=256;let X=Y.getContext("2d");X.fillStyle="#000000",X.fillRect(0,0,128,256);let K=4,H=9,U=128/K,G=256/H;for(let E=0;E<H;E++)for(let F=0;F<K;F++){let R=$();if(R<0.42)continue;let L=$()<0.78;X.fillStyle=L?"#ffd9a0":J,X.globalAlpha=R>0.85?1:0.55,X.fillRect(F*U+U*0.26,E*G+G*0.24,U*0.48,G*0.5),X.globalAlpha=1}let q=new T6(Y);return q.colorSpace=s8,q.magFilter=n8,q.minFilter=n8,q}function W$(J,Q,$){let Z=document.createElement("canvas");Z.width=512,Z.height=192;let W=Z.getContext("2d"),Y=26;if(W.fillStyle="rgba(8, 10, 20, 0.82)",W.strokeStyle=Q,W.lineWidth=6,W.beginPath(),W.roundRect(6,6,Z.width-12,Z.height-12,Y),W.fill(),W.stroke(),W.textAlign="center",W.textBaseline="middle",W.fillStyle="#f4f6ff",W.font="700 52px 'JetBrains Mono', monospace",W.fillText(J.toUpperCase(),Z.width/2,$?74:Z.height/2,Z.width-60),$)W.fillStyle=Q,W.font="500 30px 'JetBrains Mono', monospace",W.fillText($,Z.width/2,134,Z.width-60);let X=new T6(Z);return X.colorSpace=s8,X}function MK(J,Q,$){let Z=document.createElement("canvas");Z.width=16,Z.height=512;let W=Z.getContext("2d"),Y=W.createLinearGradient(0,0,0,Z.height);Y.addColorStop(0,J),Y.addColorStop(0.55,J),Y.addColorStop(0.82,Q),Y.addColorStop(1,$),W.fillStyle=Y,W.fillRect(0,0,Z.width,Z.height);let X=new T6(Z);return X.colorSpace=s8,X}function NW(J,Q){if(Q===_Z)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===z6||Q===L7){let $=J.getIndex();if($===null){let X=[],K=J.getAttribute("position");if(K!==void 0){for(let H=0;H<K.count;H++)X.push(H);J.setIndex(X),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===z6)for(let X=1;X<=Z;X++)W.push($.getX(0)),W.push($.getX(X)),W.push($.getX(X+1));else for(let X=0;X<Z;X++)if(X%2===0)W.push($.getX(X)),W.push($.getX(X+1)),W.push($.getX(X+2));else W.push($.getX(X+2)),W.push($.getX(X+1)),W.push($.getX(X));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let Y=J.clone();return Y.setIndex(W),Y.clearGroups(),Y}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function BK(J){let Q=new Map,$=new Map,Z=J.clone();return zK(J,Z,function(W,Y){Q.set(Y,W),$.set(W,Y)}),Z.traverse(function(W){if(!W.isSkinnedMesh)return;let Y=W,X=Q.get(W),K=X.skeleton.bones;Y.skeleton=X.skeleton.clone(),Y.bindMatrix.copy(X.bindMatrix),Y.skeleton.bones=K.map(function(H){return $.get(H)}),Y.bind(Y.skeleton,Y.bindMatrix)}),Z}function zK(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)zK(J.children[Z],Q.children[Z],$)}class VW extends oJ{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new SK(Q)}),this.register(function(Q){return new jK(Q)}),this.register(function(Q){return new lK(Q)}),this.register(function(Q){return new mK(Q)}),this.register(function(Q){return new uK(Q)}),this.register(function(Q){return new yK(Q)}),this.register(function(Q){return new fK(Q)}),this.register(function(Q){return new bK(Q)}),this.register(function(Q){return new hK(Q)}),this.register(function(Q){return new TK(Q)}),this.register(function(Q){return new xK(Q)}),this.register(function(Q){return new vK(Q)}),this.register(function(Q){return new pK(Q)}),this.register(function(Q){return new gK(Q)}),this.register(function(Q){return new PK(Q)}),this.register(function(Q){return new kW(Q,d0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new kW(Q,d0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new dK(Q)})}load(J,Q,$,Z){let W=this,Y;if(this.resourcePath!=="")Y=this.resourcePath;else if(this.path!==""){let H=O9.extractUrlBase(J);Y=O9.resolveURL(H,this.path)}else Y=O9.extractUrlBase(J);this.manager.itemStart(J);let X=function(H){if(Z)Z(H);else console.error(H);W.manager.itemError(J),W.manager.itemEnd(J)},K=new T7(this.manager);K.setPath(this.path),K.setResponseType("arraybuffer"),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(H){try{W.parse(H,Y,function(U){Q(U),W.manager.itemEnd(J)},X)}catch(U){X(U)}},$,X)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,Y={},X={},K=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(K.decode(new Uint8Array(J,0,4))===cK){try{Y[d0.KHR_BINARY_GLTF]=new nK(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(Y[d0.KHR_BINARY_GLTF].content)}else W=JSON.parse(K.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new rK(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](H);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");X[G.name]=G,Y[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],q=W.extensionsRequired||[];switch(G){case d0.KHR_MATERIALS_UNLIT:Y[G]=new AK;break;case d0.KHR_DRACO_MESH_COMPRESSION:Y[G]=new sK(W,this.dracoLoader);break;case d0.KHR_TEXTURE_TRANSFORM:Y[G]=new iK;break;case d0.KHR_MESH_QUANTIZATION:Y[G]=new oK;break;default:if(q.indexOf(G)>=0&&X[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}H.setExtensions(Y),H.setPlugins(X),H.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function Xq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function M8(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var d0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PK{constructor(J){this.parser=J,this.name=d0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,K=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],H,U=new B0(16777215);if(K.color!==void 0)U.setRGB(K.color[0],K.color[1],K.color[2],JJ);let G=K.range!==void 0?K.range:0;switch(K.type){case"directional":H=new f6(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new y6(U),H.distance=G;break;case"spot":H=new iQ(U),H.distance=G,K.spot=K.spot||{},K.spot.innerConeAngle=K.spot.innerConeAngle!==void 0?K.spot.innerConeAngle:0,K.spot.outerConeAngle=K.spot.outerConeAngle!==void 0?K.spot.outerConeAngle:Math.PI/4,H.angle=K.spot.outerConeAngle,H.penumbra=1-K.spot.innerConeAngle/K.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+K.type)}if(H.position.set(0,0,0),TJ(H,K),K.intensity!==void 0)H.intensity=K.intensity;return H.name=Q.createUniqueName(K.name||"light_"+J),Z=Promise.resolve(H),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],X=(W.extensions&&W.extensions[this.name]||{}).light;if(X===void 0)return null;return this._loadLight(X).then(function(K){return $._getNodeRef(Q.cache,X,K)})}}class AK{constructor(){this.name=d0.KHR_MATERIALS_UNLIT}getMaterialType(){return y8}extendParams(J,Q,$){let Z=[];J.color=new B0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let Y=W.baseColorFactor;J.color.setRGB(Y[0],Y[1],Y[2],JJ),J.opacity=Y[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,s8))}return Promise.all(Z)}}class TK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class SK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let W=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new L0(W,W)}}return Promise.all(Z)}}class jK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class vK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class yK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_SHEEN}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new B0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let W=$.sheenColorFactor;Q.sheenColor.setRGB(W[0],W[1],W[2],JJ)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,s8));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class fK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class bK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_VOLUME}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let W=$.attenuationColor||[1,1,1];return Q.attenuationColor=new B0().setRGB(W[0],W[1],W[2],JJ),Promise.all(Z)}}class hK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_IOR}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class xK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let W=$.specularColorFactor||[1,1,1];if(Q.specularColor=new B0().setRGB(W[0],W[1],W[2],JJ),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,s8));return Promise.all(Z)}}class gK{constructor(J){this.parser=J,this.name=d0.EXT_MATERIALS_BUMP}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class pK{constructor(J){this.parser=J,this.name=d0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return M8(this.parser,J,this.name)!==null?$J:null}extendMaterialParams(J,Q){let $=M8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class lK{constructor(J){this.parser=J,this.name=d0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],Y=Q.options.ktx2Loader;if(!Y)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,Y)}}class mK{constructor(J){this.parser=J,this.name=d0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let Y=W.extensions[Q],X=Z.images[Y.source],K=$.textureLoader;if(X.uri){let H=$.options.manager.getHandler(X.uri);if(H!==null)K=H}return $.loadTextureImage(J,Y.source,K)}}class uK{constructor(J){this.parser=J,this.name=d0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let Y=W.extensions[Q],X=Z.images[Y.source],K=$.textureLoader;if(X.uri){let H=$.options.manager.getHandler(X.uri);if(H!==null)K=H}return $.loadTextureImage(J,Y.source,K)}}class kW{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),Y=this.parser.options.meshoptDecoder;if(!Y||!Y.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(X){let K=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,G=Z.byteStride,q=new Uint8Array(X,K,H);if(Y.decodeGltfBufferAsync)return Y.decodeGltfBufferAsync(U,G,q,Z.mode,Z.filter).then(function(E){return E.buffer});else return Y.ready.then(function(){let E=new ArrayBuffer(U*G);return Y.decodeGltfBuffer(new Uint8Array(E),U,G,q,Z.mode,Z.filter),E})})}else return null}}class dK{constructor(J){this.name=d0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let H of Z.primitives)if(H.mode!==GJ.TRIANGLES&&H.mode!==GJ.TRIANGLE_STRIP&&H.mode!==GJ.TRIANGLE_FAN&&H.mode!==void 0)return null;let Y=$.extensions[this.name].attributes,X=[],K={};for(let H in Y)X.push(this.parser.getDependency("accessor",Y[H]).then((U)=>{return K[H]=U,K[H]}));if(X.length<1)return null;return X.push(this.parser.createNodeMesh(J)),Promise.all(X).then((H)=>{let U=H.pop(),G=U.isGroup?U.children:[U],q=H[0].count,E=[];for(let F of G){let R=new v0,L=new T,N=new KJ,O=new T(1,1,1),M=new xQ(F.geometry,F.material,q);for(let B=0;B<q;B++){if(K.TRANSLATION)L.fromBufferAttribute(K.TRANSLATION,B);if(K.ROTATION)N.fromBufferAttribute(K.ROTATION,B);if(K.SCALE)O.fromBufferAttribute(K.SCALE,B);M.setMatrixAt(B,R.compose(L,N,O))}for(let B in K)if(B==="_COLOR_0"){let z=K[B];M.instanceColor=new C9(z.array,z.itemSize,z.normalized)}else if(B!=="TRANSLATION"&&B!=="ROTATION"&&B!=="SCALE")F.geometry.setAttribute(B,K[B]);G8.prototype.copy.call(M,F),this.parser.assignFinalMaterial(M),E.push(M)}if(U.isGroup)return U.clear(),U.add(...E),U;return E[0]})}}var cK="glTF",h7=12,_K={JSON:1313821514,BIN:5130562};class nK{constructor(J){this.name=d0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,h7),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==cK)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-h7,W=new DataView(J,h7),Y=0;while(Y<Z){let X=W.getUint32(Y,!0);Y+=4;let K=W.getUint32(Y,!0);if(Y+=4,K===_K.JSON){let H=new Uint8Array(J,h7+Y,X);this.content=$.decode(H)}else if(K===_K.BIN){let H=h7+Y;this.body=J.slice(H,H+X)}Y+=X}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class sK{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=d0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,Y=J.extensions[this.name].attributes,X={},K={},H={};for(let U in Y){let G=LW[U]||U.toLowerCase();X[G]=Y[U]}for(let U in J.attributes){let G=LW[U]||U.toLowerCase();if(Y[U]!==void 0){let q=$.accessors[J.attributes[U]],E=l6[q.componentType];H[G]=E.name,K[G]=q.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,q){Z.decodeDracoFile(U,function(E){for(let F in E.attributes){let R=E.attributes[F],L=K[F];if(L!==void 0)R.normalized=L}G(E)},X,H,JJ,q)})})}}class iK{constructor(){this.name=d0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class oK{constructor(){this.name=d0.KHR_MESH_QUANTIZATION}}class MW extends sJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let Y=0;Y!==Z;Y++)Q[Y]=$[W+Y];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,Y=this.sampleValues,X=this.valueSize,K=X*2,H=X*3,U=Z-Q,G=($-Q)/U,q=G*G,E=q*G,F=J*H,R=F-H,L=-2*E+3*q,N=E-q,O=1-L,M=N-q+G;for(let B=0;B!==X;B++){let z=Y[R+B+X],A=Y[R+B+K]*U,I=Y[F+B+X],P=Y[F+B]*U;W[B]=O*z+M*A+L*I+N*P}return W}}var Kq=new KJ;class aK extends MW{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return Kq.fromArray(W).normalize().toArray(W),W}}var GJ={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},l6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},CK={9728:n8,9729:T8,9984:BQ,9985:M6,9986:T9,9987:CJ},wK={33071:V6,33648:MQ,10497:G9},FW={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},LW={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},k9={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hq={CUBICSPLINE:void 0,LINEAR:AQ,STEP:zZ},OW={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uq(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new q8({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:U9});return J.DefaultMaterial}function d9(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function TJ(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function Gq(J,Q,$){let Z=!1,W=!1,Y=!1;for(let U=0,G=Q.length;U<G;U++){let q=Q[U];if(q.POSITION!==void 0)Z=!0;if(q.NORMAL!==void 0)W=!0;if(q.COLOR_0!==void 0)Y=!0;if(Z&&W&&Y)break}if(!Z&&!W&&!Y)return Promise.resolve(J);let X=[],K=[],H=[];for(let U=0,G=Q.length;U<G;U++){let q=Q[U];if(Z){let E=q.POSITION!==void 0?$.getDependency("accessor",q.POSITION):J.attributes.position;X.push(E)}if(W){let E=q.NORMAL!==void 0?$.getDependency("accessor",q.NORMAL):J.attributes.normal;K.push(E)}if(Y){let E=q.COLOR_0!==void 0?$.getDependency("accessor",q.COLOR_0):J.attributes.color;H.push(E)}}return Promise.all([Promise.all(X),Promise.all(K),Promise.all(H)]).then(function(U){let G=U[0],q=U[1],E=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=q;if(Y)J.morphAttributes.color=E;return J.morphTargetsRelative=!0,J})}function Eq(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qq(J){let Q,$=J.extensions&&J.extensions[d0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+RW($.attributes);else Q=J.indices+":"+RW(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+RW(J.targets[Z]);return Q}function RW(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function DW(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nq(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var Fq=new v0;class rK{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new Xq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,Y=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let X=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(X)===!0;let K=X.match(/Version\/(\d+)/);Z=$&&K?parseInt(K[1],10):-1,W=X.indexOf("Firefox")>-1,Y=W?X.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&Y<98)this.textureLoader=new j6(this.options.manager);else this.textureLoader=new oQ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new T7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(Y){return Y._markDefs&&Y._markDefs()}),Promise.all(this._invokeAll(function(Y){return Y.beforeRoot&&Y.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(Y){let X={scene:Y[0][Z.scene||0],scenes:Y[0],animations:Y[1],cameras:Y[2],asset:Z.asset,parser:$,userData:{}};return d9(W,X,Z),TJ(X,Z),Promise.all($._invokeAll(function(K){return K.afterRoot&&K.afterRoot(X)})).then(function(){for(let K of X.scenes)K.updateMatrixWorld();J(X)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let Y=Q[Z].joints;for(let X=0,K=Y.length;X<K;X++)J[Y[X]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let Y=J[Z];if(Y.mesh!==void 0){if(this._addNodeRef(this.meshCache,Y.mesh),Y.skin!==void 0)$[Y.mesh].isSkinnedMesh=!0}if(Y.camera!==void 0)this._addNodeRef(this.cameraCache,Y.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(Y,X)=>{let K=this.associations.get(Y);if(K!=null)this.associations.set(X,K);for(let[H,U]of Y.children.entries())W(U,X.children[H])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,Y){return $.getDependency(J,Y)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[d0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,Y){$.load(O9.resolveURL(Q.uri,Z.path),W,void 0,function(){Y(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let Y=FW[Z.type],X=l6[Z.componentType],K=Z.normalized===!0,H=new X(Z.count*Y);return Promise.resolve(new V8(H,Y,K))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(Y){let X=Y[0],K=FW[Z.type],H=l6[Z.componentType],U=H.BYTES_PER_ELEMENT,G=U*K,q=Z.byteOffset||0,E=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,F=Z.normalized===!0,R,L;if(E&&E!==G){let N=Math.floor(q/E),O="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,M=Q.cache.get(O);if(!M)R=new H(X,N*E,Z.count*E/U),M=new C6(R,E/U),Q.cache.add(O,M);L=new H9(M,K,q%E/U,F)}else{if(X===null)R=new H(Z.count*K);else R=new H(X,q,Z.count*K);L=new V8(R,K,F)}if(Z.sparse!==void 0){let N=FW.SCALAR,O=l6[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,B=Z.sparse.values.byteOffset||0,z=new O(Y[1],M,Z.sparse.count*N),A=new H(Y[2],B,Z.sparse.count*K);if(X!==null)L=new V8(L.array.slice(),L.itemSize,L.normalized);L.normalized=!1;for(let I=0,P=z.length;I<P;I++){let D=z[I];if(L.setX(D,A[I*K]),K>=2)L.setY(D,A[I*K+1]);if(K>=3)L.setZ(D,A[I*K+2]);if(K>=4)L.setW(D,A[I*K+3]);if(K>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}L.normalized=F}return L})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,Y=Q.images[W],X=this.textureLoader;if(Y.uri){let K=$.manager.getHandler(Y.uri);if(K!==null)X=K}return this.loadTextureImage(J,W,X)}loadTextureImage(J,Q,$){let Z=this,W=this.json,Y=W.textures[J],X=W.images[Q],K=(X.uri||X.bufferView)+":"+Y.sampler;if(this.textureCache[K])return this.textureCache[K];let H=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=Y.name||X.name||"",U.name===""&&typeof X.uri==="string"&&X.uri.startsWith("data:image/")===!1)U.name=X.uri;let q=(W.samplers||{})[Y.sampler]||{};return U.magFilter=CK[q.magFilter]||T8,U.minFilter=CK[q.minFilter]||CJ,U.wrapS=wK[q.wrapS]||G9,U.wrapT=wK[q.wrapT]||G9,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==n8&&U.minFilter!==T8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[K]=H,H}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let Y=Z.images[J],X=self.URL||self.webkitURL,K=Y.uri||"",H=!1;if(Y.bufferView!==void 0)K=$.getDependency("bufferView",Y.bufferView).then(function(G){H=!0;let q=new Blob([G],{type:Y.mimeType});return K=X.createObjectURL(q),K});else if(Y.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(K).then(function(G){return new Promise(function(q,E){let F=q;if(Q.isImageBitmapLoader===!0)F=function(R){let L=new D8(R);L.needsUpdate=!0,q(L)};Q.load(O9.resolveURL(G,W.path),F,void 0,E)})}).then(function(G){if(H===!0)X.revokeObjectURL(K);return TJ(G,Y),G.userData.mimeType=Y.mimeType||Nq(Y.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",K),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(Y){if(!Y)return null;if($.texCoord!==void 0&&$.texCoord>0)Y=Y.clone(),Y.channel=$.texCoord;if(W.extensions[d0.KHR_TEXTURE_TRANSFORM]){let X=$.extensions!==void 0?$.extensions[d0.KHR_TEXTURE_TRANSFORM]:void 0;if(X){let K=W.associations.get(Y);Y=W.extensions[d0.KHR_TEXTURE_TRANSFORM].extendTexture(Y,X),W.associations.set(Y,K)}}if(Z!==void 0)Y.colorSpace=Z;return J[Q]=Y,Y})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,Y=Q.attributes.normal===void 0;if(J.isPoints){let X="PointsMaterial:"+$.uuid,K=this.cache.get(X);if(!K)K=new b9,i8.prototype.copy.call(K,$),K.color.copy($.color),K.map=$.map,K.sizeAttenuation=!1,this.cache.add(X,K);$=K}else if(J.isLine){let X="LineBasicMaterial:"+$.uuid,K=this.cache.get(X);if(!K)K=new w7,i8.prototype.copy.call(K,$),K.color.copy($.color),K.map=$.map,this.cache.add(X,K);$=K}if(Z||W||Y){let X="ClonedMaterial:"+$.uuid+":";if(Z)X+="derivative-tangents:";if(W)X+="vertex-colors:";if(Y)X+="flat-shading:";let K=this.cache.get(X);if(!K){if(K=$.clone(),W)K.vertexColors=!0;if(Y)K.flatShading=!0;if(Z){if(K.normalScale)K.normalScale.y*=-1;if(K.clearcoatNormalScale)K.clearcoatNormalScale.y*=-1}this.cache.add(X,K),this.associations.set(K,this.associations.get($))}$=K}J.material=$}getMaterialType(){return q8}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],Y,X={},K=W.extensions||{},H=[];if(K[d0.KHR_MATERIALS_UNLIT]){let G=Z[d0.KHR_MATERIALS_UNLIT];Y=G.getMaterialType(),H.push(G.extendParams(X,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(X.color=new B0(1,1,1),X.opacity=1,Array.isArray(G.baseColorFactor)){let q=G.baseColorFactor;X.color.setRGB(q[0],q[1],q[2],JJ),X.opacity=q[3]}if(G.baseColorTexture!==void 0)H.push(Q.assignTexture(X,"map",G.baseColorTexture,s8));if(X.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,X.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)H.push(Q.assignTexture(X,"metalnessMap",G.metallicRoughnessTexture)),H.push(Q.assignTexture(X,"roughnessMap",G.metallicRoughnessTexture));Y=this._invokeOne(function(q){return q.getMaterialType&&q.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(q){return q.extendMaterialParams&&q.extendMaterialParams(J,X)})))}if(W.doubleSided===!0)X.side=c8;let U=W.alphaMode||OW.OPAQUE;if(U===OW.BLEND)X.transparent=!0,X.depthWrite=!1;else if(X.transparent=!1,U===OW.MASK)X.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&Y!==y8){if(H.push(Q.assignTexture(X,"normalMap",W.normalTexture)),X.normalScale=new L0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;X.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&Y!==y8){if(H.push(Q.assignTexture(X,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)X.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&Y!==y8){let G=W.emissiveFactor;X.emissive=new B0().setRGB(G[0],G[1],G[2],JJ)}if(W.emissiveTexture!==void 0&&Y!==y8)H.push(Q.assignTexture(X,"emissiveMap",W.emissiveTexture,s8));return Promise.all(H).then(function(){let G=new Y(X);if(W.name)G.name=W.name;if(TJ(G,W),Q.associations.set(G,{materials:J}),W.extensions)d9(Z,G,W);return G})}createUniqueName(J){let Q=e0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(X){return $[d0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(X,Q).then(function(K){return IK(K,X,Q)})}let Y=[];for(let X=0,K=J.length;X<K;X++){let H=J[X],U=qq(H),G=Z[U];if(G)Y.push(G.promise);else{let q;if(H.extensions&&H.extensions[d0.KHR_DRACO_MESH_COMPRESSION])q=W(H);else q=IK(new N8,H,Q);Z[U]={primitive:H,promise:q},Y.push(q)}}return Promise.all(Y)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],Y=W.primitives,X=[];for(let K=0,H=Y.length;K<H;K++){let U=Y[K].material===void 0?Uq(this.cache):this.getDependency("material",Y[K].material);X.push(U)}return X.push(Q.loadGeometries(Y)),Promise.all(X).then(function(K){let H=K.slice(0,K.length-1),U=K[K.length-1],G=[];for(let E=0,F=U.length;E<F;E++){let R=U[E],L=Y[E],N,O=H[E];if(L.mode===GJ.TRIANGLES||L.mode===GJ.TRIANGLE_STRIP||L.mode===GJ.TRIANGLE_FAN||L.mode===void 0){if(N=W.isSkinnedMesh===!0?new hQ(R,O):new y0(R,O),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(L.mode===GJ.TRIANGLE_STRIP)N.geometry=NW(N.geometry,L7);else if(L.mode===GJ.TRIANGLE_FAN)N.geometry=NW(N.geometry,z6)}else if(L.mode===GJ.LINES)N=new gQ(R,O);else if(L.mode===GJ.LINE_STRIP)N=new P6(R,O);else if(L.mode===GJ.LINE_LOOP)N=new pQ(R,O);else if(L.mode===GJ.POINTS)N=new A6(R,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+L.mode);if(Object.keys(N.geometry.morphAttributes).length>0)Eq(N,W);if(N.name=Q.createUniqueName(W.name||"mesh_"+J),TJ(N,W),L.extensions)d9(Z,N,L);Q.assignFinalMaterial(N),G.push(N)}for(let E=0,F=G.length;E<F;E++)Q.associations.set(G[E],{meshes:J,primitives:E});if(G.length===1){if(W.extensions)d9(Z,G[0],W);return G[0]}let q=new O8;if(W.extensions)d9(Z,q,W);Q.associations.set(q,{meshes:J});for(let E=0,F=G.length;E<F;E++)q.add(G[E]);return q})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new w8(_6.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new aJ(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return TJ(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),Y=Z,X=[],K=[];for(let H=0,U=Y.length;H<U;H++){let G=Y[H];if(G){X.push(G);let q=new v0;if(W!==null)q.fromArray(W.array,H*16);K.push(q)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[H])}return new _7(X,K)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,Y=[],X=[],K=[],H=[],U=[];for(let G=0,q=Z.channels.length;G<q;G++){let E=Z.channels[G],F=Z.samplers[E.sampler],R=E.target,L=R.node,N=Z.parameters!==void 0?Z.parameters[F.input]:F.input,O=Z.parameters!==void 0?Z.parameters[F.output]:F.output;if(R.node===void 0)continue;Y.push(this.getDependency("node",L)),X.push(this.getDependency("accessor",N)),K.push(this.getDependency("accessor",O)),H.push(F),U.push(R)}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(H),Promise.all(U)]).then(function(G){let q=G[0],E=G[1],F=G[2],R=G[3],L=G[4],N=[];for(let M=0,B=q.length;M<B;M++){let z=q[M],A=E[M],I=F[M],P=R[M],D=L[M];if(z===void 0)continue;if(z.updateMatrix)z.updateMatrix();let C=$._createAnimationTracks(z,A,I,P,D);if(C)for(let x=0;x<C.length;x++)N.push(C[x])}let O=new dQ(W,void 0,N);return TJ(O,Z),O})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let Y=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)Y.traverse(function(X){if(!X.isMesh)return;for(let K=0,H=Z.weights.length;K<H;K++)X.morphTargetInfluences[K]=Z.weights[K]});return Y})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),Y=[],X=Z.children||[];for(let H=0,U=X.length;H<U;H++)Y.push($.getDependency("node",X[H]));let K=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(Y),K]).then(function(H){let U=H[0],G=H[1],q=H[2];if(q!==null)U.traverse(function(E){if(!E.isSkinnedMesh)return;E.bind(q,Fq)});for(let E=0,F=G.length;E<F;E++)U.add(G[E]);if(U.userData.pivot!==void 0&&G.length>0){let E=U.userData.pivot,F=G[0];U.pivot=new T().fromArray(E),U.position.x-=E[0],U.position.y-=E[1],U.position.z-=E[2],F.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],Y=W.name?Z.createUniqueName(W.name):"",X=[],K=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(K)X.push(K);if(W.camera!==void 0)X.push(Z.getDependency("camera",W.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,W.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){X.push(H)}),this.nodeCache[J]=Promise.all(X).then(function(H){let U;if(W.isBone===!0)U=new B7;else if(H.length>1)U=new O8;else if(H.length===1)U=H[0];else U=new G8;if(U!==H[0])for(let G=0,q=H.length;G<q;G++)U.add(H[G]);if(W.name)U.userData.name=W.name,U.name=Y;if(TJ(U,W),W.extensions)d9($,U,W);if(W.matrix!==void 0){let G=new v0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new O8;if($.name)W.name=Z.createUniqueName($.name);if(TJ(W,$),$.extensions)d9(Q,W,$);let Y=$.nodes||[],X=[];for(let K=0,H=Y.length;K<H;K++)X.push(Z.getDependency("node",Y[K]));return Promise.all(X).then(function(K){for(let U=0,G=K.length;U<G;U++){let q=K[U];if(q.parent!==null)W.add(BK(q));else W.add(q)}let H=(U)=>{let G=new Map;for(let[q,E]of Z.associations)if(q instanceof i8||q instanceof D8)G.set(q,E);return U.traverse((q)=>{let E=Z.associations.get(q);if(E!=null)G.set(q,E)}),G};return Z.associations=H(W),W})}_createAnimationTracks(J,Q,$,Z,W){let Y=[],X=J.name?J.name:J.uuid,K=[];function H(E){if(E.morphTargetInfluences)K.push(E.name?E.name:E.uuid)}if(k9[W.path]===k9.weights){if(H(J),J.isGroup)J.children.forEach(H)}else K.push(X);let U;switch(k9[W.path]){case k9.weights:U=lJ;break;case k9.rotation:U=iJ;break;case k9.translation:case k9.scale:U=mJ;break;default:switch($.itemSize){case 1:U=lJ;break;case 2:case 3:default:U=mJ;break}break}let G=Z.interpolation!==void 0?Hq[Z.interpolation]:AQ,q=this._getArrayFromAccessor($);for(let E=0,F=K.length;E<F;E++){let R=new U(K[E]+"."+k9[W.path],Q.array,q,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);Y.push(R)}return Y}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=DW(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,Y=Q.length;W<Y;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof iJ?aK:MW)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Oq(J,Q,$){let Z=Q.attributes,W=new j8;if(Z.POSITION!==void 0){let K=$.json.accessors[Z.POSITION],H=K.min,U=K.max;if(H!==void 0&&U!==void 0){if(W.set(new T(H[0],H[1],H[2]),new T(U[0],U[1],U[2])),K.normalized){let G=DW(l6[K.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let Y=Q.targets;if(Y!==void 0){let K=new T,H=new T;for(let U=0,G=Y.length;U<G;U++){let q=Y[U];if(q.POSITION!==void 0){let E=$.json.accessors[q.POSITION],F=E.min,R=E.max;if(F!==void 0&&R!==void 0){if(H.setX(Math.max(Math.abs(F[0]),Math.abs(R[0]))),H.setY(Math.max(Math.abs(F[1]),Math.abs(R[1]))),H.setZ(Math.max(Math.abs(F[2]),Math.abs(R[2]))),E.normalized){let L=DW(l6[E.componentType]);H.multiplyScalar(L)}K.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(K)}J.boundingBox=W;let X=new QJ;W.getCenter(X.center),X.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=X}function IK(J,Q,$){let Z=Q.attributes,W=[];function Y(X,K){return $.getDependency("accessor",X).then(function(H){J.setAttribute(K,H)})}for(let X in Z){let K=LW[X]||X.toLowerCase();if(K in J.attributes)continue;W.push(Y(Z[X],K))}if(Q.indices!==void 0&&!J.index){let X=$.getDependency("accessor",Q.indices).then(function(K){J.setIndex(K)});W.push(X)}if(x0.workingColorSpace!==JJ&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${x0.workingColorSpace}" not supported.`);return TJ(J,Q),Oq(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?Gq(J,Q.targets,$):J})}var Rq=new VW,kq=new j6;async function BW(J){try{let Q=await fetch(J,{method:"HEAD"});if(!Q.ok)return!1;return!(Q.headers.get("content-type")??"").includes("text/html")}catch{return!1}}async function zW(J){let Q=`${Z$}/models/${J}.glb`;if(!await BW(Q))return null;try{return(await Rq.loadAsync(Q)).scene}catch($){return console.warn(`[game3d] failed to load ${Q}`,$),null}}function m6(J,Q,$,Z=0){zW(Q).then((W)=>{if(!W)return;let X=new j8().setFromObject(W).getSize(new T),K=Math.max(X.x,X.z,0.001),H=$/K;W.scale.setScalar(H);let U=new j8().setFromObject(W);W.position.y+=Z-U.min.y,W.traverse((G)=>{if(G.isMesh)G.castShadow=!0,G.receiveShadow=!0}),J.clear(),J.add(W)})}async function _W(J){for(let Q of["png","jpg","webp"]){let $=`${Z$}/textures/${J}.${Q}`;if(await BW($))try{let Z=await kq.loadAsync($);return Z.colorSpace=s8,Z}catch(Z){console.warn(`[game3d] failed to load ${$}`,Z)}}return null}async function Y$(J){let Q=`${Z$}/audio/${J}.mp3`;if(!await BW(Q))return null;let $=new Audio(Q);return $.preload="auto",$}function Lq(J){return J.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}var Dq=eK.map((J)=>({id:Lq(J.company),kind:"role",title:J.company,subtitle:J.role,period:J.period,location:J.location,note:J.note,color:J.brand??"#6c9bff",bullets:J.highlights,chips:J.stack??[],years:Math.max(0.5,J.end-J.start),current:J.current})),Vq=[...new Set(CW.flatMap((J)=>J.tags))].slice(0,8),Mq={id:"projects-park",kind:"projects",title:"Side Projects Park",subtitle:"Built for the love of it",note:"Games, tools and experiments outside of work.",color:"#db2777",bullets:CW.map((J)=>{let Q=J.description.split(/(?<=\.)\s/)[0]??J.description;return`${J.name}: ${Q}`}),chips:Vq,years:2.2},wW=[...Dq,Mq],u6=tK;function JH(J,Q){Bq(J),zq(J),_q(J,Q),Cq(J),wq(J,Q),Iq(J)}function Bq(J){let Q=new y8({map:MK(RK,kK,LK),side:g8,fog:!1,depthWrite:!1}),$=new y0(new VJ(480,24,16),Q);J.add($),_W("sky-panorama").then((U)=>{if(!U)return;U.mapping=D6,Q.map=U,Q.needsUpdate=!0});let Z=u9(7),W=700,Y=new Float32Array(W*3);for(let U=0;U<W;U++){let G=Z()*Math.PI*2,q=Math.acos(Z()*0.85),E=430;Y[U*3]=430*Math.sin(q)*Math.cos(G),Y[U*3+1]=430*Math.cos(q)+10,Y[U*3+2]=430*Math.sin(q)*Math.sin(G)}let X=new N8;X.setAttribute("position",new V8(Y,3));let K=new A6(X,new b9({color:13621503,size:1.4,sizeAttenuation:!1,fog:!1}));J.add(K);let H=new y0(new S6(13,24),new y8({color:16774095,fog:!1,toneMapped:!1}));H.position.set(-170,130,-300),H.lookAt(0,0,0),J.add(H)}function zq(J){let Q=new S6(NK,96);Q.rotateX(-Math.PI/2);let $=u9(42),Z=Q.attributes.position;for(let X=0;X<Z.count;X++){let K=Z.getX(X),H=Z.getZ(X),U=Math.hypot(K,H),G=Math.max(0,U-(o8+UJ+14));Z.setY(X,G>0?$()*Math.min(G*0.12,7):0)}Q.computeVertexNormals();let W=new q8({color:1251884,roughness:1,flatShading:!0}),Y=new y0(Q,W);Y.receiveShadow=!0,J.add(Y),_W("ground").then((X)=>{if(!X)return;X.wrapS=X.wrapT=G9,X.repeat.set(24,24),W.map=X,W.color.set(16777215),W.needsUpdate=!0})}function _q(J,Q){let $=new q8({color:1777712,roughness:0.95}),Z=new y0(new P7(o8-3,o8+3,96),$);Z.rotation.x=-Math.PI/2,Z.position.y=0.03,Z.receiveShadow=!0,J.add(Z);for(let W of Q){let Y=new y0(new h9(3.4,o8),$);Y.rotation.x=-Math.PI/2,Y.rotation.z=-W-Math.PI/2,Y.position.set(Math.cos(W)*o8/2,0.02,Math.sin(W)*o8/2),Y.receiveShadow=!0,J.add(Y)}}function Cq(J){let Q=new d8(0.08,0.1,3.4,6),$=new VJ(0.28,8,6),Z=new q8({color:2765126,roughness:0.7}),W=new q8({color:3350278,emissive:16760934,emissiveIntensity:3}),Y=new O8,X=22;for(let K=0;K<22;K++){let H=K/22*Math.PI*2+0.14,U=o8+4.6,G=new O8,q=new y0(Q,Z);q.position.y=1.7;let E=new y0($,W);E.position.y=3.5,G.add(q,E),G.position.set(Math.cos(H)*U,0,Math.sin(H)*U),Y.add(G)}J.add(Y)}function wq(J,Q){let $=u9(1337),Z=new d8(0.16,0.22,1,5),W=new q8({color:3811872,roughness:1}),Y=new I7(1.15,2.6,6),X=[1919542,2185788,1523012].map((G)=>new q8({color:G,roughness:1,flatShading:!0})),K=Q.map((G)=>({x:Math.cos(G)*o8,z:Math.sin(G)*o8})),H=new O8,U=0;while(U<110){let G=12+$()*95,q=$()*Math.PI*2,E=Math.cos(q)*G,F=Math.sin(q)*G;if(Math.abs(G-o8)<5.5)continue;if(K.some((M)=>Math.hypot(E-M.x,F-M.z)<UJ+3))continue;let R=new O8,L=0.7+$()*1,N=new y0(Z,W);N.position.y=0.5*L,N.scale.setScalar(L);let O=new y0(Y,X[Math.floor($()*X.length)]);O.position.y=2.3*L,O.scale.setScalar(L),O.castShadow=!0,R.add(N,O),R.position.set(E,0,F),R.rotation.y=$()*Math.PI,H.add(R),U++}J.add(H),zW("tree").then((G)=>{if(!G)return;let E=new j8().setFromObject(G).getSize(new T),F=Math.max(E.x,E.z,0.001);for(let R of H.children){let L=R.children[1]?.scale.x??1,N=G.clone();N.scale.setScalar(2.6/F*L);let O=new j8().setFromObject(N);N.position.y-=O.min.y,R.clear(),R.add(N)}})}function Iq(J){let Q=new y0(new d8(7,7.8,0.5,24),new q8({color:2239040,roughness:0.8,flatShading:!0}));Q.position.y=0.25,Q.receiveShadow=!0,J.add(Q);let $=new y0(new x9(5.6,0.14,8,48),new q8({color:1053988,emissive:7117823,emissiveIntensity:2.4}));$.rotation.x=-Math.PI/2,$.position.y=0.55,J.add($);let Z=new w6(new f9({map:W$(u6.name,"#6c9bff",u6.title),toneMapped:!1,depthWrite:!1}));Z.scale.set(13,4.9,1),Z.position.set(0,8.5,0),Z.name="plaza-sign",J.add(Z);let W=new O8;W.position.set(0,0.5,0),J.add(W),m6(W,"monument",6)}function QH(J){let Q=wW.length;return wW.map(($,Z)=>{let W=-Math.PI/2+Z/Q*Math.PI*2,Y=new T(Math.cos(W)*o8,0,Math.sin(W)*o8);return Pq(J,$,W,Y,Z)})}function Pq(J,Q,$,Z,W){let Y=u9(1000+W*97),X=new O8;X.position.copy(Z),J.add(X);let K=new B0(Q.color),H=new B0(1317678).lerp(K,0.12),U=new y0(new d8(UJ,UJ+0.7,0.34,24),new q8({color:H,roughness:0.9,flatShading:!0}));U.position.y=0.17,U.receiveShadow=!0,X.add(U);let G=new q8({color:790816,emissive:K,emissiveIntensity:0.35}),q=new y0(new x9(UJ+0.25,0.16,8,56),G);q.rotation.x=-Math.PI/2,q.position.y=0.4,X.add(q);let E=[],F=Math.min(7,3+Math.floor(Q.years*0.9));for(let B=0;B<F;B++){let z=B/F*Math.PI*2+Y()*0.5,A=B===0?0:3.2+Y()*3.4,I=2+Y()*1.4,P=2+Y()*1.4,D=3.2+Q.years*1.7+Y()*2.4-(B===0?0:Y()*2),C=new q8({color:new B0(2305092).offsetHSL(0,0,(Y()-0.5)*0.05),roughness:0.85,flatShading:!0,emissive:16777215,emissiveMap:VK(Q.color,W*31+B),emissiveIntensity:1.05}),x=new y0(new cJ(I,D,P),C);if(x.position.set(Math.cos(z)*A,D/2+0.34,Math.sin(z)*A),x.rotation.y=Y()*Math.PI*0.5,x.castShadow=!0,x.receiveShadow=!0,X.add(x),E.push({mesh:x,mat:C,phase:Y()*Math.PI*2}),B===0){let w=new y0(new cJ(I*0.7,0.22,P*0.7),new q8({color:790816,emissive:K,emissiveIntensity:2.2}));w.position.set(x.position.x,D+0.45,x.position.z),w.rotation.y=x.rotation.y,X.add(w);let l=new y0(new d8(0.05,0.05,1.6,5),new q8({color:3752284}));l.position.set(x.position.x,D+1.3,x.position.z),X.add(l);let c=new y0(new VJ(0.16,8,6),new q8({color:2098437,emissive:16729173,emissiveIntensity:3}));c.position.set(x.position.x,D+2.15,x.position.z),X.add(c)}}let R=new w6(new f9({map:W$(Q.title,Q.color,Q.kind==="role"?Q.period:Q.subtitle),toneMapped:!1,depthWrite:!1})),L=new L0(10,3.75);R.scale.set(L.x,L.y,1);let O=3.2+Q.years*1.7+2.4+3.6;R.position.set(0,O,0),X.add(R);let M=new O8;return M.position.set(0,0.34,0),X.add(M),m6(M,`landmark-${Q.id}`,UJ*1.1),{def:Q,angle:$,center:Z,group:X,ringMat:G,sign:R,signBaseScale:L,signBaseY:O,buildings:E,activation:0}}function $H(J,Q,$,Z){for(let W of J){let Y=W===Q?1:0;W.activation+=(Y-W.activation)*Math.min(1,$*4);let X=W.activation;W.ringMat.emissiveIntensity=0.35+X*(2.6+Math.sin(Z*5)*0.5);for(let H of W.buildings){H.mat.emissiveIntensity=1.05+X*1.2;let U=1+X*0.07*(1+Math.sin(Z*3+H.phase)*0.4);H.mesh.scale.y+=(U-H.mesh.scale.y)*Math.min(1,$*6)}let K=1+X*0.18;W.sign.scale.set(W.signBaseScale.x*K,W.signBaseScale.y*K,1),W.sign.position.y=W.signBaseY+X*0.9+Math.sin(Z*1.6+W.angle)*0.18,W.sign.material.opacity=1-X*0.92}}function ZH(J,Q){let $=new O8;J.add($);let Z=new O8;$.add(Z);let W=new q8({color:10135232,metalness:0.7,roughness:0.3,flatShading:!0}),Y=new y0(new d8(2.7,1.4,0.7,12),W);Z.add(Y);let X=new y0(new d8(1.4,0.7,0.5,12),W);X.position.y=-0.55,Z.add(X);let K=new y0(new VJ(1.15,12,8,0,Math.PI*2,0,Math.PI/2),new q8({color:9426175,metalness:0.1,roughness:0.15,transparent:!0,opacity:0.85,emissive:2782888,emissiveIntensity:0.6}));K.position.y=0.35,Z.add(K);let H=new O8,U=new VJ(0.16,8,6),G=new q8({color:404016,emissive:8188927,emissiveIntensity:3});for(let M=0;M<10;M++){let B=M/10*Math.PI*2,z=new y0(U,G);z.position.set(Math.cos(B)*2.45,-0.1,Math.sin(B)*2.45),H.add(z)}Z.add(H),Z.traverse((M)=>{if(M.isMesh)M.castShadow=!0}),m6(Z,"ufo",5.4,-1);let q=new y8({color:9431295,transparent:!0,opacity:0,side:c8,depthWrite:!1,blending:I9}),E=new y0(new d8(0.7,5.6,b7,24,1,!0),q);E.position.y=-b7/2,$.add(E);let F=new y6(8177919,60,40,1.8);F.position.y=-1.2,$.add(F);let R=new T(0,b7,9),L=new T,N=0;function O(M,B,z,A,I){let P=z?OK:FK;L.x+=B.x*qW*M,L.z+=B.z*qW*M;let D=Math.exp(-2.6*M);if(L.multiplyScalar(D),L.length()>P)L.setLength(P);R.x+=L.x*M,R.z+=L.z*M;let C=Math.hypot(R.x,R.z);if(C>Q$)R.x*=Q$/C,R.z*=Q$/C;let x=Q?0:Math.sin(I*2.1)*0.3;if(R.y=b7+x,$.position.copy(R),$.rotation.z=_6.lerp($.rotation.z,-L.x*0.011,0.12),$.rotation.x=_6.lerp($.rotation.x,L.z*0.011,0.12),Z.rotation.y+=M*(Q?0.2:0.7),H.rotation.y-=M*1.6,N=A?0.16:0,q.opacity+=(N-q.opacity)*Math.min(1,M*5),E.visible=q.opacity>0.01,E.visible&&!Q)E.rotation.y+=M*0.8,E.scale.x=E.scale.z=1+Math.sin(I*6)*0.04;F.intensity=A?110:60}return{group:$,position:R,velocity:L,beamMat:q,update:O}}class IW{keys=new Set;dragOrigin=null;dragVec={x:0,z:0};steered=!1;constructor(J){window.addEventListener("keydown",($)=>{if($.repeat)return;if(this.keys.add($.key.toLowerCase()),this.dir().x!==0||this.dir().z!==0)this.steered=!0}),window.addEventListener("keyup",($)=>this.keys.delete($.key.toLowerCase())),window.addEventListener("blur",()=>this.keys.clear()),J.addEventListener("pointerdown",($)=>{this.dragOrigin={x:$.clientX,y:$.clientY},J.setPointerCapture($.pointerId)}),J.addEventListener("pointermove",($)=>{if(!this.dragOrigin)return;let Z=($.clientX-this.dragOrigin.x)/70,W=($.clientY-this.dragOrigin.y)/70,Y=Math.hypot(Z,W),X=Y>1?1/Y:1;if(this.dragVec={x:Z*X,z:W*X},Y>0.15)this.steered=!0});let Q=()=>{this.dragOrigin=null,this.dragVec={x:0,z:0}};J.addEventListener("pointerup",Q),J.addEventListener("pointercancel",Q)}dir(){let J=0,Q=0;if(this.keys.has("w")||this.keys.has("arrowup"))Q-=1;if(this.keys.has("s")||this.keys.has("arrowdown"))Q+=1;if(this.keys.has("a")||this.keys.has("arrowleft"))J-=1;if(this.keys.has("d")||this.keys.has("arrowright"))J+=1;J+=this.dragVec.x,Q+=this.dragVec.z;let $=Math.hypot(J,Q);if($>1)J/=$,Q/=$;return{x:J,z:Q}}boost(){return this.keys.has("shift")}}var Aq=4;function WH(J){J.insertAdjacentHTML("beforeend",`
    <div class="g3d-topbar">
      <div class="g3d-brand">
        <span class="g3d-brand-dot"></span>
        <span class="g3d-brand-name">${u6.name}</span>
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
        <div class="g3d-intro-kicker">${u6.title}</div>
        <h1>Jevgeni City</h1>
        <p>A low-poly flyover of my career. Every district is a company I worked at; hover above one with your saucer and it lights up with the story.</p>
        <button class="g3d-btn g3d-btn-primary" data-action="start">\uD83D\uDEF8 Take off</button>
      </div>
    </div>
  `);let Q=J.querySelector(".g3d-card"),$=J.querySelector(".g3d-intro"),Z=J.querySelector(".g3d-hint"),W=J.querySelector('[data-action="tour"]'),Y=J.querySelector('[data-action="sound"]'),X=J.querySelector('[data-action="start"]'),K=null;function H(G){if(K===G.id)return;K=G.id;let q=G.bullets.slice(0,Aq),E=G.bullets.length-q.length;Q.style.setProperty("--accent",G.color),Q.innerHTML=`
      <header>
        <span class="g3d-card-dot"></span>
        <div>
          <h2>${c9(G.title)}${G.current?'<span class="g3d-now">now</span>':""}</h2>
          <div class="g3d-card-role">${c9(G.subtitle)}</div>
          ${G.period?`<div class="g3d-card-meta">${c9(G.period)}${G.location?" · "+c9(G.location):""}</div>`:""}
        </div>
      </header>
      ${G.note?`<p class="g3d-card-note">${c9(G.note)}</p>`:""}
      <ul>
        ${q.map((F,R)=>`<li style="--i:${R}">${c9(F)}</li>`).join("")}
      </ul>
      ${E>0?`<div class="g3d-card-more">+ ${E} more in the CV</div>`:""}
      <div class="g3d-chips">
        ${G.chips.map((F)=>`<span>${c9(F)}</span>`).join("")}
      </div>
    `,Q.classList.remove("visible"),Q.offsetWidth,Q.classList.add("visible")}function U(){K=null,Q.classList.remove("visible")}return{showCard:H,hideCard:U,onStart(G){X.addEventListener("click",()=>{$.classList.add("g3d-hidden"),Z.classList.add("g3d-show"),window.setTimeout(()=>Z.classList.add("g3d-fade"),7000),G()})},onTour(G){W.addEventListener("click",()=>{let q=G();W.textContent=q?"⏸ Stop tour":"▶ Tour"})},onSound(G){Y.addEventListener("click",()=>{let q=G();Y.textContent=q?"\uD83D\uDD0A Sound":"\uD83D\uDD07 Muted"})},setTourActive(G){W.textContent=G?"⏸ Stop tour":"▶ Tour"}}}function c9(J){return J.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Tq=["ambient-town","ufo-hum"],Sq=["scan-reveal","ui-click","takeoff"];class PW{loops=new Map;sfx=new Map;voice=null;voices=new Map;enabled=!0;started=!1;async preload(J){await Promise.all([...Tq.map(async(Q)=>{let $=await Y$(Q);if($)$.loop=!0,$.volume=Q==="ambient-town"?0.35:0.22,this.loops.set(Q,$)}),...Sq.map(async(Q)=>{let $=await Y$(Q);if($)this.sfx.set(Q,$)}),...J.map(async(Q)=>{let $=await Y$(`vo-${Q}`);if($)$.volume=0.9,this.voices.set(Q,$)})])}start(){if(this.started=!0,!this.enabled)return;for(let J of this.loops.values())J.play().catch(()=>{});this.play("takeoff")}play(J){if(!this.enabled||!this.started)return;let Q=this.sfx.get(J);if(!Q)return;Q.currentTime=0,Q.play().catch(()=>{})}playVoice(J){if(!this.enabled||!this.started)return;this.stopVoice();let Q=this.voices.get(J)??null;if(this.voice=Q,Q)Q.currentTime=0,Q.play().catch(()=>{})}stopVoice(){if(this.voice)this.voice.pause();this.voice=null}toggle(){if(this.enabled=!this.enabled,!this.enabled){for(let J of this.loops.values())J.pause();this.stopVoice()}else if(this.started)for(let J of this.loops.values())J.play().catch(()=>{});return this.enabled}}var YH=document.getElementById("app"),XH=window.matchMedia("(prefers-reduced-motion: reduce)").matches,SJ=new XW({antialias:!0});SJ.setPixelRatio(Math.min(window.devicePixelRatio,2));SJ.setSize(window.innerWidth,window.innerHeight);SJ.shadowMap.enabled=!0;SJ.shadowMap.type=w9;SJ.toneMapping=P9;SJ.toneMappingExposure=1.05;YH.appendChild(SJ.domElement);var L9=new yQ;L9.fog=new M7(DK,110,360);var s6=new w8(55,window.innerWidth/window.innerHeight,0.1,900);L9.add(new cQ(4478335,922144,1));var tJ=new f6(12570879,0.9);tJ.position.set(-60,90,-40);tJ.castShadow=!0;tJ.shadow.mapSize.set(2048,2048);tJ.shadow.camera.left=-75;tJ.shadow.camera.right=75;tJ.shadow.camera.top=75;tJ.shadow.camera.bottom=-75;tJ.shadow.camera.far=260;L9.add(tJ);var i6=QH(L9);JH(L9,i6.map((J)=>J.angle));var rJ=ZH(L9,XH),g7=new UW(SJ);g7.addPass(new GW(L9,s6));var jq=new m9(new L0(window.innerWidth,window.innerHeight),$$.strength,$$.radius,$$.threshold);g7.addPass(jq);g7.addPass(new EW);var c6=WH(YH),n6=new PW;n6.preload(i6.map((J)=>J.def.id));var X$=new IW(SJ.domElement),x7=!1;c6.onStart(()=>{x7=!0,n6.start()});c6.onSound(()=>n6.toggle());var n9=!1,d6=-1,K$=0;c6.onTour(()=>{if(n9=!n9,n9)X$.steered=!1,d6=-1,K$=0;return n9});function vq(J){if(d6===-1)d6=0;let Q=i6[d6].center,$=Q.x-rJ.position.x,Z=Q.z-rJ.position.z,W=Math.hypot($,Z);if(W<UJ*0.4){if(K$+=J,K$>7)K$=0,d6=(d6+1)%i6.length;return{x:0,z:0}}let Y=Math.min(1,W/14);return{x:$/W*Y,z:Z/W*Y}}var EJ=null;function yq(){let J=rJ.position.x,Q=rJ.position.z;if(EJ){if(Math.hypot(J-EJ.center.x,Q-EJ.center.z)<UJ+4)return EJ}let $=null,Z=UJ+1;for(let W of i6){let Y=Math.hypot(J-W.center.x,Q-W.center.z);if(Y<Z)Z=Y,$=W}return $}window.addEventListener("resize",()=>{s6.aspect=window.innerWidth/window.innerHeight,s6.updateProjectionMatrix(),SJ.setSize(window.innerWidth,window.innerHeight),g7.setSize(window.innerWidth,window.innerHeight)});var AW=new b6;s6.position.set(AJ.x,AJ.y+16,AJ.z+20);function KH(){requestAnimationFrame(KH),AW.update();let J=Math.min(AW.getDelta(),0.05),Q=AW.getElapsed(),$={x:0,z:0};if(x7){if(n9&&X$.steered)n9=!1,c6.setTourActive(!1);$=n9?vq(J):X$.dir()}rJ.update(J,$,X$.boost(),EJ!==null,Q);let Z=EJ;if(EJ=x7?yq():null,EJ!==Z)if(EJ)c6.showCard(EJ.def),n6.play("scan-reveal"),n6.playVoice(EJ.def.id);else c6.hideCard(),n6.stopVoice();$H(i6,EJ,J,Q);let W=L9.getObjectByName("plaza-sign");if(W){let X=x7?0:1;W.material.opacity+=(X-W.material.opacity)*Math.min(1,J*2),W.visible=W.material.opacity>0.02}let Y=x7?new T(rJ.position.x+AJ.x,AJ.y+(XH?0:Math.sin(Q*0.7)*0.4),rJ.position.z+AJ.z):new T(AJ.x,AJ.y+16,AJ.z+20);s6.position.lerp(Y,Math.min(1,J*3)),s6.lookAt(rJ.position.x,2,rJ.position.z),g7.render()}KH();

//# debugId=47FA7A8D7AC7E0A664756E2164756E21
//# sourceMappingURL=index-fkws5map.js.map
