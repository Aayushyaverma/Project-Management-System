package com.example.pmsystem.payload;

public class JWTLoginSuccessResponse {
    private boolean success;
    private String accessToken;

    public JWTLoginSuccessResponse(boolean success, String accessToken) {
        this.success = success;
        this.accessToken = accessToken;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    @Override
    public String toString() {
        return "JWTLoginSuccessResponse{" +
                "success=" + success +
                ", token='" + accessToken + '\'' +
                '}';
    }
}
