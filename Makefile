# Development
run: image-build image-up

# Image
image-build:
	docker compose build

image-up: 
	docker compose up

image-down: 
	docker compose down --remove-orphans -v

image-clear:
	docker system prune -a --volumes -f

# Production Image
prod-run: prod-image-build prod-image-up

prod-image-build:
	docker compose -f compose.prod.yaml build

prod-image-up:
	docker compose -f compose.prod.yaml up