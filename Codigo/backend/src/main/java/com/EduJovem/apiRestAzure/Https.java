package com.EduJovem.apiRestAzure;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;

import com.nimbusds.jose.shaded.gson.Gson;
import com.nimbusds.jose.shaded.gson.JsonArray;
import com.nimbusds.jose.shaded.gson.JsonObject;

public class Https {


    public static double fazerRequisicaoAzure() {
        HttpPost post;
        CloseableHttpClient client;
        StringEntity entity;
        String apiUrl = "http://fc3a301d-8b52-41aa-b986-18e2f12415b8.southcentralus.azurecontainer.io/score";
        String apiKey = "6Kv2rk8fpbtXclfgZRWIsWcavYiPCgYQ";
        String jsonBody = "{\r\n"
        		+ "  \"Inputs\": {\r\n"
        		+ "    \"data\": [\r\n"
        		+ "      {\r\n"
        		+ "        \"month\": 0\r\n"
        		+ "      }\r\n"
        		+ "    ]\r\n"
        		+ "  },\r\n"
        		+ "  \"GlobalParameters\": 1.0\r\n"
        		+ "}\r\n"
        		+ "";

        try {
            // create HttpPost and CloseableHttpClient object
            post = new HttpPost(apiUrl);
            client = HttpClientBuilder.create().build();

            // setup output message by copying JSON body into
            // apache StringEntity object along with content type
            entity = new StringEntity(jsonBody, HTTP.UTF_8);
            entity.setContentEncoding(HTTP.UTF_8);
         // Altere a linha que define o tipo de conteúdo para "application/json"
            entity.setContentType("application/json");

            // add HTTP headers
            post.setHeader("Accept", "text/json");
            post.setHeader("Accept-Charset", "UTF-8");

            // set Authorization header based on the API key
            post.setHeader("Authorization", "Bearer " + apiKey);
            post.setEntity(entity);

            // Call REST API and retrieve response content
            HttpResponse authResponse = client.execute(post);

            int statusCode = authResponse.getStatusLine().getStatusCode();

            if (statusCode >= 200 && statusCode < 300) {

                // Requisição bem-sucedida
                String responseBody = EntityUtils.toString(authResponse.getEntity());
                double resultado = extrairValorDoubleDoResponseBody(responseBody);
                System.out.println("Valor: " + resultado);
                return resultado;

            } else {
                System.out.println("Erro na requisição. Código de status: " + statusCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    private static double extrairValorDoubleDoResponseBody(String responseBody) {
        try{
            // Usando Gson para desserializar o JSON
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(responseBody, JsonObject.class);

        // Extrair o valor double da propriedade "Results"
        JsonArray resultsArray = jsonObject.getAsJsonArray("Results");
        if (resultsArray.size() > 0) {
            return resultsArray.get(0).getAsDouble();
        } else {
            throw new RuntimeException("Resposta JSON não contém a propriedade esperada.");
        }
        }catch(Exception e ){
            e.printStackTrace();
            throw new RuntimeException("Erro ao extrair valor do JSON: " + e.getMessage());

        }
        
    }
    
    public static void main(String[] args) {
    	fazerRequisicaoAzure();
    }
}
