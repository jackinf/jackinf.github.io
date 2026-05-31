# Makefile — Portfolio (jackinf.github.io)
# Bun + React 19 + TypeScript portfolio. Run `make help` to list targets.

# Bun may not be on PATH; fall back to the standard install location.
BUN := $(shell command -v bun 2>/dev/null || echo $(HOME)/.bun/bin/bun)

.DEFAULT_GOAL := help

.PHONY: help install dev run build preview test typecheck clean reinstall

help: ## Show this help
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| sort \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies (bun install)
	$(BUN) install

dev: ## Start the HMR dev server
	$(BUN) run dev

run: dev ## Alias for `make dev`

build: ## Bundle to dist/ (copies public/ and game/)
	$(BUN) run build

preview: build ## Build, then serve dist/ at :4173
	$(BUN) run preview

typecheck: ## Type-check with tsc (no emit)
	$(BUN) x tsc --noEmit

test: typecheck ## Run checks (currently type-checking only)

clean: ## Remove build output
	rm -rf dist

reinstall: clean ## Remove node_modules and reinstall
	rm -rf node_modules bun.lock
	$(BUN) install
