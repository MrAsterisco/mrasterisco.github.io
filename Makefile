run:
	docker compose up --build portfolio

lint:
	docker compose up -d --build portfolio
	docker compose exec portfolio yarn lint
	docker compose down