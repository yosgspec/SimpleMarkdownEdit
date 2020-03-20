using System;

public class AppStore{
	public string mdTxt{get;private set;}="";
	public string mdHtml{get;private set;}="";

	public void setMdTxt(string txt){
		this.mdTxt=txt;
		NotifyStateChanged();
	}
	public void setMdHtml(string html){
		this.mdHtml=html;
		NotifyStateChanged();
	}

	public event Action OnChange;
	private void NotifyStateChanged()=>OnChange?.Invoke();
}
