import { makeHttpRequest, mercadoPagoUrl } from "./config";

// CRUD

export async function sendPostRequest(body, endpoint) {
  return await makeHttpRequest({ endpoint, body, method: "POST" });
}

export async function sendGetRequest(endpoint, id = "") {
  return await makeHttpRequest({ endpoint, id });
}

export async function sendPutRequest(id, body, endpoint) {
  return await makeHttpRequest({ endpoint, id, body, method: "PUT" });
}

export async function sendDeleteRequest(id, endpoint) {
  return await makeHttpRequest({ endpoint, id, method: "DELETE" });
}

// Mercado pago

function getFormatDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}


export async function storePayment(data){

  try{

    const body = {
      payment_date: getFormatDate(),
      payer_email: data.payer.email,
      payer_document_type: data.payer.identification.type,
      payer_document_number: data.payer.identification.number,
      installments: data.installments,
      issuer_id: data.issuer_id,
      payment_method_id: data.payment_method_id,
      token: data.token,
      status: 1,
      amount: data.transaction_amount,
      user: 3,
    }

    const response = await fetch(`${mercadoPagoUrl}payment/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    console.log(responseData);

    return responseData;

  }catch(error){
    console.log(`Error: ${error.message}`)
  }

}