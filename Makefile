watch:
	@clear
	@roots clean
	@roots watch

deploy:
	@roots compile
	@echo 'Deploying to Github Pages'
	@ship gh-pages
