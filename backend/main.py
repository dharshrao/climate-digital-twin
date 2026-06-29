from fastapi import FastAPI
from routes.climate import router as climate_router
from routes.forecast import router as forecast_router
from database import engine
from models import Base
from routes.climate import router as climate_router
from routes.heatmap import router as heatmap_router
from routes.alerts import router as alerts_router
from routes.insights import router as insights_router
from routes.dashboard import router as dashboard_router
from fastapi.middleware.cors import CORSMiddleware
# Create the database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Climate Digital Twin API")
app.include_router(climate_router)
app.include_router(forecast_router)
@app.get("/")
def home():
    return {"message": "Climate Digital Twin Backend Running"}
app.include_router(heatmap_router)
app.include_router(insights_router)
app.include_router(alerts_router)
app.include_router(dashboard_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)