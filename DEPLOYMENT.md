# 🚀 Deployment Guide - Anurag Dangi Portfolio

## Docker Deployment (Recommended)

### Prerequisites
- Docker installed (version 20.10+)
- Docker Compose installed (version 1.29+)

### Quick Start with Docker

```bash
# Build and run the container
docker-compose up -d

# Access the portfolio
open http://localhost:8080
```

### Manual Docker Commands

```bash
# Build the Docker image
docker build -t anurag-portfolio:latest .

# Run the container
docker run -d \
  --name anurag-portfolio \
  -p 8080:80 \
  --restart unless-stopped \
  anurag-portfolio:latest

# Check container health
docker ps
docker logs anurag-portfolio

# Stop the container
docker stop anurag-portfolio

# Remove the container
docker rm anurag-portfolio
```

### Docker Compose Commands

```bash
# Start the portfolio
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the portfolio
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Check status
docker-compose ps
```

## Kubernetes Deployment

### Deploy to Kubernetes Cluster

```bash
# Create namespace
kubectl create namespace portfolio

# Create deployment
kubectl create deployment anurag-portfolio \
  --image=anurag-portfolio:latest \
  --replicas=3 \
  -n portfolio

# Expose as LoadBalancer service
kubectl expose deployment anurag-portfolio \
  --type=LoadBalancer \
  --port=80 \
  --target-port=80 \
  -n portfolio

# Check status
kubectl get pods -n portfolio
kubectl get svc -n portfolio
```

### Kubernetes Manifests (Optional)

Create `k8s-deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: anurag-portfolio
  namespace: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: anurag-portfolio:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 3
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: anurag-portfolio-svc
  namespace: portfolio
spec:
  type: LoadBalancer
  selector:
    app: portfolio
  ports:
  - port: 80
    targetPort: 80
```

Apply:
```bash
kubectl apply -f k8s-deployment.yaml
```

## Cloud Deployment

### AWS EKS Deployment

```bash
# Push to ECR
aws ecr create-repository --repository-name anurag-portfolio
docker tag anurag-portfolio:latest <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/anurag-portfolio:latest
docker push <AWS_ACCOUNT_ID>.dkr.ecr.us-east-1.amazonaws.com/anurag-portfolio:latest

# Deploy to EKS
kubectl apply -f k8s-deployment.yaml

# Create ingress
kubectl apply -f ingress.yaml
```

### Azure AKS Deployment

```bash
# Push to ACR
az acr create --resource-group portfolio-rg --name portfolioregistry --sku Basic
az acr build --registry portfolioregistry --image anurag-portfolio:latest .

# Deploy to AKS
kubectl apply -f k8s-deployment.yaml

# Expose via Azure Load Balancer
kubectl expose deployment anurag-portfolio --type=LoadBalancer --name=portfolio-lb
```

### Static Hosting (No Docker)

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### AWS S3 + CloudFront
```bash
# Upload to S3
aws s3 sync . s3://your-bucket-name --exclude ".git/*" --exclude "*.md"

# Create CloudFront distribution
aws cloudfront create-distribution --origin-domain-name your-bucket-name.s3.amazonaws.com
```

## CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Build Docker image
      run: docker build -t anurag-portfolio:${{ github.sha }} .
    
    - name: Push to registry
      run: |
        echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
        docker tag anurag-portfolio:${{ github.sha }} username/anurag-portfolio:latest
        docker push username/anurag-portfolio:latest
    
    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/anurag-portfolio anurag-portfolio=username/anurag-portfolio:${{ github.sha }}
```

## Performance Optimization

### Nginx Caching
Already configured in `nginx.conf`:
- Static assets cached for 1 year
- Gzip compression enabled
- Security headers included

### CDN Integration
Add CloudFlare or similar CDN for global performance:
- DNS CNAME to CloudFlare
- Enable caching, minification, and HTTP/2

## Monitoring

### Docker Container Monitoring
```bash
# Resource usage
docker stats anurag-portfolio

# Logs
docker logs -f anurag-portfolio
```

### Kubernetes Monitoring
```bash
# Pod metrics
kubectl top pods -n portfolio

# Logs
kubectl logs -f deployment/anurag-portfolio -n portfolio
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs anurag-portfolio

# Verify image
docker images | grep anurag-portfolio

# Test locally
docker run -it --rm -p 8080:80 anurag-portfolio:latest
```

### Port already in use
```bash
# Change port in docker-compose.yml
ports:
  - "8081:80"  # Use different host port
```

### Health check failing
```bash
# Test health endpoint
curl http://localhost:8080/

# Check nginx config
docker exec anurag-portfolio nginx -t
```

## Security Best Practices

1. **Use HTTPS**: Deploy behind a reverse proxy with SSL/TLS
2. **Update Dependencies**: Keep base images and packages updated
3. **Scan for Vulnerabilities**: Use Trivy or Snyk
   ```bash
   trivy image anurag-portfolio:latest
   ```
4. **Limit Resources**: Set memory and CPU limits in Kubernetes
5. **Enable RBAC**: Use proper service accounts in K8s

## Support

For issues or questions:
- Email: anurag.dangi2025@gmail.com
- LinkedIn: linkedin.com/in/anurag-dangi

---

**Built with DevOps Excellence** ⚡

