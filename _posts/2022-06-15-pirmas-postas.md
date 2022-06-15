#Labas
```java
public class Figura {

    private String pavadinimas;
    private int plotis;
    private int aukstis;

    public Figura() {
    }

    public Figura(String pavadinimas, int plotis, int aukstis) {
        this.pavadinimas = pavadinimas;
        this.plotis = plotis;
        this.aukstis = aukstis;
    }

    public String getPavadinimas() {
        return pavadinimas;
    }

    public void setPavadinimas(String pavadinimas) {
        this.pavadinimas = pavadinimas;
    }

    public int getPlotis() {
        return plotis;
    }

    public void setPlotis(int plotis) {
        this.plotis = plotis;
    }

    public int getAukstis() {
        return aukstis;
    }

    public void setAukstis(int aukstis) {
        this.aukstis = aukstis;
    }

    @Override
    public String toString() {
        return "Figura{" +
                "pavadinimas='" + pavadinimas + '\'' +
                ", plotis=" + plotis +
                ", aukstis=" + aukstis +
                '}';
    }
}

```
